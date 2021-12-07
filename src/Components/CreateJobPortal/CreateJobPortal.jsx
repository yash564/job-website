import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../../Utils/api";
import { userToken } from "../LoginPage/LoginPage";
import { Link, useNavigate } from "react-router-dom";
import "./CreateJobPortal.css";

const CreateJobPortal = () => {
  const [modal, setModal] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleModal = () => {
    setModal(!modal);
  };

  const handleJobPost = async () => {
    try {
      let res = await axios.post(
        `${BASE_URL}/jobs/`,
        {
          "title": jobTitle,
          "description": description,
          "location": location,
        },
        {
          headers: { Authorization: `${userToken}` },
        }
      );
      console.log(res);
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
          <div className="post-job-button">Post a Job</div>
          <div className="account">R</div>
          <div className="arrow-down" onClick={handleModal}></div>
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
        <Link to="/">
          <i
            className="fa fa-home"
            style={{
              fontSize: "20px",
              position: "absolute",
              color: "#ffffff",
              top: "80px",
              left: "173px",
            }}
          ></i>
          <div className="home">Home &gt; Post a Job</div>
        </Link>
        {modal && <div className="box arrow-top">Logout</div>}
      </div>
      <div className="create-job-page-container">
        <div className="register-page-header">Post a Job</div>
        <div className="name-container">
          <div className="heading">Job title</div>
          <input
            type="text"
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
            value={jobTitle}
            placeholder="Enter job title"
          />
        </div>
        <div className="job-description-container">
          <div className="heading">Description</div>
          <input
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            placeholder="Enter job description"
          />
        </div>
        <div className="name-container">
          <div className="heading">Location</div>
          <input
            type="text"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            value={location}
            placeholder="Enter job location"
          />
        </div>
        <button className="signup-button" onClick={handleJobPost}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreateJobPortal;
