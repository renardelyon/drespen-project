import CountUp from "react-countup";
import Section from "./Section";
import { RiArticleFill } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

const TransformationSection = () => {
  return (
    <Section
      id="transformation"
      className="!pt-1 !pb-1 bg-gradient-to-b from-color-14 from-[-30%] via-color-15 via-80% to-color-14 text-black"
    >
      <div className="container relative mt-20 xl:!max-w-[105rem]">
        <div className="py-16 px-4">
          {/* First Section: Main Heading */}
          <div className="text-center mb-20 max-w-[72rem] mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 font-montserrat">
              BECOME PART OF A GLOBAL TRANSFORMATION MOVEMENT
            </h1>
            <p className="text-gray-600 max-w-6xl mx-auto font-open-sans text-lg md:text-2xl font-semibold">
              This extraordinary once-a-year event is your gateway to joining a
              worldwide community of visionaries, change-makers, and conscious
              leaders. By participating, you're not just transforming your own
              life – you're contributing to a ripple effect of positive change
              that spans the globe.
            </p>
          </div>

          {/* Metrics Section */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 min-[1520px]:grid-cols-4 gap-8 mb-12 text-black
              text-left font-montserrat  min-[1520px]:ml-20 min-[1520px]:-mr-10 max-w-8xl mx-12 sm-mx-0
              `}
          >
            {[
              {
                title: (
                  <div className="flex items-center">
                    <RiArticleFill className="mr-2" />
                    <CountUp
                      end={250}
                      suffix="k+"
                      enableScrollSpy
                      duration={3}
                    />
                  </div>
                ),
                subtitle: "Success Stories",
              },
              {
                title: (
                  <div className="flex items-center">
                    <IoIosStar className="mr-2" />
                    <p>Rated 4.8</p>
                  </div>
                ),
                subtitle: "From 365 Google Reviews",
              },
              {
                title: (
                  <div className="flex items-center">
                    <MdSwapHorizontalCircle className="mr-2" />
                    <CountUp
                      end={4000}
                      suffix="+"
                      enableScrollSpy
                      duration={3}
                    />
                  </div>
                ),
                subtitle: "Transformative Sessions",
              },
              {
                title: (
                  <>
                    <div className="flex items-center">
                      <BiWorld className="mr-2" />
                      <CountUp
                        end={30}
                        suffix="+"
                        enableScrollSpy
                        duration={3}
                      />
                    </div>
                  </>
                ),
                subtitle: "Countries United",
              },
            ].map(({ title, subtitle }, index) => (
              <div
                className={`border-l-[12px] md:ml-32 min-[1520px]:ml-0 border-l-red-500 pl-5 ${
                  index == 1 && "min-[1520px]:-ml-14"
                }`}
              >
                <p className="text-3xl min-[1520px]:text-5xl font-bold">
                  {title}
                </p>
                <p className="text-lg md:text-2xl font-normal pt-2">
                  {subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Partners Section */}
          <div className="flex items-center justify-center mb-16 mt-15">
            <div className="flex flex-col space-y-10 sm:space-y-0 justify-center items-center sm:inline-block bg-white px-10 py-6 rounded-3xl ">
              <img
                src="/Q ACADEMY - Black 1.png"
                alt="Quantum Academy"
                className="inline-block w-[160px] md:w-[200px] xl:w-[260px] md:mr-16"
              />
              <img
                src="/OFFICIAL RESEARCH PARTNERS.png"
                alt="Partner 1"
                className="inline-block w-[140px] md:w-[180px] xl:w-[228px] md:mr-16"
              />
              <img
                src="/James-cook-u.png"
                alt="Partner 2"
                className="inline-block w-[120px] md:w-[160px] xl:w-[175px]"
              />
            </div>
          </div>

          {/* Second Section: Subheading and Text */}
          <div className="text-center mb-12 font-open-sans mt-48 max-w-6xl mx-auto">
            <h2 className="!leading-[1.15] text-4xl md:text-5xl font-bold mb-10 !font-montserrat">
              QUANTUM LEAPING WILL REWRITE YOUR REALITY AT THE SUBATOMIC LEVEL
            </h2>
            <p className="border-l-8 mb-10 pl-4 border-l-red-500 italic text-2xl md:text-3xl font-bold !font-montserrat inline-block">
              "We don't have to go without, when we go within"
            </p>
            <p className="text-lg md:text-2xl mx-auto">
              Unlike traditional self-help methods, Quantum Leaping is a
              breakthrough approach that rewrites your reality at the subatomic
              level, unlocking the 99.99% of untapped potential within you. Yes
              that's right, our atoms are made up of over 99.99% empty space.
              But what if I told you this space is not “empty,” per se. What if
              there is a way to unlock the power of your own Consciousness and
              Energy, by simply removing the boundaries and blockages from our
              body, mind and soul.
            </p>
            <p className=" text-lg md:text-2xl max-w-2xl mx-auto mt-6">
              Would you take the leap?
            </p>
            <p className="text-lg md:text-2xl mx-auto mt-6">
              What if ancient and timeless techniques such as meditation,
              breathwork, advanced self-development and energy mastery could
              help you harness the power of the Quantum field to propel your
              entire being into the future—not just to feel better, but to
              become the best version of yourself in life and business…
            </p>
          </div>
        </div>
      </div>
      <div className="bg-transformation-img w-full h-[32rem] bg-cover bg-no-repeat mb-32" />
    </Section>
  );
};

export default TransformationSection;
