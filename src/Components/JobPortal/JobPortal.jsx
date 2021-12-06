import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../../Utils/api";
import "./JobPortal.css";

const JobPortal = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(async () => {
    let res = await fetch(API_URL);
    let data = await res.json();
    console.log(data);
  }, []);

  return (
    <div
      style={{ background: "#EDF6FF", height: "100vh", position: "relative" }}
    >
      <div className="upper-jobportal-container">
        <div className="navbar">
          <Link to="/">
            <div style={{ display: "flex" }}>
              <div className="upper-logo-1">My</div>
              <div className="upper-logo-2">Jobs</div>
            </div>
          </Link>
          <div className="post-job-button">Post a Job</div>
          <div className="account">R</div>
          <div class="arrow-down" onClick={handleModal}></div>
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
            class="fa fa-home"
            style={{
              fontSize: "20px",
              position: "absolute",
              color: "#ffffff",
              top: "80px",
              left: "173px",
            }}
          ></i>
          <div className="home">Home</div>
        </Link>
        {modal && <div className="box arrow-top">Logout</div>}
        <div className="home-bottom">Jobs posted by you</div>
      </div>
    </div>
  );
};

export default JobPortal;
