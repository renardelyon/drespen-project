import React from "react";

const TestimonialCard = ({ className, testimony, owner }: TTestimonialCard) => {
  return (
    <div
      className={`${className} bg-[#0E0E0E] border border-gray-700 text-white rounded-lg p-6 max-w-3xl shadow-lg`}
    >
      <div className="flex items-start border-l-8 border-yellow-300 max-h-[400px] font-montserrat pl-4">
        {/* Left Column - Image and Vertical Line */}
        <div className="hidden sm:flex items-center w-full h-full">
          {/* Profile Image */}
          <img
            src="src/assets/Frame 17036.png"
            alt="John"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        {/* Right Column - Testimonial Content */}
        <div className="ml-4 flex flex-col justify-between">
          {/* Quote */}
          <div className="flex items-start">
            <span className="text-yellow-300 text-5xl -mb-5 ">“</span>
          </div>
          {/* Testimonial Text */}
          <p className="text-gray-300 text-sm mb-2">{testimony}</p>
          {/* Name */}
          <p className="text-white text-sm font-semibold">{owner}</p>
        </div>
      </div>
    </div>
  );
};

type TTestimonialCard = {
  className?: string;
  testimony: React.ReactNode;
  owner: React.ReactNode;
};

export default TestimonialCard;
