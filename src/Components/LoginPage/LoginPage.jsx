import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../Utils/api";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
let userToken;

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);
  let navigate = useNavigate();

  const handleLogin = async () => {
    try {
      let res = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });
      userToken=res.data.data.token;
      console.log(res.data.data.token);
      if (res.status === 200) {
        console.log("email and pass is correct");
        navigate("/jobportal", { replace: true });
      }
    } catch (err) {
      console.log(err.response);
      if (email === "" || password === "") {
        setError(false);
        setEmpty(true);
      } else {
        setEmpty(false);
        setError(true);
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
      </div>
      <div className="login-page-container">
        <div className="login-page-header">Login</div>
        <div className="login-email-container">
          <div className="heading">Email address</div>
          {error ? (
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ border: "1px solid #FF333380" }}
            />
          ) : (
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          )}
        </div>
        <div className="password-container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="heading">Password</div>
            <Link to="/auth/forgotpassword">
              <div className="forgot">Forgot your password?</div>
            </Link>
          </div>
          {error ? (
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{ border: "1px solid #FF333380" }}
            />
          ) : (
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          )}
        </div>
        {empty ? (
          <div className="empty">All Fields are mandatory</div>
        ) : (
          <div className="not-empty">All Fields are mandatory</div>
        )}
        {error ? (
          <div className="incorrect">Incorrect email address or password</div>
        ) : (
          <div className="correct">Incorrect email address or password</div>
        )}
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <div className="suggestion">
          <div>New to MyJobs?&nbsp;</div>
          <Link to="/auth/register" style={{ textDecoration: "none" }}>
            <div style={{ color: `var(--unnamed-color-43afff)` }}>
              Create an account
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export {LoginPage,userToken};

