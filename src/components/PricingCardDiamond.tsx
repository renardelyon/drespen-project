import Percentage from "../assets/Percentage";
import ButtonComponent from "./ButtonComponent";
import CheckedRed from "../assets/CheckedRed";

const PricingCardDiamond = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} relative mb-12 max-w-sm mx-auto bg-white rounded-lg shadow-lg  text-black font-montserrat`}
    >
      {/* Top Section - Total Value */}
      <div className="bg-[#FF5146] text-center p-6 text-white rounded-t-lg">
        <h2 className="text-2xl font-bold">$3,400 TOTAL VALUE</h2>
        <p className="text-2xl font-normal">
          ONLY PAY <b>$149</b>
        </p>
      </div>

      <div className="flex items-center justify-center bg-gradient-to-t from-[#FFE054] from-[35%] to-[#FFF4C3] absolute -translate-y-8 inset-0 mx-28 rounded-lg h-12">
        <p className="text-lg uppercase text-center font-extrabold font-montserrat">
          Best Value
        </p>
      </div>

      {/* General Admission Section */}
      <div className="bg-gradient-to-b from-[#FF8D8D] to-[#FF5146] flex items-center text-center justify-center py-4 h-full max-h-32">
        <h3 className="text-3xl font-bold text-white">DIAMOND PACKAGE</h3>
      </div>

      {/* Price Section */}
      <div>
        <div className="grid grid-cols-[8fr_1fr_8fr] items-center gap-0 text-center py-6">
          <div className="justify-self-end">
            <p className="text-xs font-bold">FULL PRICE</p>
            <p className="text-4xl text-gray-400 line-through">$169</p>
          </div>
          <div
            className={`border-1 bg-black h-full w-1 justify-self-center mx-10`}
          />
          <div className="justify-self-start">
            <div className="flex flex-row items-center">
              <Percentage fill="#FF574D" />
              <p className="text-xs font-bold pl-1">SALE PRICE</p>
            </div>
            <p className="text-4xl font-bold">$49</p>
          </div>
        </div>
      </div>

      <div className="flex max-w-[24rem] justify-center mb-5 w-full mx-auto overflow-hidden">
        {/* Left Side: Save 70% */}
        <div className="bg-yellow-400 flex rounded-l-full items-center justify-center px-4 py-3 text-black font-bold !text-xs md:text-base">
          SAVE 70% TODAY
        </div>

        {/* Right Side: Spots Remaining */}
        <div className="rounded-r-full bg-yellow-100 flex items-center justify-center px-4 py-3 text-black font-bold !text-xs md:text-base">
          ONLY <span className="line-through mx-1 text-gray-500">30</span>
          <span className="text-black">23 SPOTS REMAIN</span>
        </div>
      </div>

      {/* Description Section */}
      <div className="text-center py-4 bg-[#FFEFEF] border-t-1 border-b-1 border-[#FF5146]">
        <p className="text-sm text-[#FF5146] font-semibold font-open-sans">
          For <b>first-timers eager to explore</b> Quantum transformation
        </p>
      </div>

      {/* Bonuses Section */}
      <div className="p-6">
        <li className="text-sm flex items-start md:items-center pb-3 space-x-3">
          <div>
            <CheckedRed width={20} height={20} />
          </div>
          <span>
            {" "}
            <>
              <b>Full Day Live Quantum Summit</b> with Dr Espen, Dr John
              Demartini, and more ($199 value)
            </>
          </span>
        </li>
        <div className="border-1 border-[#C8A049] bg-yellow-50 p-4 py-2 rounded-full mb-6 text-center">
          <p className="font-bold text-black text-sm">
            PLUS BONUSES WORTH $286
          </p>
        </div>
        <ul>
          {[
            <>Quantum Wheel of Life Quiz ($97 value)</>,
            <>Quantum Workbook ($55 value)</>,
            <>Journey to the Soul 2.0 Guided Meditation ($67 value)</>,
            <>Quantum Breath of Fire Breathwork downloadable Mp3 ($67 value)</>,
          ].map((item, index) => (
            <>
              <li
                key={index}
                className="text-sm flex items-start md:items-center pb-3 space-x-3"
              >
                <div>
                  <CheckedRed width={20} height={20} />
                </div>
                <span>{item}</span>
              </li>
            </>
          ))}
        </ul>
        <div className="flex justify-center mt-64 mb-20">
          <ButtonComponent
            className="py-6 px-6 !rounded-md "
            buttonColor="!bg-[#FFE054] !shadow-[0_6px_0_rgba(200,160,73,1)]"
          >
            <p className="font-montserrat text-sm text-black font-bold sm:text-xl uppercase">
              SECURE SPOT NOW!
            </p>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default PricingCardDiamond;
