import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";
import { Typography, Divider } from "@mui/material";
import axios from "axios";
import BASE_URL from "../../Utils/api";
import { userToken } from "../LoginPage/LoginPage";
import "./Job.css";

const Job = ({ jobdata }) => {
  const { title, description, location, id } = jobdata;
  const [open, setOpen] = useState(false);
  const [applications, setApplications] = useState([]);
  const [empty, setEmpty] = useState(false);
  const style = {
    width: "600px",
    background: "white",
    margin: "auto",
    top: "85px",
    position: "absolute",
    borderRadius: "8px",
    left: "calc(50% - 300px)",
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleApplication = async () => {
    try {
      let res = await axios.get(
        `${BASE_URL}/recruiters/jobs/${id}/candidates`,
        {
          headers: { Authorization: `${userToken}` },
        }
      );
      setOpen(true);
      console.log(res);
      let obj = res.data;
      if (obj.hasOwnProperty("data")) {
        setApplications(obj.data);
      } else {
        setEmpty(true);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <>
      <div className="job-container">
        <div className="job-header">{title}</div>
        <div className="job-description">{description}</div>
        <div className="location">
          <div>
            <i className="fa fa-map-marker"></i>
          </div>
          <div className="location-header">{location}</div>
        </div>
        <button className="application" onClick={handleApplication}>
          View Applications
        </button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box style={style}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="applications-header">Applicants for this job</div>
            <div style={{ marginRight: "16px", fontSize: "18px", opacity: 1 }}>
              <i className="fa fa-close" onClick={()=>{setOpen(false)}}></i>
            </div>
          </div>
          <Divider />
          {empty ? (
            <>
              <div className="applications-count">Total 0 application</div>
              <div className="empty-applications-container">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="fa fa-address-book-o"
                    style={{ fontSize: "80px", opacity: "0.5" }}
                  ></i>
                </div>
                <div className="empty-applications-header">
                  No applications available!
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="applications-count">
                Total {applications.length} applications
              </div>
              <div className="applications-container">
                {applications.map((userData) => {
                  return (
                    <div className="applicants-card-container" key={uuidv4()}>
                      <div style={{ display: "flex", alignItems:"center", margin:"12px" }}>
                        <div className="applicant-logo">
                          {userData.name.charAt(0).toUpperCase()}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "12px",
                          }}
                        >
                          <div className="applicant-name">{userData.name}</div>
                          <div className="applicant-email">
                            {userData.email}
                          </div>
                        </div>
                      </div>
                      <div className="skills-header">Skills</div>
                      <div className="applicant-skills">{userData.skills}</div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Job;
