import React from "react";
import axios from "axios";
import env from "react-dotenv";
import { useAccount } from "wagmi";

import "./styles/login.css";
import logo from "./assets/images/logo.png";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function RoleSelector() {
  let navigate = useNavigate();
  const { address, isConnected } = useAccount();

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
      url: `${env.API_URL}/insertRole`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
                  recruiters helping them find the right candidate? Then this is
                  you.
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
                  Are you here to get your dream job, meet like-minded people to
                  interact and learn? Then here you go.
                </p>
              </div>
              {/* <img src={emailpic} alt="img" /> */}
            </div>

            <form action="" className="email-form">
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
                    sendRole(address, value);
                    if (value === "company") {
                      navigate("/companyregform");
                    } else if (value === "creator") {
                      navigate("/role/creator");
                    } else if (value === "candidate") {
                      navigate("/candidateregform");
                    } else {
                    }
                  }}
                >
                  Next
                </button>
              </div>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

export default RoleSelector;
