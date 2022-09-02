import React, { useState } from "react";
import "./styles/login.css";
import emailpic from "./styles/email_pic.webp";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function EmailVeficationPage() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", code: "" });
  return (
    <>
      <section className="login-main">
        <section className="login-inside">
          <section className="wrap-email">
            <div className="email-pic">
              <img src={emailpic} alt="img" />
            </div>
            <form action="" className="email-form">
              <span className="email-form-title">Email Verification</span>
              <div className="wrap-input validate-input">
                <input
                  className="input"
                  value={credentials.email}
                  type="text"
                  placeholder="Email"
                  onChange={(event) =>
                    setCredentials({
                      email: event.target.value,
                      code: credentials.code,
                    })
                  }
                />

                <span className="focus-input"></span>
                {/* <span className="symbol-input"></span> */}
              </div>
              <div className="btn-container">
                <button className="email-verify-button">Send Code</button>
              </div>
              <div className="wrap-input validate-input">
                <input
                  className="input"
                  value={credentials.code}
                  type="password"
                  placeholder="enter your password"
                  onChange={(event) =>
                    setCredentials({
                      email: credentials.email,
                      code: event.target.value,
                    })
                  }
                />
                <span className="focus-input"></span>
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
                  onClick={() => {
                    if (credentials.code === "letmein") navigate("/role");
                  }}
                >
                  Verify Email
                </button>
              </div>
              {/* <div className="text-center pt-12">
                <span className="txt1">Forgot </span>
                <Link to="/#">Username / Password?</Link>
              </div>
              <div className="text-center pt-20">
                <Link to="/#">Create your account </Link>
              </div> */}
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

export default EmailVeficationPage;
