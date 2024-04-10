import React, { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
    captcha: "",
    randomNumber: generateRandomNumber()
  });
  const [captchaValid, setCaptchaValid] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10000); // Generate random number between 0 and 9999
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValid) {
      alert("Please enter the correct number from the image.");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Contact details submitted successfully!");
        alert("Contact details submitted successfully!");
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          message: "",
          captcha: "",
          randomNumber: generateRandomNumber() // Generate a new random number for next submission
        });
      } else {
        console.error("Failed to submit contact details.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCaptchaChange = (e) => {
    const userEnteredNumber = parseInt(e.target.value);
    const { randomNumber } = formData;
    // Validate user input against the random number
    setCaptchaValid(userEnteredNumber === randomNumber);
    setFormData({ ...formData, captcha: e.target.value });
  };

  return (
    <section className="contact_section ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1">
            <h2 className="custom_heading">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              {/* Display random number as image */}
              <div>
                <img src={`https://dummyimage.com/100x50/000/fff&text=${formData.randomNumber}`} alt="Random number" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter the number from the image"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleCaptchaChange}
                />
              </div>
              <div className="d-flex  mt-4 ">
                <button type="submit">SEND</button>
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
