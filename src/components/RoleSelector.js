import React from "react";
import "./styles/login.css";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function RoleSelector() {
  let navigate = useNavigate();

  const options = [
    { label: "Select Option", value: " " },
    { label: "Company", value: "company" },
    { label: "Creator", value: "creator" },
    { label: "Candidate", value: "candidate" },
  ];

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <section className="login-main">
        <section className="login-inside">
          <section className="wrap-role">
            <div className="email-pic role-guide">
              Guidance About Roles
              {/* <img src={emailpic} alt="img" /> */}
            </div>
            <form action="" className="email-form">
              <span className="email-form-title">
                What represents you well?
              </span>
              <div className="wrap-input validate-input">
                <select value={value} onChange={handleChange}>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
                <span className="focus-input"></span>
              </div>
              <div className="btn-container">
                <button
                  className="email-verify-button"
                  onClick={() => {
                    if (value === "company") {
                      navigate("/companyregform");
                    }
                    if (value === "creator") {
                      navigate("/creatorregform");
                    }

                    if (value === "candidate") {
                      navigate("/candidateregform");
                    }
                  }}
                >
                  Submit
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
