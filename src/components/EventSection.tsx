import ButtonComponent from "./ButtonComponent";
import ImageCarouselCard from "./ImageCarouselCard";
import Section from "./Section";

const EventSection = () => {
  return (
    <Section
      id="event"
      className="!pt-1 bg-gradient-to-b from-color-14 to-color-15"
    >
      <div className="container py-24 text-black">
        {/* Section Heading */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto font-montserrat">
            WHY QUANTUM LEAPING AT OUR EVENT IS UNMATCHED
          </h1>
        </div>

        {/* Large Main Image */}
        <div className="flex justify-center mb-16 px-4">
          <img
            src="/event-img-1.png"
            alt="Quantum Leaping Event"
            className="rounded-lg shadow-lg max-w-6xl w-full"
          />
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto space-y-16 px-4">
          {/* Row 1 */}
          {[
            {
              header: <>GUIDED BY EXPERTS</>,
              content: (
                <>
                  At the Quantum Summit, you’ll be guided by Dr Espen
                  Wold-Jensen, a pioneer in Quantum Healing and Peak
                  Performance, alongside globally recognized experts in both
                  Health, Wealth and Relationships. Together, they’ll combine
                  cutting-edge scientific breakthroughs with ancient spiritual
                  wisdom to provide a holistic experience designed to transform
                  your life on the day!
                </>
              ),
              isOpposite: false,
            },
            {
              header: <p className="uppercase">Community Support</p>,
              content: (
                <>
                  You'll tap into the collective energy of our Quantum
                  Community, where group dynamics foster breakthroughs that
                  wouldn’t be possible alone. This shared environment of
                  students and graduates from around the world enhances personal
                  growth by creating a space for deep connections and a place
                  where you can be celebrated exactly who you are.
                </>
              ),
              isOpposite: true,
            },
            {
              header: <p className="uppercase">Integrated Techniques</p>,
              content: (
                <>
                  At the Quantum Academy we bring you advanced Quantum Healing
                  and Empowerment techniques, DMT Breathwork, Meditation along
                  with the Quantum Wheel of Life, offering a complete mind,
                  body, and spirit transformation. This comprehensive system
                  ensures lasting results that ripple across all areas of your
                  life.
                </>
              ),
              isOpposite: false,
            },
          ].map(({ header, content, isOpposite }, index) => (
            <div className="grid grid-cols-1 lg:grid-cols-[5fr_1fr_5fr] gap-8 items-center">
              <div
                className={`${isOpposite && "lg:order-3"} justify-self-start`}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-montserrat">
                  {header}
                </h3>
                <p className="text-gray-700 text-lg md:text-2xl font-open-sans">
                  {content}
                </p>
              </div>
              <div
                className={`border-1 bg-[#DFBA55] h-full w-1 justify-self-center ${
                  isOpposite && "lg:order-2"
                } `}
              />
              <div
                className={`${
                  isOpposite && "lg:order-1"
                } flex  justify-self-center lg:justify-self-end`}
              >
                <img
                  src={`/event-img-${index + 2}.png`}
                  alt="Guided by Experts"
                  className="rounded-lg shadow-lg w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 mb-12 px-4 pt-48">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-[1400px] mx-auto font-montserrat uppercase">
            But Don’t Take Our Word for It—Here’s What Leading Scientists and
            Authors Say About the Power of Quantum Transformation
          </h1>
        </div>
        <ImageCarouselCard />
        <div className="max-w-sm md:max-w-3xl xl:max-7xl text-center mx-auto mt-12 font-open-sans">
          <p className="text-4xl md:text-5xl mb-4 font-bold font-montserrat uppercase">
            Feel the power yourself
          </p>
          <p className="text-xl lg:text-[28px] max-w-xl mx-auto">
            Take control of your story and step into your full potential
          </p>
        </div>
        <div className="w-full mx-auto text-center">
          <ButtonComponent className="mt-14 px-3 py-6 sm:px-20 sm:py-14">
            <p className="hidden md:block font-montserrat text-[10px] min-[328px]:text-sm text-white font-bold lg:text-xl md:text-2xl xl:text-[28px] uppercase">
              I'm Ready to Unlock My Quantum Potential
            </p>
            <p className="md:hidden block font-montserrat text-sm text-white font-bold sm:text-xl uppercase">
              Yes, I’m Ready
            </p>
          </ButtonComponent>
          <p className="text-sm mt-4 italic">
            With only 23 Diamond spots available, time is running out to reserve
            your spot.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default EventSection;
