import { Button } from "@nextui-org/react";
import React from "react";

const BenefitCard = ({ header, content, className, image }: TBenefitCard) => {
  return (
    <div
      className={`${className} z-0 relative rounded-[32px] text-center items-center flex flex-col justify-end font-montserrat xl:h-[750px]`}
      style={{ backgroundImage: image }}
    >
      {/* This will push the content down */}
      <div className="min-[1600px]:h-[70%]"></div>
      <div className="min-[1600px]:flex hidden  flex-col z-2 px-5 mb-[72px] h-[40%]">
        <h3 className="text-2xl md:text-3xl font-normal uppercase">{header}</h3>
        <p className="tracking-wide leading-snug text-xs md:text-[16px] text-gray-300 mb-4 pt-3 !font-open-sans">
          {content}
        </p>
        <Button
          as="a"
          href="https://drespen.com/the-quantum-experience-sydney-8th-october-2024/"
          className="self-center w-[65%] text-lg md:text-2xl rounded-sm border-2 border-white bg-transparent text-white hover:bg-white hover:text-black hover:!opacity-100 font-semibold px-12 p-6 mt-9"
        >
          BUY TICKET
        </Button>
      </div>
      <div className="z-2 p-16 block min-[1600px]:hidden">
        <h3 className="text-2xl md:text-4xl font-normal italic uppercase">
          {header}
        </h3>
        <p className="tracking-wide leading-snug text-xs md:text-[18px] text-gray-300 mb-4 pt-3 !font-open-sans">
          {content}
        </p>
        <Button
          as="a"
          href="https://drespen.com/the-quantum-experience-sydney-8th-october-2024/"
          className="text-lg md:text-2xl rounded-sm border-2 border-white bg-transparent text-white  font-semibold px-12 p-6 mt-9"
        >
          BUY TICKET
        </Button>
      </div>
      <div className="absolute xl:hidden inset-0 lg:bg-black/50 bg-black/75 rounded-[32px]"></div>
      <div className="hidden backdrop-brightness-110 xl:block absolute inset-0 bg-gradient-to-t from-black from-[10%] to-transparent rounded-[32px]"></div>
    </div>
  );
};

type TBenefitCard = {
  image: string;
  className?: string;
  header: React.ReactNode;
  content: React.ReactNode;
};

export default BenefitCard;
