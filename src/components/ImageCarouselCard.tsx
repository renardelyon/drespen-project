import React, { useState } from "react";

const ImageCarouselCard = () => {
  // Array of images
  const images = [
    "src/assets/potrait-carousel-1.png",
    "src/assets/potrait-carousel-1.png",
    "src/assets/potrait-carousel-1.png",
  ];

  const carouselData = [
    {
      quote: (
        <>
          The way you think, the way you behave, the way you eat, can influence
          your life by 30 to 50 years.
        </>
      ),
      name: "Deepak Chopra",
      occupation: (
        <>
          Integrative Medicine Expert and <br /> Author of "Quantum Healing"
        </>
      ),
      bgColor: "bg-black",
    },
    {
      quote: (
        <>
          We have the capacity to influence matter because we are matter, and
          that’s the beauty of being human.
        </>
      ),
      name: "Dr Joe Dispenza",
      occupation: (
        <>
          Neuroscientist and Author <br /> of "You Are the Placebo"
        </>
      ),
      bgColor: "bg-color-16",
    },
    {
      quote: (
        <>
          The moment you change your perception is the moment you rewrite the
          chemistry of your body.
        </>
      ),
      name: "Dr. Bruce Lipton",
      occupation: (
        <>
          Cell Biologist and Author of "The<br></br> Biology of Belief"
        </>
      ),
      bgColor: "bg-black",
    },
  ];

  // State to store the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log("currentImageIndex", currentImageIndex);

  return (
    <div className="p-8 rounded-lg max-w-6xl max-h-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
        {/* Image Section */}
        <div className="relative max-h-[64-rem]">
          <img
            src={images[currentImageIndex]}
            alt="Expert Image"
            className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none  shadow-lg max-w-6xl w-full"
          />

          {/* Rectangles below the image */}
          <div className="absolute bottom-10 right-10 flex space-x-2 mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)} // Change image on click
                className={`cursor-pointer w-16 h-3 hover:bg-gray-500 ${
                  currentImageIndex === index ? "bg-gray-400" : "bg-white"
                } rounded-sm transition-colors duration-300`}
              ></div>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div
          className={`${carouselData[currentImageIndex].bgColor} text-white p-6 
          rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none relative h-full font-montserrat`}
        >
          <div className="text-yellow-400 text-[82px] max-h-[68px] h-full">
            “
          </div>
          <p className="text-4xl mb-6 pb-20">
            {carouselData[currentImageIndex].quote}
          </p>
          <div className="absolute bottom-10 right-10 text-left">
            <p className="font-bold"> {carouselData[currentImageIndex].name}</p>
            <p className="text-sm">
              {carouselData[currentImageIndex].occupation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselCard;
