import Section from "./Section";
import ButtonComponent from "./ButtonComponent";
import BenefitCard from "./BenefitCard";

const Benefit = () => {
  const cardContents = [
    {
      bg: "url('/benefit-img-1.png')",
      header: (
        <>
          <b>Struggling</b> Entrepreneurs
        </>
      ),
      content: (
        <>
          Business owners stuck in a plateau, yearning to break through to the
          next level of success and revolutionise their ventures.
        </>
      ),
    },
    {
      bg: "url('/image 681.png')",
      header: (
        <>
          <b>ULTRA</b> HIGH ACHIEVERS
        </>
      ),
      content: (
        <>
          Individuals who know there's more to life, but can't seem to access
          that elusive "something more" that will take them from great to
          extraordinary.
        </>
      ),
    },
    {
      bg: "url('/benefit-img-2.png')",
      header: (
        <>
          HOLISTIC <b>GROWTH SEEKERS</b>
        </>
      ),
      content: (
        <>
          People ready to align their mind, body, and spirit for unprecedented
          success, tapping into their full potential across all areas of life.
        </>
      ),
    },
    {
      bg: "url('/benefit-img-3.png')",
      header: (
        <>
          <b>VISIONARY</b> LEADERS
        </>
      ),
      content: (
        <>
          Change-makers who want to amplify their impact and create lasting
          positive change, harnessing untapped potential to transform not just
          their lives, but the world around them.
        </>
      ),
    },
  ];

  return (
    <Section
      id="benefit"
      className="!pt-1 !pb-1 bg-gradient-to-t from-color-13 from-[-10%] to-black"
    >
      <div className="container relative max-w-[112rem]">
        <div className="text-white min-h-screen flex flex-col items-center">
          {/* Main Title Section */}
          <div className="text-center mt-12 px-4 mx-100 max-w-[68rem]">
            <h1 className="text-4xl lg:text-6xl font-bold mb-12 font-montserrat">
              WHO WILL BENEFIT MOST FROM THIS QUANTUM LEAP?
            </h1>
            <p className="max-w-3xl mx-auto mb-6 font-open-sans text-xl md:text-2xl">
              This transformative experience is designed for those ready to
              unlock their full potential and revolutionize their lives:
            </p>
          </div>

          {/* Card Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12 px-6 min-h-[40rem]">
            {cardContents.map(({ header, content, bg }) => (
              <>
                <BenefitCard
                  content={content}
                  header={header}
                  className={`max-w-3xl`}
                  image={bg}
                />
              </>
            ))}
          </div>

          {/* Footer Section */}
          <div className="mt-12 mb-6 px-4 text-center max-w-7xl py-6">
            <p className="tracking-wide leading-snug text-xl md:text-[28px] text-white font-open-sans">
              Ready to harness the power of Quantum principles and tap into the
              99.99% of your untapped potential? This is your moment. Don’t let
              another day pass feeling less than extraordinary…
            </p>
          </div>
          <ButtonComponent className="px-3 py-3 md:px-6 md:py-8 lg:px-[100px] lg:py-12">
            <p className="font-montserrat text-[10px] min-[328px]:text-sm text-white font-bold lg:text-xl xl:text-[28px] uppercase">
              Transform Your Life Today!
            </p>
          </ButtonComponent>
          <p className="pt-4 text-md text-center md:text-xl text-white font-open-sans italic">
            With only 23 Diamond spots available, time is running out to secure
            your spot.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Benefit;
