import React from "react";
import Gallery from "./Gallery";

function GallerySection() {
  const images = [
    { url: "gallerypics/images/photo_(1).jpg", alt: "Image 1" },
    { url: "gallerypics/images/photo_(2).jpg", alt: "Image 2" },
    { url: "gallerypics/images/photo_(3).jpg", alt: "Image 3" },
    { url: "gallerypics/images/photo_(4).jpg", alt: "Image 4" },
    { url: "gallerypics/images/photo_(5).jpg", alt: "Image 5" },
    { url: "gallerypics/images/photo_(6).jpg", alt: "Image 6" },
    { url: "gallerypics/images/photo_(7).jpg", alt: "Image 7" },
    { url: "gallerypics/images/photo_(8).jpg", alt: "Image 8" },
    { url: "gallerypics/images/photo_(9).jpg", alt: "Image 9" },
    { url: "gallerypics/images/photo_(10).jpg", alt: "Image 10" },
    { url: "gallerypics/images/photo_(11).jpg", alt: "Image 11" },
    { url: "gallerypics/images/photo_(12).jpg", alt: "Image 12" },
    { url: "gallerypics/images/photo_(13).jpg", alt: "Image 13" },
    { url: "gallerypics/images/photo_(14).jpg", alt: "Image 14" },
    { url: "gallerypics/images/photo_(15).jpg", alt: "Image 15" },
    { url: "gallerypics/images/photo_(16).jpg", alt: "Image 16" },
    { url: "gallerypics/images/photo_(17).jpg", alt: "Image 17" },
    { url: "gallerypics/images/photo_(18).jpg", alt: "Image 18" },
    { url: "gallerypics/images/photo_(19).jpg", alt: "Image 19" },
    { url: "gallerypics/images/photo_(20).jpg", alt: "Image 20" },
    { url: "gallerypics/images/photo_(21).jpg", alt: "Image 21" },
  ];

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
