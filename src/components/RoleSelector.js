import React, { useState } from "react";
import axios from "axios";

import { useAccount } from "wagmi";

import "./styles/login.css";
import logo from "./assets/images/logo.png";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function RoleSelector() {
  let navigate = useNavigate();
  const { address, isConnected } = useAccount();

  const [btnloading, setbtnLoading] = useState(false);

  // const options = [
  //   { label: "Select your role", value: "" },
  //   { label: "Creator", value: "creator" },
  //   { label: "Candidate", value: "candidate" },
  //   { label: "Company", value: "company" },
  // ];

  const [value, setValue] = React.useState("");

  const sendRole = (walletAddress, role) => {
    var data = JSON.stringify({
      walletAddress: walletAddress,
      role: role,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/insertRole`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setbtnLoading(false);
        if (value === "company") {
          navigate("/companyregform");
        } else if (value === "creator") {
          navigate("/role/creator");
        } else if (value === "candidate") {
          navigate("/candidateregform");
        } else {
        }
      })
      .catch(function (error) {
        setbtnLoading(false);
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  if (isConnected) {
    return (
      <>
        <section className="login-main">
          <img className="f-logo-img" src={logo} alt="logo" />
          <section className="login-inside">
            <section className="wrap-role">
              <div className="email-pic role-guide">
                <h1 className="role-title-h1">Guidance About Roles</h1>
                <div className="role-item">
                  <h2 className="role-title-h2">Creator :</h2>
                  <p className="role-p">
                    Are you the one interested in creating assessments for
                    recruiters helping them find the right candidate? Then this
                    is you.
                  </p>
                </div>
                <div className="role-item">
                  <h2 className="role-title-h2">Company :</h2>
                  <p className="role-p">
                    Are you looking to post a job, find the right assessment for
                    your candidates or meet prospective candidates in the
                    Hireverse to work at your place? Then pick this role.
                  </p>
                </div>
                <div className="role-item">
                  <h2 className="role-title-h2">Candidate :</h2>
                  <p className="role-p">
                    Are you here to get your dream job, meet like-minded people
                    to interact and learn? Then here you go.
                  </p>
                </div>
                {/* <img src={emailpic} alt="img" /> */}
              </div>

              <div className="email-form">
                <h1 className="email-form-title">What represents you well?</h1>
                <div className="wrap-input validate-input">
                  <select
                    className="role-select"
                    onChange={handleChange}
                    value={value}
                    required
                  >
                    <option value="" disabled hidden>
                      Select your role
                    </option>

                    <option className="role-options" value="creator">
                      Creator
                    </option>
                    <option className="role-options" value="company">
                      Company
                    </option>
                    <option className="role-options" value="candidate">
                      Candidate
                    </option>
                  </select>
                  <span className="focus-input"></span>
                </div>
                <div className="btn-container">
                  <button
                    className="email-verify-button"
                    onClick={() => {
                      setbtnLoading(true);
                      sendRole(address, value);
                    }}
                  >
                    {btnloading ? (
                      <svg
                        className="animate-spin button-spin-svg"
                        version="1.1"
                        id="L9"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                      >
                        <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"></path>
                      </svg>
                    ) : (
                      "Next"
                    )}
                  </button>
                </div>
              </div>
            </section>
          </section>
        </section>
      </>
    );
  } else {
    navigate("/");
  }
}

export default RoleSelector;
