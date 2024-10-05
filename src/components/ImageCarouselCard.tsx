import { useEffect, useState } from "react";

const ImageCarouselCard = () => {
  // Array of images
  const images = [
    "/potrait-carousel-1.png",
    "/potrait-carousel-2.png",
    "/potrait-carousel-3.png",
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

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, import.meta.env.VITE_EVENT_CAROUSEL_INTERVAL); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="p-8 max-w-7xl max-h-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
        {/* Image Section */}
        <div className="relative max-h-[64-rem]">
          <img
            src={images[currentImageIndex]}
            alt="Expert Image"
            className="rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none  shadow-lg max-w-6xl w-full"
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
          className={`${carouselData[currentImageIndex].bgColor} text-white py-6 px-14 
          rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none relative h-full font-montserrat`}
        >
          <div className="text-yellow-400 text-[92px] max-h-[68px] h-full">
            “
          </div>
          <p className="font-medium text-3xl xl:text-4xl mb-6 pb-20">
            {carouselData[currentImageIndex].quote}
          </p>
          <div className="text-sm sm:text-lg absolute bottom-10 right-10 text-right">
            <p className="font-semibold">
              {" "}
              {carouselData[currentImageIndex].name}
            </p>
            <p className="!leading-tight sm:!text-[16px]">
              {carouselData[currentImageIndex].occupation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselCard;
