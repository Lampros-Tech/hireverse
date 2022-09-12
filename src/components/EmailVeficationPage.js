import React, { useEffect, useState } from "react";
import "./styles/login.css";

import { useNavigate } from "react-router-dom";
import logo from "./styles/logo.png";
import su_image from "./assets/images/signup_image_2.svg";

// import emailpic from "./styles/email_pic.webp";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function EmailVeficationPage() {
  let navigate = useNavigate();

  // let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", username: "" });

  useEffect(() => {
    console.log(credentials);
  }, [credentials]);

  return (
    <>
      <section className="login-main">
        <section className="login-inside">
          <section className="wrap-email">
            <img className="f-logo-img" src={logo} alt="logo" />
            <div className="email-pic">
              <img
                className="signup_image"
                src={su_image}
                alt="signup_illustration"
              />

              {/* <div id="container">
                <div className="ev-box">
                  <div className="image"></div>
                  <div className="shadow"></div>
                </div>
              </div> */}
              {/* <img className="" src={emailpic} alt="img" /> */}
            </div>
            <form action="" className="email-form">
              <h1 className="email-form-title">Sign Up</h1>
              <div className="wrap-input validate-input">
                <input
                  className="input"
                  value={credentials.email}
                  type="text"
                  placeholder="Email"
                  onChange={(event) =>
                    setCredentials({
                      email: event.target.value,
                      username: credentials.username,
                    })
                  }
                />
                <input
                  className="input"
                  value={credentials.username}
                  type="text"
                  placeholder="Username"
                  onChange={(event) =>
                    setCredentials({
                      email: credentials.email,
                      username: event.target.value,
                    })
                  }
                />

                {/* <span className="symbol-input"></span> */}
              </div>

              <div className="btn-container">
                <button
                  className="email-verify-button"
                  disabled={
                    !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(
                      credentials.email
                    )
                  }
                  onClick={() => navigate("/role")}
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

export default EmailVeficationPage;
