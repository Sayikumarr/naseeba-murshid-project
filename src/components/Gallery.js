import React from 'react';
import Masonry from 'react-masonry-css';
import './Gallery.css';

const Gallery = ({ images }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="gallery-masonry"
      columnClassName="gallery-masonry-column"
    >
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.image} alt={image.alt_text} loading="lazy" />
        </div>
      ))}
    </Masonry>
  );
};

export default Gallery;
