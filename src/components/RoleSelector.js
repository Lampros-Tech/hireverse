import React from "react";

import "./styles/login.css";
import logo from "./assets/images/logo.png";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function RoleSelector() {
  let navigate = useNavigate();

  // const options = [
  //   { label: "Select your role", value: "" },
  //   { label: "Creator", value: "creator" },
  //   { label: "Candidate", value: "candidate" },
  //   { label: "Company", value: "company" },
  // ];

  const [value, setValue] = React.useState("");

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
              Guidance About Roles
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
                  <option className="role-options" value="candidate">
                    Candidate
                  </option>
                  <option className="role-options" value="company">
                    Company
                  </option>
                </select>
                <span className="focus-input"></span>
              </div>
              <div className="btn-container">
                <button
                  className="email-verify-button"
                  onClick={() => {
                    if (value === "company") {
                      navigate("/companyregform");
                    } else if (value === "creator") {
                      navigate("/creatorregform");
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
