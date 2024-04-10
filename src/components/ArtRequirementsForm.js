import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./ArtRequirementsForm.css";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';

const ArtRequirementsForm = () => {
  const navigate = useNavigate();
  const [loading,  setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    members: [{ photo: null, dress: null, description: "" }],
    backgroundImage: null,
    combinedDescription: "",
    captcha: "", // New field for CAPTCHA
    randomNumber: generateRandomNumber() // New field to store random number
  });

  const [modalContent, setModalContent] = useState({
    show: false,
    type: "success", // or 'error'
    message: "",
  });

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10000); // Generate random number between 0 and 9999
  }

  const handleInputChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index][field] = value;

    setFormData({
      ...formData,
      members: updatedMembers,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (formData.captcha !== formData.randomNumber.toString()) {
      alert("Please enter the correct number from the image.");
      return;
    }

    setLoading(true);
    const newformData = new FormData();
    newformData.append('name', formData.name);
    newformData.append('email', formData.email);
    newformData.append('phoneNumber', formData.phoneNumber);
    newformData.append('combinedDescription', formData.combinedDescription);
    newformData.append('backgroundImage', formData.backgroundImage);
    formData.members.forEach((member, index) => {
      newformData.append(`members[${index}][photo]`, member.photo);
      newformData.append(`members[${index}][dress]`, member.dress);
      newformData.append(`members[${index}][description]`, member.description);
    });

    // Post data to your endpoint using the fetch API
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/submit-form/`, {
        method: "POST",
        body: newformData,
      });
  
      if (response.ok) {
      const responseData = await response.json(); 
        // Handle successful response
        setModalContent({
          show: true,
          type: "success",
          message: `"Form submitted successfully! Please Note Your Order ID : ${responseData.tracking_id}"`,
        });
          

        navigate(`/confirmation/${responseData.tracking_id}`);
        console.log("Form data submitted successfully!");
      } else {
        // Handle error response
        setModalContent({
          show: true,
          type: "error",
          message: "Error submitting form data. Please try again.",
        });
        console.error("Error submitting form data");
      }
    } catch (error) {
      // Handle fetch error
      setModalContent({
        show: true,
        type: "error",
        message: "Fetch error. Please try again.",
      });
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModalContent({
      ...modalContent,
      show: false,
    });
  };

  const addMember = () => {
    setFormData({
      ...formData,
      members: [
        ...formData.members,
        { photo: null, dress: null, description: "" },
      ],
    });
  };

  const removeMember = () => {
    if (formData.members.length > 1) {
      const updatedMembers = [...formData.members];
      updatedMembers.pop();

      setFormData({
        ...formData,
        members: updatedMembers,
      });
    }
  };

  const handleCombinedDescriptionChange = (e) => {
    setFormData({
      ...formData,
      combinedDescription: e.target.value,
    });
  };

  const calculatePriceEstimation = () => {
    // Assuming a static price of 2000 per person
    const pricePerPerson = 2000;
    const totalMembers = formData.members.length;
    const totalPrice = pricePerPerson * totalMembers;

    return totalPrice;
  };

  const renderImagePreview = (file) => {
    if (file) {
      return (
        <img
          src={URL.createObjectURL(file)}
          alt="Preview"
          style={{ width: "100%", marginBottom: "10px" }}
        />
      );
    }
    return null;
  };

  return (
    loading?<center><h1><Spinner
    as="span"
    animation="grow"
    role="status"
    aria-hidden="true"
  />
  Loading...</h1></center>:<form onSubmit={handleFormSubmit}>
      <h1>Number of Members: {formData.members.length}</h1>

      <label>
        Full Name:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </label>

      <label>
        Phone Number:
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          required
        />
      </label>

      {formData.members.map((member, index) => (
        <div key={index}>
          <label>
            Individual Photo for Member {index + 1}:
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleInputChange(index, "photo", e.target.files[0])
              }
              required
            />
            {renderImagePreview(member.photo)}
          </label>

          <label>
            Dress Choice for Member {index + 1}:
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleInputChange(index, "dress", e.target.files[0])
              }
              required
            />
            {renderImagePreview(member.dress)}
          </label>

          <label>
            Optional Description for Member {index + 1}:
            <textarea
              value={member.description || ""}
              onChange={(e) =>
                handleInputChange(index, "description", e.target.value)
              }
            />
          </label>
        </div>
      ))}

      <button className="btn-primary" type="button" onClick={addMember}>
        Add Member
      </button>
      <br />
      <button className="btn-danger" type="button" onClick={removeMember}>
        Remove Last Member
      </button>
      <br />
      <label>
        Background Image:
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFormData({ ...formData, backgroundImage: e.target.files[0] })
          }
          required
        />
        {renderImagePreview(formData.backgroundImage)}
      </label>

      <label>
        Combined Description (Takeover Description and Other Requirements):
        <textarea
          value={formData.combinedDescription}
          onChange={handleCombinedDescriptionChange}
        />
      </label>
      <br />
      {/* Add CAPTCHA */}
      <label>
        Enter the number shown in the image:
        <input
          type="text"
          value={formData.captcha}
          onChange={(e) =>
            setFormData({ ...formData, captcha: e.target.value })
          }
          required
        />
        {/* Display random number as image */}
        <img
          src={`https://dummyimage.com/100x50/000/fff&text=${formData.randomNumber}`}
          alt="CAPTCHA"
          style={{ width: "25%", marginBottom: "10px" }}
        />
      </label>
      <button className="btn-success" type="submit">
        Submit
      </button>
      <br />
      <div className="card text-center text-justify jumbotron">
        <p>Price Estimation:</p>
        <p>{2000} per person</p>
        <hr></hr>
        <h2>Invoice</h2>
        <p>Estimated Price: {calculatePriceEstimation()}</p>
        {/* Add additional invoice details as needed */}
      </div>
      {/* Sliding Pane */}
      <SlidingPane
        isOpen={modalContent.show}
        title={modalContent.type === "success" ? "Success" : "Error"}
        onRequestClose={closeModal}
        from="bottom"
      >
        <div>
          <p>{modalContent.message}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </SlidingPane>
    </form>
  );
};

export default ArtRequirementsForm;
