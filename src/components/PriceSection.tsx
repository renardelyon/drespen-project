import PricingCardDiamond from "./PricingCardDiamond";
import PricingCardGeneral from "./PricingCardGeneral";
import PricingCardVIP from "./PricingCardVIP";
import Section from "./Section";

const PriceSection = () => {
  return (
    <Section id="price" className="!py-10 !px-5">
      <div className="py-16 z-0">
        {/* Header Section */}
        <div className="text-center text-white mb-28 font-montserrat">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CHOOSE YOUR PATH TO TRANSFORMATION
          </h1>
          <p className="text-2xl">
            Don't Break the Bank, Break Your Limits - Save 70% Today!
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
          {/* General Admission Card */}
          <PricingCardGeneral className="order-2 lg:order-1" />

          {/* Diamond Package Card */}
          <PricingCardDiamond className="order-1 lg:order-2 !mb-0 lg:!mb-12" />

          {/* VIP Admission Card */}
          <PricingCardVIP className="order-3 lg:order-3" />
        </div>
      </div>
    </Section>
  );
};

export default PriceSection;
