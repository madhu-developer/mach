import React from "react";
import "./Sidenav.css";
import dashboardIcon from "./ic_round-home.png";
import clientIcon from "./eva_person-outline.png";
import projectIcon from "./f7_doc.png";
import { Link } from "react-router-dom";

export const Sidenav = () => {
  return (
    <div>
      <aside className="side-nav">
        <nav className="nav-items">
          <Link to="/">
            <div className="each-nav-item">
              <img src={dashboardIcon} alt="icon" width="35" />
              <a href="#dashboard">Dashboard</a>
            </div>
          </Link>
          <Link to="/clients">
            <div className="each-nav-item">
              <img src={clientIcon} alt="icon" width="35" />
              <a href="#clients">Clients</a>
            </div>
          </Link>
          <Link to="/projects">
            <div className="each-nav-item">
              <img src={projectIcon} alt="icon" width="35" />
              <a href="#projects">Projects</a>
            </div>
          </Link>
        </nav>
      </aside>
    </div>
  );
};
