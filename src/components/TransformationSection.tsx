import Section from "./Section";

const TransformationSection = () => {
  return (
    <Section
      id="transformation"
      className="!pt-1 !pb-1 bg-gradient-to-b from-color-14 to-color-15 text-black"
    >
      <div className="container relative">
        <div className="py-16 px-4">
          {/* First Section: Main Heading */}
          <div className="text-center mb-12 max-w-[62rem] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
              BECOME PART OF A GLOBAL TRANSFORMATION MOVEMENT
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto font-open-sans text-lg font-semibold">
              This extraordinary once-a-year event is your gateway to joining a
              worldwide community of visionaries, change-makers, and conscious
              leaders. By participating, you're not just transforming your own
              life – you're contributing to a ripple effect of positive change
              that spans the globe.
            </p>
          </div>

          {/* Metrics Section */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-black
              text-left font-montserrat ml-20 -mr-10
              `}
          >
            {[
              { title: "250k+", subtitle: "Success Stories" },
              { title: "Rated 4.8", subtitle: "From 365 Google Reviews" },
              { title: "4,000+", subtitle: "Transformative Sessions" },
              { title: "30+", subtitle: "Countries United" },
            ].map(({ title, subtitle }) => (
              <div className="border-l-8 border-l-red-500  pl-5">
                <p className="text-3xl font-bold">{title}</p>
                <p className="text-gray-600">{subtitle}</p>
              </div>
            ))}
          </div>

          {/* Partners Section */}
          <div className="flex items-center justify-center mb-16">
            <div className="bg-white p-4 rounded-md inline-block">
              <img
                src="src/assets/Q ACADEMY - Black 1.png"
                alt="Quantum Academy"
                className="inline-block w-48 mr-4"
              />
              <img
                src="src/assets/OFFICIAL RESEARCH PARTNERS.png"
                alt="Partner 1"
                className="inline-block w-36 mr-4"
              />
              <img
                src="src/assets/James-cook-u.png"
                alt="Partner 2"
                className="inline-block w-36"
              />
            </div>
          </div>

          {/* Second Section: Subheading and Text */}
          <div className="text-center mb-12 font-open-sans">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 !font-montserrat">
              QUANTUM LEAPING WILL REWRITE YOUR REALITY AT THE SUBATOMIC LEVEL
            </h2>
            <p className="border-l-8 pl-4 border-l-red-500 italic mb-4 text-xl font-bold !font-montserrat inline-block">
              "We don't have to go without, when we go within"
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              Unlike traditional self-help methods, Quantum Leaping is a
              breakthrough approach that rewrites your reality at the subatomic
              level, unlocking the 99.99% of untapped potential within you. Yes
              that's right, our atoms are made up of over 99.99% empty space.
              But what if I told you this space is not “empty,” per se. What if
              there is a way to unlock the power of your own Consciousness and
              Energy, by simply removing the boundaries and blockages from our
              body, mind and soul.
            </p>
            <p className=" text-lg max-w-2xl mx-auto mt-6">
              Would you take the leap?
            </p>
            <p className="text-lg max-w-3xl mx-auto mt-6">
              What if ancient and timeless techniques such as meditation,
              breathwork, advanced self-development and energy mastery could
              help you harness the power of the Quantum field to propel your
              entire being into the future—not just to feel better, but to
              become the best version of yourself in life and business…
            </p>
          </div>
        </div>
      </div>
      <div className="bg-grid-conf w-screen h-[52rem] bg-cover" />
    </Section>
  );
};

export default TransformationSection;
