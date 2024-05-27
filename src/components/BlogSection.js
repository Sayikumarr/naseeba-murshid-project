import React, { useState, useEffect } from "react";

function BlogSection() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Endpoint of your Django REST API
    const apiUrl = `${process.env.REACT_APP_API_URL}/blogposts/`;

    // Fetch data from the Django API endpoint
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
                        <img height={100} width={100} src={blog.author_photo} alt="" />
                      </div>
                      <div className="name">
                        <h5>{blog.author}</h5>
                        <div className="rating" style={{ color: "orange", marginTop: "10px" }}>
                          Rating: {Array.from({ length: blog.rating }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <p>Created At: {blog.created_at}</p>
                      </div>
                    </div>
                    <div className="detail">
                      <div
                        className="d-flex flex-column flex-md-row"
                        style={{ gap: "20px" }}
                      >
                        <p>{blog.content}</p>
                        <div className="d-flex flex-column">
                          <img
                            className="card-img"
                            width="50%"
                            src={blog.image}
                            alt={blog.author}
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
