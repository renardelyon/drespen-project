import Percentage from "../assets/Percentage";
import Checked from "../assets/Checked";
import ButtonComponent from "./ButtonComponent";

const PricingCardVIP = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} mt-12 max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden text-black font-montserrat`}
    >
      {/* Top Section - Total Value */}
      <div className="bg-[#FFE054] text-center p-6">
        <h2 className="text-2xl font-bold">$1,832 TOTAL VALUE</h2>
        <p className="text-2xl font-normal">
          ONLY PAY <b>$99</b>
        </p>
      </div>

      {/* General Admission Section */}
      <div className="bg-gradient-to-b from-[#FFFDEF] to-[#FFF3BA] flex items-center text-center justify-center py-4 h-full max-h-32">
        <h3 className="text-3xl font-bold">VIP ADMISSION</h3>
      </div>

      {/* Price Section */}
      <div>
        <div className="grid grid-cols-[8fr_1fr_8fr] items-center gap-0 text-center py-6">
          <div className="justify-self-end">
            <p className="text-xs font-bold">FULL PRICE</p>
            <p className="text-4xl text-gray-400 line-through">$329</p>
          </div>
          <div
            className={`border-1 bg-black h-full w-1 justify-self-center mx-10`}
          />
          <div className="justify-self-start">
            <div className="flex flex-row items-center">
              <Percentage />
              <p className="text-xs font-bold pl-1">SALE PRICE</p>
            </div>
            <p className="text-4xl font-bold">$99</p>
          </div>
        </div>
        <p className="bg-gray-200 max-w-[18rem] mx-auto w-full rounded-full py-2 px-4 mb-5 text-sm text-center font-bold">
          SAVE 70% TODAY
        </p>
      </div>

      {/* Description Section */}
      <div className="text-center py-4 bg-[#FFFCE7] border-t-1 border-b-1 border-[#FFE054]">
        <p className="text-sm text-[#947900] font-semibold font-open-sans">
          For committed achievers seeking personalised growth strategies
        </p>
      </div>

      {/* Bonuses Section */}
      <div className="p-6">
        <li className="text-sm flex items-start md:items-center pb-3 space-x-3">
          <div>
            <Checked width={20} height={20} />
          </div>
          <span>
            {" "}
            <>
              Full Day Live <b>VIP Experience</b>with Dr Espen, Dr John
              Demartini, and more ($329 value)
            </>
          </span>
        </li>
        <div className="border-1 border-[#C8A049] bg-yellow-50 p-4 py-2 rounded-full mb-6 text-center">
          <p className="font-bold text-black text-sm">
            PLUS BONUSES WORTH $1,503
          </p>
        </div>
        <ul>
          {[
            <>Includes ALL General Admission Ticket Inclusions ($286 value)</>,
            <>
              50-minute exclusive VIP Mastermind Session with Dr Espen ($295
              value)
            </>,
            <>Fast Track Formula for Daily Results ($295 value)</>,
            <>Superfood Super Fit Super You eBook ($49 value)</>,
            <>Quantum Awakening Guided Meditation ($79)</>,
            <>Private Access to Dr Espen's membership platform ($499)</>,
          ].map((item, index) => (
            <>
              <li
                key={index}
                className="text-sm flex items-start md:items-center pb-3 space-x-3"
              >
                <div>
                  <Checked width={20} height={20} />
                </div>
                <span>{item}</span>
              </li>
            </>
          ))}
        </ul>
        <div className="flex justify-center mt-32 mb-20">
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

export default PricingCardVIP;
