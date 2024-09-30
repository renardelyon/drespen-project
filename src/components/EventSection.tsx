import ButtonComponent from "./ButtonComponent";
import ImageCarouselCard from "./ImageCarouselCard";
import Section from "./Section";

const EventSection = () => {
  return (
    <Section
      id="event"
      className="!pt-1 bg-gradient-to-b from-color-14 to-color-15"
    >
      <div className="py-12 text-black">
        {/* Section Heading */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto font-montserrat">
            WHY QUANTUM LEAPING AT OUR EVENT IS UNMATCHED
          </h1>
        </div>

        {/* Large Main Image */}
        <div className="flex justify-center mb-16 px-4">
          <img
            src="/src/assets/event-img-1.png"
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
              image: "src/assets/event-img-2.png",
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
              image: "src/assets/event-img-2.png",
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
              image: "src/assets/event-img-2.png",
              isOpposite: false,
            },
          ].map(({ header, content, image, isOpposite }) => (
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr_3fr] gap-8 items-center">
              <div
                className={`${isOpposite && "lg:order-3"} justify-self-start`}
              >
                <h3 className="text-3xl font-bold mb-4 font-montserrat">
                  {header}
                </h3>
                <p className="text-gray-700 text-xl font-open-sans">
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
                } flex justify-self-end`}
              >
                <img
                  src={image}
                  alt="Guided by Experts"
                  className="rounded-lg shadow-lg w-full h-full max-w-md"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-6xl mx-auto font-montserrat uppercase">
            But Don’t Take Our Word for It—Here’s What Leading Scientists and
            Authors Say About the Power of Quantum Transformation
          </h1>
        </div>
        <ImageCarouselCard />
        <div className="text-center mx-32 md:mx-52 mt-12 font-open-sans">
          <p className="text-4xl mb-4 font-bold font-montserrat uppercase">
            Feel the power yourself
          </p>
          <p className="text-xl mb-4 max-w-xl mx-auto">
            Experience transformation at the speed of thought and leap into your
            full potential.
          </p>
          <ButtonComponent className="mt-12 px-3 py-4 sm:px-20 sm:py-10">
            <p className="font-montserrat text-sm text-white font-bold sm:text-xl uppercase">
              Yes, I’m Ready to Quantum <br />
              Leap My Life – Reserve My Spot!
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
