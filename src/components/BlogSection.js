import React, { useState, useEffect } from "react";

function BlogSection() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Sample API endpoint for testing
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setBlogData(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="custom_heading-container">
          <h2>Blog Articles</h2>
        </div>
      </div>
      <div className="container">
        <div
          id="carouselExample2Controls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {blogData.map((blog, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="client_container layout_padding2">
                  <div className="client_box b-1">
                    <div className="client-id">
                      <div className="img-box">
                        <img src="images/client-1.jpg" alt="" />
                      </div>
                      <div className="name">
                        <h5>smirth jon</h5>
                        <p>client</p>
                      </div>
                    </div>
                    <div className="detail">
                      <div
                        className="d-flex flex-column flex-md-row"
                        style={{ gap: "20px" }}
                      >
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model It is a long
                          established fact that a reader will be distracted by
                          the readable content of a page when looking at its
                          layout. The point of using Lorem Ipsum is that it has
                          a more-or-less normal distribution of letters, as
                          opposed to using 'Content here, content here', making
                          it look like readable English. Many desktop publishing
                          packages and web page editors now use Lorem Ipsum as
                          their default model
                        </p>
                        <div className="d-flex flex-column">
                        <img
                          className="card-img"
                          // style={{ width: "100%" }}
                          src="../gallerypics/images/photo_(13).jpg"
                          alt=""
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExample2Controls"
            role="button"
            data-slide="prev"
          >
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExample2Controls"
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

export default BlogSection;
