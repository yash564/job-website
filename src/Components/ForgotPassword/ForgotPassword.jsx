import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../Utils/api";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
let verifyToken;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [empty, setEmpty] = useState(false);
  let navigate = useNavigate();

  const handleForgot = async () => {
    if(email===""){
      setEmpty(true);
    }else{
      setEmpty(false);
      try {
        let res = await axios.get(
          `${BASE_URL}/auth/resetpassword?email=mg@gmail.com`
        );
        console.log(res.data.data.token);
        verifyToken = res.data.data.token;
        navigate("/resetpassword", { replace: true });
      } catch (err) {
        console.log(err.response);
      }
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
          {empty ? (
            <div className="empty-forgot-error">All Fields are mandatory</div>
          ) : (
            <div className="not-empty">All Fields are mandatory</div>
          )}
          {/* <Link to</div>="/resetpassword" style={{ textDecoration: "none" }}> */}
          <button className="forgot-password-button" onClick={handleForgot}>
            Submit
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export { ForgotPassword, verifyToken };
