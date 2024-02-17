import React from "react";
import { Link } from 'react-router-dom';

function InfoSection() {
  return (
    <section className="info_section layout_padding-top layout_padding2-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="info_links pl-lg-5">
              <h4>Menu</h4>
              <ul>
                <li className="active">
                  <Link to="./">Home</Link>
                </li>
                <li>
                  <Link to="./about">About</Link>
                </li>
                <li>
                  <Link className to="./gallery">
                    gallery{" "}
                  </Link>
                </li>
                <li>
                  <Link className to="./blogs">
                    Blog Articles
                  </Link>
                </li>
                <li>
                  <Link to="./contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_contact">
              <h4>Location</h4>
              <div>
                <img src="images/location.png" alt="" />
                <p>104 loram ipusm</p>
              </div>
              <div>
                <img src="images/telephone.png" alt="" />
                <p>( +01 1234567890 )</p>
              </div>
              <div>
                <img src="images/envelope.png" alt="" />
                <p>demo@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_social">
              <h4>Social Link</h4>
              <div className="social_container">
                <div>
                  <a href>
                    <img src="images/facebook-logo.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href>
                    <img src="images/twitter-logo.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href>
                    <img src="images/instagram.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href>
                    <img src="images/linkedin-sign.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_form">
              <h4>Newsletter</h4>
              <form action="#">
                <input type="text" placeholder="Enter Your Email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
