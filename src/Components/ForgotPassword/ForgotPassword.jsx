import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div
      style={{ background: "#EDF6FF", height: "100vh", position: "relative" }}
    >
      <div className="upper-container">
        <div className="navbar">
          <Link to="/">
            <div style={{ display: "flex" }}>
              <div className="upper-logo-1">My</div>
              <div className="upper-logo-2">Jobs</div>
            </div>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="bottom-nav">.</div>
        </div>
        <div className="forgot-password-container">
          <div className="forgot-password-header">Forgot your password?</div>
          <div className="forgot-heading">
            Enter the email associated with your account and we'll send you
            instructions to reset your password
          </div>
          <div className="email-container">
            <div className="heading">Email address</div>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button className="forgot-password-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
