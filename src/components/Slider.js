import React from "react";
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <section className="slider_section">
      <div className="container-fluid">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-3 col-lg-2 offset-md-2">
                  <div className="detail-box">
                    <h1>Digital Illustration</h1>
                    <p>
                      Where imagination dances in pixels and creativity knows no
                      bounds.
                    </p>
                    <div>
                      <Link to="../contact">Contact</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8">
                  <div className="img-box">
                    <img src="images/hero.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-3 col-lg-2 offset-md-2">
                  <div className="detail-box">
                    <h1>Memories</h1>
                    <p>
                      Through the power of digital arts, we can immortalize
                      cherished memories, bringing past moments and loved ones
                      back to life in vibrant, evocative creations.
                    </p>
                    <div>
                      <a href="/">Get Yours!</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8">
                  <div className="img-box">
                    <img src="images/hero.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-3 col-lg-2 offset-md-2">
                  <div className="detail-box">
                    <h1>Naseeba</h1>
                    <p>
                      India-based digital artist exploring boundless creativity,
                      pushing artistic limits, and sharing innovative creations.
                      Join me on this creative journey!
                    </p>
                    <div>
                      <a href="https://www.instagram.com/naseeba.murshid/">
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8">
                  <div className="img-box">
                    <img src="images/hero.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Slider;
