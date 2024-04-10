import React from "react";
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about_section layout_padding mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="img-box">
              <img src="images/about-img.png" alt="" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="detail-box">
              <div className="custom_heading-container">
                <h2>About Naseeba Murshid.</h2>
              </div>
              <p>
                <p>
                  Welcome to the artistic world of Naseeba Murshid, an Indian
                  digital artist whose creations have been a source of joy for
                  thousands around the globe. With a passion for storytelling
                  through visuals, Naseeba's art transcends cultural boundaries,
                  weaving a tapestry of happiness and creativity.
                </p>
                <h2>Artistic Journey</h2>
                <p>
                  Naseeba's journey in the digital art realm is a celebration of
                  emotions, cultural fusion, and community engagement. Her
                  gallery is a testament to the belief that art has the power to
                  connect, inspire, and bring a smile to the faces of people
                  from all walks of life.
                </p>
              </p>
              <div>
                <Link to="./get-yours">Make a Request!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
