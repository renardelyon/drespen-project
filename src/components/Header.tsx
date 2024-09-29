import reactSvg from "../assets/react.svg";
import CountdownTimer from "./CountdownTimer";
import ButtonComponent from "./ButtonComponent";
import { GoAlertFill } from "react-icons/go";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="flex items-center justify-between py-2 px-5 lg:px-7 lg:py-4 xl:px-10 xl:py-4 max-lg:py-6">
        <a className="block w-[12rem] xl:mr-8" href="hero">
          <img src={reactSvg} alt="drespen-logo" />
        </a>

        <ButtonComponent>
          <p className="font-montserrat text-white font-bold">BUY TICKET</p>
        </ButtonComponent>
      </div>
      {/* Countdown Timer and Discount Section */}
      <div
        className={`flex items-center justify-center
          bg-gradient-to-r from-color-7 from-[10%] via-color-8 via-[29%] to-color-7
        text-white px-4 py-2 rounded-bl-3xl rounded-br-3xl space-x-4`}
      >
        <span className="hidden items-center space-x-1 md:flex">
          <i className="fas fa-exclamation-triangle"></i>
          <span className="text-sm flex items-center">
            <GoAlertFill className="mr-2" />
            <p className="font-open-sans font-bold">70% DISCOUNT EXPIRES IN:</p>
          </span>
        </span>
        <CountdownTimer className="pr-4" />
        {/* Ticket Button Inside Countdown */}
        <ButtonComponent>
          <p className="font-montserrat text-white font-bold text-medium">
            GET MY TICKET NOW - 70% OFF
          </p>
        </ButtonComponent>
      </div>
    </div>
  );
}
