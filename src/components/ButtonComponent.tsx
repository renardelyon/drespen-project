import { Button } from "@nextui-org/react";
import React from "react";

const ButtonComponent = ({ children, className }: TButtonComponent) => {
  return (
    <Button
      className={`${className} rounded-sm bg-gradient-to-t
       from-color-9 from-20% to-color-10 shadow-[0_4px_0_rgba(190,47,38,1)]`}
    >
      {children}
    </Button>
  );
};

type TButtonComponent = {
  children: React.ReactNode;
  className?: string;
};

export default ButtonComponent;
