import React from 'react'
import './Navbar.css'
import bell from './bi_bell.png';
import profileImg from './woman_6997633.png';


export const Navbar = () => {
  return (
    <div className="nav-components">
    <div className="top-nav">
        <input type="search" placeholder="Search..." className="search-input"/>
        <img src={bell} width="30" alt="alert" className="icon"/>
        <div>
            <div className="dropdown">
        <button className="dropbtn">
        <img src={profileImg} width="50" alt="profile" className="icon"/>
        </button>
        <div class="dropdown-content">
          <a href="#profile">Profile</a>
          <a href="#exceluploads">Excel Uploads</a>
          <a href="#datadownload">Data Download</a>
          <a href="#inactiveprojects">Inactive Projects</a>
          <a href="#settings">Settings</a>
          <a href="#logout">Log Out</a>
        </div>
      </div>
        </div>
    </div>
    </div>
  )
}
