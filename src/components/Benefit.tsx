import Section from "./Section";
import ButtonComponent from "./ButtonComponent";
import BenefitCard from "./BenefitCard";

const Benefit = () => {
  const cardContents = [
    {
      header: (
        <>
          ENTREPRENEURS <b>AND BUSINESS</b> OWNERS
        </>
      ),
      content: (
        <>
          You're an entrepreneur or business owner stuck in a plateau, yearning
          to break through to the next level of success
        </>
      ),
    },
    {
      header: (
        <>
          <b>ULTRA</b> HIGH ACHIEVERS
        </>
      ),
      content: (
        <>
          You're a high achiever who knows there's more to life, but can't seem
          to access that elusive "something more"
        </>
      ),
    },
    {
      header: (
        <>
          HOLISTIC <b>GROWTH SEEKERS</b>
        </>
      ),
      content: (
        <>
          You're seeking true holistic growth, ready to align your mind, body,
          and spirit for unprecedented success
        </>
      ),
    },
    {
      header: (
        <>
          <b>VISIONARY</b> LEADERS
        </>
      ),
      content: (
        <>
          You're a visionary leader who wants to amplify your impact and create
          lasting positive change
        </>
      ),
    },
  ];
  return (
    <Section
      id="benefit"
      className="!pt-1 !pb-1 bg-gradient-to-t from-color-13 from-[20%] to-black"
    >
      <div className="container relative">
        <div className="text-white min-h-screen flex flex-col items-center">
          {/* Main Title Section */}
          <div className="text-center mt-12 px-4 mx-100 max-w-[56rem]">
            <h1 className="text-5xl font-bold mb-4 font-montserrat">
              WHO WILL BENEFIT MOST FROM THIS QUANTUM LEAP?
            </h1>
            <p className="max-w-2xl mx-auto mb-6 font-open-sans text-lg md:text-xl">
              This transformative experience is designed for those ready to
              unlock their full potential and revolutionize their lives:
            </p>
            <ButtonComponent className="px-3 py-4 sm:px-32 sm:py-9">
              <p className="font-montserrat text-sm text-white font-bold sm:text-xl uppercase">
                TRANSFORM YOUR LIFE TODAY!
              </p>
            </ButtonComponent>
            <p className="pt-4 text-sm text-white font-open-sans italic">
              With only 23 Diamond spots available, time is running out to
              secure your spot.
            </p>
          </div>

          {/* Card Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-6 min-h-[40rem]">
            {cardContents.map(({ header, content }) => (
              <>
                <BenefitCard content={content} header={header} />
              </>
            ))}
          </div>

          {/* Footer Section */}
          <div className="mt-12 mb-6 px-4 text-center max-w-3xl">
            <p className="text-xl text-white font-open-sans">
              Ready to harness the power of Quantum principles and tap into the
              99.99% of your untapped potential? This is your moment. Don’t let
              another day pass feeling less than extraordinary…
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefit;
