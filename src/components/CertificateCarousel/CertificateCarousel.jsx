import React, { useRef, useState } from 'react';

const CertificateCarousel = () => {
  const carouselRef = useRef(null);
  const totalItems = 5;
  const [index, setIndex] = useState(0);

  const moveCarousel = (direction) => {
    const newIndex = (index + direction + totalItems) % totalItems;
    setIndex(newIndex);
    const translateXPercent = -((newIndex * 100) / 3);
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${translateXPercent}%)`;
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: 'translateX(0%)' }}
      >
        {['1', '2', '3', '4', '5'].map((num, i) => (
          <div key={i} className="min-w-1/3 px-2">
            <img
              src={`/images/certificate${num}.png`}
              alt={`Certificate ${num}`}
              className="rounded-lg shadow"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => moveCarousel(-1)}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={() => moveCarousel(1)}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CertificateCarousel;
