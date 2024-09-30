import React, { useState } from "react";

const ImageCarouselCard = () => {
  // Array of images
  const images = [
    "src/assets/potrait-carousel-1.png",
    "src/assets/potrait-carousel-1.png",
    "src/assets/potrait-carousel-1.png",
  ];

  // State to store the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="p-8 rounded-lg max-w-6xl max-h-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
        {/* Image Section */}
        <div className="relative max-h-[64-rem]">
          <img
            src={images[currentImageIndex]}
            alt="Expert Image"
            className="rounded-l-lg shadow-lg max-w-6xl w-full"
          />

          {/* Rectangles below the image */}
          <div className="absolute bottom-10 right-10 flex space-x-2 mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)} // Change image on click
                className={`cursor-pointer w-16 h-3 bg-white ${
                  currentImageIndex === index ? "bg-gray-400" : "bg-white"
                } rounded-sm transition-colors duration-300`}
              ></div>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="bg-black text-white p-6 rounded-r-lg relative h-full font-montserrat">
          <div className="text-yellow-400 text-[82px] max-h-[68px] h-full">
            “
          </div>
          <p className="text-4xl mb-6">
            The way you think, the way you behave, the way you eat, can
            influence your life by 30 to 50 years.
          </p>
          <div className="absolute bottom-10 right-10 text-left">
            <p className="font-bold">Deepak Chopra</p>
            <p className="text-sm">
              Integrative Medicine Expert and <br /> Author of "Quantum Healing"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselCard;
