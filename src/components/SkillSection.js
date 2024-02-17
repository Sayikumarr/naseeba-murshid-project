import React from "react";

function SkillSection() {
  return (
    <section className="skill_section layout_padding2">
      <div className="container">
        <div className="custom_heading-container">
          <h2>Our Skills</h2>
        </div>
        <div className="skill_padding">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
              <div className="img-box">
                <img src="images/photoshop-png-logo.png" height={150} alt="" />
              </div>
                <h6>Adobe Photoshop</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box"><div className="img-box">
                <img src="images/adobe-Illustrator-logo.png" height={150} alt="" />
              </div>
                <h6>Adobe Ilustrator</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box"><div className="img-box">
                <img src="images/adobe-after-effects-logo.png" height={150} alt="" />
              </div>
                <h6>After Effects</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box"><div className="img-box">
                <img src="images/Adobe_XD-Logo.png" height={150} alt="" />
              </div>
                <h6>Adobe XD</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
