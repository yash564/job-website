import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./JobPortal.css";
import BASE_URL from "../../Utils/api";
import { userToken } from "../LoginPage/LoginPage";
import Job from "./../Job/Job";
let jobsCount;
let limit;

const JobPortal = () => {
  const [modal, setModal] = useState(false);
  const [allPostedJobs, setAllPostedJobs] = useState([]);
  const [page, setPage] = useState(1);
  let navigate=useNavigate();

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleLogOut = () =>{
    navigate("/", { replace: true });
  }

  useEffect(async () => {
    try {
      let res = await axios.get(`${BASE_URL}/recruiters/jobs?page=1`, {
        headers: { Authorization: `${userToken}` },
      });
      let obj = res.data.data.metadata;
      jobsCount = obj.count;
      limit = obj.limit;
      console.log(res.data.data.metadata);
      setAllPostedJobs(res.data.data.data);
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  useEffect(async () => {
    try {
      let res = await axios.get(`${BASE_URL}/recruiters/jobs?page=${page}`, {
        headers: { Authorization: `${userToken}` },
      });

      console.log(res.data.data);
      setAllPostedJobs(res.data.data.data);
    } catch (err) {
      console.log(err.response.data);
    }
  }, [page]);

  return (
    <div
      style={{ background: "#EDF6FF", height: "174vh", position: "relative" }}
    >
      <div className="upper-jobportal-container">
        <div className="navbar">
          <Link to="/">
            <div style={{ display: "flex" }}>
              <div className="upper-logo-1">My</div>
              <div className="upper-logo-2">Jobs</div>
            </div>
          </Link>
          <Link to="/create-job">
            <div className="post-job-button">Post a Job</div>
          </Link>
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
          <div className="home">Home</div>
        </Link>
        {modal && <div className="box arrow-top" onClick={handleLogOut}>Logout</div>}
        <div className="home-bottom">Jobs posted by you</div>
        {allPostedJobs.length > 0 ? (
          <>
            <div className="jobs-cards-container">
              {allPostedJobs.map((job) => {
                return <Job key={uuidv4()} jobdata={job}></Job>;
              })}
            </div>
            <div className="pages">
              <Stack spacing={2}>
                <Pagination
                  count={Math.ceil(jobsCount / limit)}
                  page={page}
                  onChange={handleChange}
                  color="primary"
                />
              </Stack>
            </div>
          </>
        ) : (
          <div className="no-job-container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa fa-file-text" style={{ fontSize: "90px" }}></i>
            </div>
            <div className="no-job-header">
              Your posted jobs will show here!
            </div>
            <Link to="/create-job">
              <button className="post">Post a job</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPortal;
