import React from "react";
import "./DoSection.css";

function DoSection() {
  return (
    <section className="do_section layout_padding-bottom">
      <div className="container">
        <div className="custom_heading-container">
          <h2>What we do</h2>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="content-box bg-red">
              <div className="img-box">
                <img src="images/idea.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Original Ideas</h6>
                <p>Naseeba Murshid's creations are born from a wellspring of creativity, telling stories that resonate with diverse audiences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="content-box bg-green">
              <div className="img-box">
                <img src="images/controller.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Captivating Art</h6>
                <p>
                Experience the magic of captivating digital art that goes beyond pixels. Naseeba's work is designed to engage and enchant, creating a visual tapestry that captivates the hearts of viewers and leaves a lasting impression.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="content-box bg-red">
              <div className="img-box">
                <img src="images/monitor.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Cultural Fusion</h6>
                <p>
                Witness the harmonious blend of tradition and modernity in our art. Naseeba Murshid's creations seamlessly fuse cultural elements, celebrating diversity and adding a distinctive flavor to every piece.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="content-box bg-green">
              <div className="img-box">
                <img src="images/rocket-ship.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Interactive Experiences</h6>
                <p>
                Participate in the art-making process through interactive experiences. Naseeba invites you to become a co-creator, fostering a sense of connection and shared joy through collaborative projects and engaging initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoSection;
