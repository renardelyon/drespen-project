import StarRating from "../assets/StarRating";

const Rating = () => {
  return (
    <div className="flex flex-col items-center space-x-2 text-white pt-7">
      {/* Displaying 5 stars */}
      <div className="flex items-center text-lg md:text-2xl lg:text-4xl">
        <div className="font-bold font-montserrat">250,000+</div>
        <div className="flex pl-2">
          {[...Array(5)].map((_, index) => (
            <StarRating key={index} />
          ))}
        </div>
      </div>
      <span className="text-md font-montserrat uppercase pt-2">
        5-star participant ratings
      </span>
    </div>
  );
};

export default Rating;
