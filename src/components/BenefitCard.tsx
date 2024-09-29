import { Button } from "@nextui-org/react";
import React from "react";

const BenefitCard = ({ header, content }: TBenefitCard) => {
  return (
    <div className="bg-card-img-1 rounded-lg p-8 text-center items-center flex flex-col justify-between font-montserrat">
      {/* This will push the content down */}
      <div className="flex-grow"></div>
      <h3 className="text-2xl font-normal italic">{header}</h3>
      <p className="text-sm text-gray-300 mb-4 pt-3 !font-open-sans">
        {content}
      </p>
      <Button className="rounded-sm border-2 border-white bg-transparent text-white w-1/2 font-semibold">
        BUY TICKET
      </Button>
    </div>
  );
};

type TBenefitCard = {
  header: React.ReactNode;
  content: React.ReactNode;
};

export default BenefitCard;
