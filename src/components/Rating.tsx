import { FaStar } from "react-icons/fa"; // Import star icon from react-icons

const Rating = () => {
  return (
    <div className="flex flex-col items-center space-x-2 text-white pt-7">
      {/* Displaying 5 stars */}
      <div className="flex items-center text-lg md:text-xl lg:text-2xl">
        <div className="font-bold font-montserrat">250,000+</div>
        <div className="flex pl-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-300 " />
          ))}
        </div>
      </div>
      <span className="text-md font-montserrat">
        5-star participant ratings
      </span>
    </div>
  );
};

export default Rating;
