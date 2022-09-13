import React from "react";

import "./styles/login.css";
import logo from "./assets/images/logo.png";
import { useNavigate } from "react-router-dom";

function CreatorSignRequest() {
  let navigate = useNavigate();

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
              Some Information
              {/* <img src={emailpic} alt="img" /> */}
            </div>

            <form action="" className="email-form">
              {/* <h1 className="email-form-title">Request</h1> */}
              <div className="wrap-input validate-input">
                <button className="table-button">Connect 1</button>
                <button className="table-button">Connect 2</button>
                <button className="table-button">Connect 3</button>
              </div>
              <div className="btn-container">
                <button
                  className="email-verify-button"
                  onClick={() => {
                    navigate("/creatorregform");
                  }}
                >
                  Skip
                </button>
              </div>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

export default CreatorSignRequest;
