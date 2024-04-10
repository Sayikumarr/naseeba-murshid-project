import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <div className="navbar-logo-barger"><a className="navbar-brand" href="../">
            <img src="images/logo.png" alt="" />
            <span>Naseeba.Murshid</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button></div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-2">
              <li className="nav-item active">
                <Link className="nav-link" to="../">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../about">
                  About{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../gallery">
                  Gallery{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../blogs">
                Blog Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../tracker">
                  Track Order
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="../contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="user_option">
              <div className="login_btn-container btn-block btn-success ">
                <Link to="../get-yours">Get Yours</Link>
              </div>
            </div>
          </div>
          {/* <div className="call_btn">
            <a href="/">Call: +01234567890</a>
          </div> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
