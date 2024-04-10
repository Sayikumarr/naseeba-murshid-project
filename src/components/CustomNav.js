import React from "react";
import { Link } from "react-router-dom";

function CustomNav() {
  return (
    <div className="custom_menu-container">
      <div className="container">
        <div className="custom_menu">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="../" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="../about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="../gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="../blogs" className="nav-link">
                Blog Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="../tracker" className="nav-link">
                Track Order
              </Link>
            </li>
            <li className="nav-item">
              <Link to="../contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="user_option">
            <div className="login_btn-container btn-block btn-dark">
              <Link to="../get-yours">Get Yours</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomNav;
