import React, { useState, useEffect } from 'react';
import './ConfirmationPage.css'; // Import CSS file for styling

const ConfirmationPage = ({ tracking_id }) => {
  const [confirmationData, setConfirmationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [screenshot, setScreenshot] = useState(null);
  const [dueAmount, setDueAmount] = useState(0); // State to hold due amount

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/confirmation/${tracking_id}/`);
        if (!response.ok) {
          alert("Something went Wrong!!");
          throw new Error(response.statusText);
        }
        const responseData = await response.json();
        setConfirmationData(responseData);
        setLoading(false);

        // Calculate due amount
        const due = responseData.total - responseData.paid;
        setDueAmount(due > 0 ? due : 0);
      } catch (error) {
        alert('Error fetching confirmation data:');
        // console.error('Error fetching confirmation data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [tracking_id]);

  const handleUploadScreenshot = (event) => {
    const file = event.target.files[0];
    setScreenshot(file);
  };

  const handleSendDetails = async () => {
    try {
      const formData = new FormData();
      formData.append('screenshot', screenshot); // Assuming you have the screenshot in the state
      formData.append('tracker_id', confirmationData.tracking_number); // Assuming you have the tracking number in confirmationData
  
      const response = await fetch(`${process.env.REACT_APP_API_URL}/payment-screen-short/`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        alert('Failed to upload screenshot.');
        throw new Error('Failed to upload screenshot.');
      }
  
      // Handle success scenario, maybe clear the state or show a success message
      setDueAmount(0);
      alert('Screenshot uploaded successfully.\nWe will be updating Soon!\nOr You can also contact as for faster Updation');
      // setConfirmationData(null);
      setScreenshot(null);
    } catch (error) {
      alert('Error uploading screenshot:', error);
      // Handle error scenario, show error message to the user
    }
  };

  return (
    <div className="confirmation-page">
      <h1>Thank You...</h1>
      <table>
        <tbody>
          <tr><td colSpan={2}><h2>Confirmation details sent to your Email...</h2></td></tr>
          <tr>
            <td>Oder ID:</td>
            <td>{loading ? 'Loading...' : confirmationData?.requirement}</td>
          </tr>
          <tr>
            <td>Tracking No. / Reference Number:</td>
            <td>{loading ? 'Loading...' : tracking_id}</td>
          </tr>
          <tr>
            <td>Payment Status:</td>
            <td>{loading ? 'Loading...' : confirmationData?.payment_status}</td>
          </tr>
          <tr>
            <td>Product Status:</td>
            <td>{loading ? 'Loading...' : confirmationData?.product_status}</td>
          </tr>
          <tr>
            <td>Expected Delivery Date:</td>
            <td>{loading ? 'Loading...' : confirmationData?.expected_date??'Not Yet Updated!'}</td>
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
            <td>{loading ? 'Loading...' : confirmationData?.total}</td>
          </tr>
          <tr>
            <td>Paid:</td>
            <td>{loading ? 'Loading...' : confirmationData?.paid}</td>
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
                    <h3>Any UPI App. : {process.env.REACT_APP_UPI_MOBILE}</h3>
                    <h3>UPI ID : {process.env.REACT_APP_UPI_ID}</h3>
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
  );
};

export default ConfirmationPage;
