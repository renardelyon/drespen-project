import { useState } from "react";
import Section from "./Section";
import "../style/admission.css";

const AdmissionSection = () => {
  const images = [
    "/src/assets/admission-img-1.png",
    "/src/assets/admission-img-2.png",
    "/src/assets/admission-img-1.png",
    "/src/assets/admission-img-2.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Section id="admission" customPaddings="pt-0">
      {" "}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black from-[30%] to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className=" admission-section-sm admission-section-lg">
          <h1 className="text-4xl font-bold mb-6 font-montserrat">
            YOUR QUANTUM BREAKTHROUGH AWAITS AT DEE WHY RSL
          </h1>
          <p className="text-lg mb-4"></p>
          <p className="text-yellow-400 text-lg mb-4">
            Dee Why RSL, 932 Pittwater Rd, Dee Why, NSW, Australia | October
            8th, 2024
            <br />
            VIP: 8:30 AM - 9:30 AM | General Admission: 9:30 AM - 8:00 PM
          </p>
          <p className="text-lg mb-4">
            Nestled in the heart of Sydney's northern beaches, Dee Why RSL
            seamlessly blends modern luxury with transformative energy, ensuring
            that every moment at the Quantum Summit elevates your consciousness
            and unlocks your highest potential.
          </p>
          <p className="text-lg">
            From state-of-the-art facilities that amplify our groundbreaking DMT
            Breathwork sessions to serene natural spaces ideal for deep
            reflection and connection, Dee Why RSL is more than just a
            venue—it’s a portal to your extraordinary future.
          </p>
        </div>

        {/* Rectangles for Image Selection */}
        <div className="absolute  inset-x-0 bottom-24 z-20 flex justify-center space-x-4 mt-8">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleImageChange(index)}
              className={`cursor-pointer w-72 h-3 rounded-none transition-colors duration-300 ${
                currentImageIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AdmissionSection;
