import React from "react";

const TestimonialCard = ({
  className,
  testimony,
  owner,
  ownerImg,
}: TTestimonialCard) => {
  return (
    <div
      className={`${className} bg-[#0E0E0E] border border-gray-700 text-white rounded-lg p-6 max-w-3xl shadow-lg`}
    >
      <div className="flex items-start max-h-[400px] font-montserrat">
        {/* Left Column - Image and Vertical Line */}
        <div className="hidden self-center sm:flex items-center w-[35%] h-full border-l-8 border-yellow-300 pl-4">
          {/* Profile Image */}
          <img
            src={ownerImg}
            alt="John"
            className="w-full h-full rounded-lg object-contain"
          />
        </div>
        {/* Right Column - Testimonial Content */}
        <div className="ml-4 flex flex-col justify-between w-[65%]">
          {/* Quote */}
          <div className="flex items-start">
            <span className="text-yellow-300 text-5xl -mb-5 ">“</span>
          </div>
          {/* Testimonial Text */}
          <p className="text-white text-xs sm:text-sm mb-2">{testimony}</p>
          {/* Name */}
          <p className="text-white text-xs sm:text-sm font-light">{owner}</p>
        </div>
      </div>
    </div>
  );
};

type TTestimonialCard = {
  ownerImg: string;
  className?: string;
  testimony: React.ReactNode;
  owner: React.ReactNode;
};

export default TestimonialCard;
