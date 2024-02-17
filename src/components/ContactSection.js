import React from "react";

function ContactSection() {
  return (
    <section className="contact_section ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1">
            <h2 className="custom_heading">Contact Us</h2>
            <form action="#">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Pone Number" />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  placeholder="Message"
                />
              </div>
              <div className="d-flex  mt-4 ">
                <button>SEND</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 px-0">
            <div className="img-box">
              <img src="images/contact.jpg" alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
