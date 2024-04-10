import React, { useState } from 'react';
import './Tracker.css'; // Import CSS file for styling

const Tracker = () => {
  const [inputType, setInputType] = useState('tracking');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [orderId, setOrderId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [confirmationData, setConfirmationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const [dueAmount, setDueAmount] = useState(0); // State to hold due amount

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'trackingNumber') {
      setTrackingNumber(value);
    } else if (name === 'orderId') {
      setOrderId(value);
    } else if (name === 'mobileNumber') {
      setMobileNumber(value);
    }
  };

  const handleGetDetails = async () => {
    setLoading(true);
    try {
      let response;
      if (inputType === 'tracking') {
        response = await fetch(`${process.env.REACT_APP_API_URL}/confirmation/${trackingNumber}/`);
      } else {
        response = await fetch(`${process.env.REACT_APP_API_URL}/confirmation/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderId, mobileNumber }),
        });
      }
      if (!response.ok) {
        setConfirmationData(null);
        alert(response.statusText);
      }
      const data = await response.json();
      const due = data.total - data.paid;
      setDueAmount(due > 0 ? due : 0);
      setConfirmationData(data);
    } catch (error) {
      setConfirmationData(null);
      alert("Error fetching order details");
      // console.error('Error fetching order details:', error);
    }
    setLoading(false);
  };

  const handleUploadScreenshot = (event) => {
    const file = event.target.files[0];
    setScreenshot(file);
  };

  const handleSendDetails = async () => {
    try {
      if(!screenshot){
        alert("select ScreenShot!");
        return;
      }
      const formData = new FormData();
      formData.append('screenshot', screenshot); // Assuming you have the screenshot in the state
      formData.append('tracker_id', confirmationData.tracking_number); // Assuming you have the tracking number in confirmationData
  
      const response = await fetch(`${process.env.REACT_APP_API_URL}/payment-screen-short/`, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        alert("Something Went Wrong!");
        throw new Error('Failed to upload screenshot.');
      }
  
      // Handle success scenario, maybe clear the state or show a success message
      setDueAmount(0);
      alert('Screenshot uploaded successfully.\nWe will be updating Soon!\nOr You can also contact as for faster Updation');
      // setConfirmationData(null);
      setScreenshot(null);
    } catch (error) {
      alert("Error uploading screenshot");
      // console.error('Error uploading screenshot:', error);
      // Handle error scenario, show error message to the user
    }
  };

  return (
    <div className="tracker">
      <h2>Track Your Order</h2>
      <div className="input-type">
        <label>
          <input
            type="radio"
            value="tracking"
            checked={inputType === 'tracking'}
            onChange={() => setInputType('tracking')}
          />
          Tracking Number
        </label>
        <label>
          <input
            type="radio"
            value="orderId"
            checked={inputType === 'orderId'}
            onChange={() => setInputType('orderId')}
          />
          Order ID & Mobile Number
        </label>
      </div>
      <div className="inputs">
        {inputType === 'tracking' ? (
          <input
            type="text"
            name="trackingNumber"
            value={trackingNumber}
            onChange={handleInputChange}
            placeholder="Enter Tracking Number"
          />
        ) : (
          <>
            <input
              type="text"
              name="orderId"
              value={orderId}
              onChange={handleInputChange}
              placeholder="Enter Order ID"
            />
            <input
              type="text"
              name="mobileNumber"
              value={mobileNumber}
              onChange={handleInputChange}
              placeholder="Enter Mobile Number"
            />
          </>
        )}
      </div>
      <button onClick={handleGetDetails} disabled={loading}>
        Get Details
      </button>
      {loading && <p>Loading...</p>}
      {confirmationData && (
        <div className="confirmation-details">
          <h3>Order Details</h3>
          <table>
            <tbody>
              <tr>
                <td>Order ID:</td>
                <td>{confirmationData.requirement}</td>
              </tr>
              <tr>
                <td>Tracking Number:</td>
                <td>{confirmationData.tracking_number}</td>
              </tr>
              <tr>
                <td>Payment Status:</td>
                <td>{confirmationData.payment_status}</td>
              </tr>
              <tr>
                <td>Product Status:</td>
                <td>{confirmationData.product_status}</td>
              </tr>
              <tr>
                <td>Expected Delivery Date:</td>
                <td>{confirmationData.expected_date ?? 'Not Yet Updated!'}</td>
              </tr>  
              <tr>
              <td>Contact Us:</td>
              <td>
                {loading ? (
                  'Loading...'
                ) : (
                  <>
                    Email: {confirmationData?.email}
                    <br />
                    Phone: {confirmationData?.phone}
                  </>
                )}
              </td>
            </tr>
              <tr>
                <td>Total:</td>
                <td>{confirmationData.total}</td>
              </tr>
              <tr>
                <td>Paid:</td>
                <td>{confirmationData.paid}</td>
              </tr>
              {dueAmount > 0 && (
              <>
                <tr>
                  <td>Due Amount:</td>
                  <td>{loading ? 'Loading...' : dueAmount}</td>
                </tr>
                <tr>
                  <td>
                    <h3>Pay</h3>
                    <h3>&</h3>
                    <h3>Upload Screenshot</h3>
                  </td>
                  <td>
                    <h3>Any UPI App. : {process.env.REACT_APP_UPI_ID}</h3>
                    <h3>UPI ID : {process.env.REACT_APP_UPI_MOBILE}</h3>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleUploadScreenshot}
                      disabled={dueAmount <= 0}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button onClick={handleSendDetails} disabled={dueAmount <= 0}>Send Details</button>
                  </td>
                </tr>
              </>
            )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Tracker;
