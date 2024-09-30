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
          <h1 className="text-4xl font-bold mb-4">
            WHY QUANTUM LEAPING AT OUR EVENT IS UNMATCHED
          </h1>
        </div>

        {/* Large Main Image */}
        <div className="flex justify-center mb-16 px-4">
          <img
            src="/path-to-main-image.jpg"
            alt="Quantum Leaping Event"
            className="rounded-lg shadow-lg max-w-6xl w-full"
          />
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto space-y-16 px-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">GUIDED BY EXPERTS</h3>
              <p className="text-gray-700">
                At the Quantum Summit, you'll be guided by Dr. Espen
                World-leading experts in Quantum Healing and Peak Performance,
                alongside globally recognized experts in Health, Wealth, and
                Relationships. Together, they combine cutting-edge scientific
                breakthroughs with ancient spiritual wisdom to provide a
                holistic experience designed to transform your life on the day!
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/path-to-expert-image.jpg"
                alt="Guided by Experts"
                className="rounded-lg shadow-lg w-full max-w-sm"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center lg:order-1">
              <img
                src="/path-to-community-image.jpg"
                alt="Community Support"
                className="rounded-lg shadow-lg w-full max-w-sm"
              />
            </div>
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold mb-4">COMMUNITY SUPPORT</h3>
              <p className="text-gray-700">
                You'll tap into the collective energy of our Quantum Community,
                where group dynamics foster breakthroughs that simply cannot be
                done alone. This shared energy and the wisdom of graduates from
                around the world enhances personal growth by creating a safe yet
                dynamic location and space where you can be celebrated exactly
                for who you are.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">INTEGRATED TECHNIQUES</h3>
              <p className="text-gray-700">
                At the Quantum Academy, we bring you advanced Quantum Healing
                and Empowerment techniques, DMT Breathwork, Meditation along
                with the Quantum Wheel of Life, offering a complete mind, body,
                and spirit transformation. This comprehensive system ensures
                lasting results that ripple across all areas of your life.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/path-to-techniques-image.jpg"
                alt="Integrated Techniques"
                className="rounded-lg shadow-lg w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EventSection;
