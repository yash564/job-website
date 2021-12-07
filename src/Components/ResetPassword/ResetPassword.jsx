import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./ResetPassword.css";
import BASE_URL from "../../Utils/api";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();

  const handleReset = async () => {
    try {
      let res = await axios.post(`${BASE_URL}/auth/resetpassword"`, {
        password,
        confirmPassword,
      });
      console.log(res);
      navigate("/jobportal", { replace: true });
    } catch (err) {
      console.log(err.response);
    }
  };

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
        <div className="login-page-container">
          <div className="login-page-header">Reset Your Password</div>
          <div className="forgot-heading">Enter your new password below.</div>
          <div className="login-email-container">
            <div className="heading">New Password</div>
            <input
              type="password"
              value={password}
              placeholder="Enter your email"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="login-email-container">
            <div className="heading">Confirm New Password</div>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Enter your email"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <button className="login-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
