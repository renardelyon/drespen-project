import { Button } from "@nextui-org/react";
import React from "react";

const ButtonComponent = ({
  children,
  className,
  buttonColor,
}: TButtonComponent) => {
  return (
    <Button
      as="a"
      href="https://drespen.com/the-quantum-experience-sydney-8th-october-2024/"
      className={`${className} rounded-md ${
        buttonColor ||
        `bg-gradient-to-t hover:!brightness-125 hover:!opacity-100 !transition !duration-200
       from-color-9 from-[60%] to-color-10 to-[110%] shadow-[0_6px_0_rgba(190,47,38,1)]`
      }`}
    >
      {children}
    </Button>
  );
};

type TButtonComponent = {
  children: React.ReactNode;
  className?: string;
  buttonColor?: string;
};

export default ButtonComponent;
