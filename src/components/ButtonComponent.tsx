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
      className={`${className} rounded-sm ${
        buttonColor ||
        `bg-gradient-to-t
       from-color-9 from-20% to-color-10 shadow-[0_6px_0_rgba(190,47,38,1)]`
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
