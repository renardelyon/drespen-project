import { FaStar } from "react-icons/fa"; // Import star icon from react-icons

const Rating = () => {
  return (
    <div className="flex flex-col items-center space-x-2 text-white pt-7">
      {/* Displaying 5 stars */}
      <div className="flex items-center">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-300 text-2xl" />
          ))}
        </div>
        <div className="text-2xl font-bold pl-2 font-montserrat">250,000+</div>
      </div>
      <span className="text-small font-normal font-montserrat">
        PARTICIPANTS HAVE RATED THIS EVENT 5 STARS!
      </span>
    </div>
  );
};

export default Rating;
