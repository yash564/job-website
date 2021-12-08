import React from "react";
import "./HomePage.css";
import Logo1 from "../../Images/Logo-1.png";
import Logo2 from "../../Images/Logo-2.png";
import Logo3 from "../../Images/Logo-3.png";
import Logo4 from "../../Images/Logo-4.png";
import Logo5 from "../../Images/Logo-5.png";
import Logo6 from "../../Images/Logo-6.jpg";
import Logo7 from "../../Images/Logo-7.png";
import Logo8 from "../../Images/Logo-8.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ height: "90vw" }}>
      <div className="upper-home-page">
        <div className="navbar">
          <Link to="/">
            <div style={{ display: "flex" }}>
              <div className="upper-logo-1">My</div>
              <div className="upper-logo-2">Jobs</div>
            </div>
          </Link>
          <Link to="/auth/login">
            <button className="nav-button">Login/Signup</button>
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
        <div className="container">
          <div className="container-heading-top">Welcome to</div>
          <div className="container-heading-bottom-1">My</div>
          <div className="container-heading-bottom-2">Jobs</div>
        </div>
        <div className="image-container"></div>
        <Link to="/auth/login">
          <button className="container-button">Get Started</button>
        </Link>
      </div>
      <div className="lower-home-page">
        <div className="card-container">
          <div className="card-container-header">Why Us</div>
          <div className="cards">
            <div className="card">
              <div className="card-header">Get More Visibility</div>
              <div className="card-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores magnam sunt facere atque debitis placeat?Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Soluta,
                consectetur?
              </div>
            </div>
            <div className="card">
              <div className="card-header">Organize Your Candidates</div>
              <div className="card-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores magnam sunt facere atque debitis placeat?Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Veritatis,
                perferendis.
              </div>
            </div>
            <div className="card">
              <div className="card-header">Verify Their Abilities</div>
              <div className="card-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores magnam sunt facere atque debitis placeat?Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Eius, perferendis.
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="about-header">Companies Who Trust Us</div>
          <div className="about-logos">
            <div className="logo-1">
              <img src={Logo1} />
            </div>
            <div className="logo-2">
              <img src={Logo2} />
            </div>
            <div className="logo-3">
              <img src={Logo3} />
            </div>
            <div className="logo-4">
              <img src={Logo4} />
            </div>
            <div className="logo-5">
              <img src={Logo5} />
            </div>
            <div className="logo-6">
              <img src={Logo6} />
            </div>
            <div className="logo-7">
              <img src={Logo7} />
            </div>
            <div className="logo-8">
              <img src={Logo8} />
            </div>
            <div className="logo-6">
              <img src={Logo6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
