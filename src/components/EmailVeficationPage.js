import React from "react";
import "./styles/login.css";
import emailpic from "./styles/email_pic.webp";
import { Link } from "react-router-dom";

function EmailVeficationPage() {
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
                  type="email"
                  required
                  className="input"
                  placeholder="Email"
                />

                <span className="focus-input"></span>
                {/* <span className="symbol-input"></span> */}
              </div>
              <div className="btn-container">
                <button className="email-verify-button">Send Code</button>
              </div>
              <div className="wrap-input validate-input">
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="Code"
                />
                <span className="focus-input"></span>
                {/* <span className="symbol-input"></span> */}
              </div>
              <div className="btn-container">
                <button className="email-verify-button">Verify Email</button>
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
