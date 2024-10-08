import Logo from "../assets/Logo";
import CountdownTimer from "./CountdownTimer";
import ButtonComponent from "./ButtonComponent";
import { GoAlertFill } from "react-icons/go";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex bg-black items-center justify-between py-2 px-5 lg:px-10 lg:py-4 xl:px-32 xl:py-6 max-lg:py-6 max-h-[115px]">
        <a className="block w-[12rem] xl:mr-8" href="hero">
          <Logo className="w-[8rem] md:w-[200px]" />
        </a>

        <ButtonComponent className="py-0 md:py-6">
          <p className="font-montserrat text-white font-bold text-xs xs:text-sm md:text-xl px-0 md:px-3">
            BUY TICKET
          </p>
        </ButtonComponent>
      </div>
      {/* Countdown Timer and Discount Section */}
      <div
        className={`hidden lg:flex items-center justify-center
          bg-gradient-to-r from-color-7 from-[-10%] xl:from-[-20%] via-color-8 via-[29%] to-color-7 to-[150%]
        text-white px-4 py-4 rounded-b-[3rem] space-x-4`}
      >
        <span className="hidden items-center space-x-1 md:flex">
          <i className="fas fa-exclamation-triangle"></i>
          <span className="text-sm flex items-center">
            <GoAlertFill className="mr-2 text-xl" />
            <p className="px-0 font-open-sans font-bold md:text-md xl:text-lg uppercase">
              Your 70% DISCOUNT EXPIRES IN:
            </p>
          </span>
        </span>
        <CountdownTimer className="px-4" />
        {/* Ticket Button Inside Countdown */}
        <ButtonComponent className="py-3">
          <p className="font-montserrat text-white font-bold lg:text-md xl:text-[16px]">
            GET YOUR TICKET NOW - 70% OFF
          </p>
        </ButtonComponent>
      </div>
      <div
        className={`flex lg:hidden items-center justify-center rounded-t-lg
          bg-gradient-to-r from-color-7 from-[-80%] via-color-8 via-[80%] to-color-7 to-[110%]
        text-white px-4 py-4 space-x-4 fixed w-full bottom-0 left-0`}
      >
        <div className="flex flex-col">
          <span className="items-center space-x-1 flex ">
            <i className="fas fa-exclamation-triangle"></i>
            <span className="text-sm flex items-center">
              <GoAlertFill className="mr-2" />
              <p className="font-open-sans font-bold text-xs uppercase">
                Your 70% DISCOUNT EXPIRES IN:
              </p>
            </span>
          </span>
          <CountdownTimer className="pr-4 !text-sm pt-2" />
        </div>
        {/* Ticket Button Inside Countdown */}
        <ButtonComponent>
          <p className="hidden sm:block font-montserrat text-white font-bold text-sm">
            GET YOUR TICKET NOW <br /> 70% OFF
          </p>
          <p className="block sm:hidden font-montserrat text-white font-bold text-[10px] sm:text-sm">
            GET TICKET
          </p>
        </ButtonComponent>
      </div>
    </div>
  );
}
