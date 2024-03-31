import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative w-80 h-64">
        <img
          src={images[prevIndex]}
          alt="Previous"
          className="absolute left-0 w-full h-full object-cover transition-transform transform scale-90"
        />
        <img
          src={images[currentIndex]}
          alt="Current"
          className="absolute left-0 w-full h-full object-cover"
        />
        <img
          src={images[nextIndex]}
          alt="Next"
          className="absolute right-0 w-full h-full object-cover transition-transform transform scale-90"
        />
        <button
          onClick={() => setCurrentIndex(prevIndex)}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
        >
          &lt;
        </button>
        <button
          onClick={() => setCurrentIndex(nextIndex)}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
