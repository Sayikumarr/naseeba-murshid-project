import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";

function GallerySection() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/images/`);
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchImages();
  }, []);

  return (
    <section className="gallery_section layout_padding">
      <div className="container">
        <div className="custom_heading-container">
          <h2>Our Gallery</h2>
        </div>
      </div>
      <div className="container-fluid">
        <Gallery images={images} />
      </div>
    </section>
  );
}

export default GallerySection;
