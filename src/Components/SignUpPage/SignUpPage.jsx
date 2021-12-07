import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../Utils/api";
import { Link, useNavigate } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [skills, setSkills] = useState("");
  let navigate=useNavigate();

  const handleSignUp = async () => {
    try {
      let res = await axios.post(`${BASE_URL}/auth/register`, {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        userRole: 0,
        skills: skills,
      });
      console.log(res.statusText);
      navigate("/jobportal", { replace: true });
    } catch (err) {
      console.log(err.response.data);
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
        <div className="register-page-container">
          <div className="register-page-header">SignUp</div>
          <div
            style={{
              marginLeft: "23px",
              marginBottom: "13px",
              color: `var(--unnamed-color-303f60)`,
            }}
          >
            I'm a
          </div>
          <div style={{ display: "flex", marginBottom: "17px" }}>
            <button>Recruiter</button>
            <button
              style={{
                background: "#FFFFFF",
                color: `var(--unnamed-color-303f60)s`,
                border: "1px solid #c6c6c6",
              }}
            >
              Candidate
            </button>
          </div>
          <div className="name-container">
            <div className="heading">Full Name</div>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              placeholder="Enter your full name"
            />
          </div>
          <div className="register-email-container">
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
          <div className="password">
            <div className="signup-password">
              <div className="heading">Create Password</div>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="confirm-password">
              <div className="heading">Confirm Password</div>
              <input
                type="password"
                value={confirmPassword}
                placeholder="Re-enter your password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="skills-container">
            <div className="heading">Skills</div>
            <input
              type="text"
              onChange={(e) => {
                setSkills(e.target.value);
              }}
              value={skills}
              placeholder="Enter comma separated skills"
            />
          </div>
          <button className="signup-button" onClick={handleSignUp}>
            Signup
          </button>
          <div className="register-suggestion">
            <div>Have an account?&nbsp;</div>
            <Link to="/auth/login" style={{ textDecoration: "none" }}>
              <div style={{ color: `var(--unnamed-color-43afff)` }}>Login</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
