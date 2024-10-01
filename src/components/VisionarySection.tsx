import Checked from "../assets/Checked";
import ButtonComponent from "./ButtonComponent";
import Section from "./Section";

const VisionarySection = () => {
  return (
    <Section
      id="visionary"
      className="!pt-32 !pb-1 bg-gradient-to-b from-color-13 from-[47%] to-black"
    >
      <div className="container relative">
        {" "}
        <div className=" text-white py-12">
          {/* Heading Section */}
          <div className="text-center mb-12 px-4">
            <h1 className="text-4xl lg:text-5xl font-montserrat max-w-4xl mx-auto font-bold mb-4">
              MEET THE VISIONARIES GUIDING YOUR QUANTUM LEAP
            </h1>
            <p className="text-lg max-w-3xl mx-auto font-open-sans">
              Our carefully-selected lineup of world-class experts combines
              centuries of experience in cutting-edge science, personal
              development, and holistic wellness to deliver rapid and lasting
              transformation.
            </p>
          </div>

          {/* Profile Sections */}
          <div className="max-w-7xl mx-auto space-y-16 px-4">
            {/* Profile 1 - Dr Espen Wold-Jensen */}
            {[
              {
                speaker: (
                  <>
                    {" "}
                    DR ESPEN <br />
                    WOLD-JENSEN
                  </>
                ),
                subheading: (
                  <>
                    Researcher in Neuroscience & Quantum Physics, Peak
                    Performance Mentor, Consciousness Pioneer
                  </>
                ),
                list: [
                  "Founder of Quantum Academy, a world-leading Academy for Conscious Education and Personal Empowerment ",
                  "Multi 7-Figure ‘SoulPreneur’ and Philanthropist ",
                  "Has helped 250,000 people break free from limitations and unlock their highest potential",
                  "Advisor to Fortune 500 CEOs on Peak Performance and Conscious Leadership",
                  "Creator of the Quantum DMT Breathwork Experience",
                ],
                speakerImg: "/visionary-img-1.png",
                quotedPersonImg: "/visionary-img-1.png",
                quoteSection: (
                  <div className="flex-grow font-open-sans text-sm">
                    <p className="italic">
                      “Just go to Dr Espen’s programs. His programs are the ones
                      that help you reprogram. And that’s the whole point. Take
                      your power back.”
                    </p>
                    <p className="text-yellow-400 font-semibold mt-2">
                      Dr. Bruce Lipton PhD
                    </p>
                  </div>
                ),
                isMirror: false,
              },
              {
                speaker: (
                  <>
                    {" "}
                    DR ESPEN <br />
                    WOLD-JENSEN
                  </>
                ),
                subheading: (
                  <>
                    Researcher in Neuroscience & Quantum Physics, Peak
                    Performance Mentor, Consciousness Pioneer
                  </>
                ),
                list: [
                  "Founder of Quantum Academy, a world-leading Academy for Conscious Education and Personal Empowerment ",
                  "Multi 7-Figure ‘SoulPreneur’ and Philanthropist ",
                  "Has helped 250,000 people break free from limitations and unlock their highest potential",
                  "Advisor to Fortune 500 CEOs on Peak Performance and Conscious Leadership",
                  "Creator of the Quantum DMT Breathwork Experience",
                ],
                speakerImg: "/visionary-img-1.png",
                quotedPersonImg: "/visionary-img-1.png",
                quoteSection: (
                  <div className="flex-grow font-open-sans text-sm">
                    <p className="italic">
                      “Just go to Dr Espen’s programs. His programs are the ones
                      that help you reprogram. And that’s the whole point. Take
                      your power back.”
                    </p>
                    <p className="text-yellow-400 font-semibold mt-2">
                      Dr. Bruce Lipton PhD
                    </p>
                  </div>
                ),
                isMirror: true,
              },
              {
                speaker: (
                  <>
                    {" "}
                    DR ESPEN <br />
                    WOLD-JENSEN
                  </>
                ),
                subheading: (
                  <>
                    Researcher in Neuroscience & Quantum Physics, Peak
                    Performance Mentor, Consciousness Pioneer
                  </>
                ),
                list: [
                  "Founder of Quantum Academy, a world-leading Academy for Conscious Education and Personal Empowerment ",
                  "Multi 7-Figure ‘SoulPreneur’ and Philanthropist ",
                  "Has helped 250,000 people break free from limitations and unlock their highest potential",
                  "Advisor to Fortune 500 CEOs on Peak Performance and Conscious Leadership",
                  "Creator of the Quantum DMT Breathwork Experience",
                ],
                speakerImg: "/visionary-img-1.png",
                quotedPersonImg: "/visionary-img-1.png",
                quoteSection: (
                  <div className="flex-grow font-open-sans text-sm">
                    <p className="italic">
                      “Just go to Dr Espen’s programs. His programs are the ones
                      that help you reprogram. And that’s the whole point. Take
                      your power back.”
                    </p>
                    <p className="text-yellow-400 font-semibold mt-2">
                      Dr. Bruce Lipton PhD
                    </p>
                  </div>
                ),
                isMirror: false,
              },
              {
                speaker: (
                  <>
                    {" "}
                    DR ESPEN <br />
                    WOLD-JENSEN
                  </>
                ),
                subheading: (
                  <>
                    Researcher in Neuroscience & Quantum Physics, Peak
                    Performance Mentor, Consciousness Pioneer
                  </>
                ),
                list: [
                  "Founder of Quantum Academy, a world-leading Academy for Conscious Education and Personal Empowerment ",
                  "Multi 7-Figure ‘SoulPreneur’ and Philanthropist ",
                  "Has helped 250,000 people break free from limitations and unlock their highest potential",
                  "Advisor to Fortune 500 CEOs on Peak Performance and Conscious Leadership",
                  "Creator of the Quantum DMT Breathwork Experience",
                ],
                speakerImg: "/visionary-img-1.png",
                quotedPersonImg: "/visionary-img-1.png",
                quoteSection: (
                  <div className="flex-grow font-open-sans text-sm">
                    <p className="italic">
                      “Just go to Dr Espen’s programs. His programs are the ones
                      that help you reprogram. And that’s the whole point. Take
                      your power back.”
                    </p>
                    <p className="text-yellow-400 font-semibold mt-2">
                      Dr. Bruce Lipton PhD
                    </p>
                  </div>
                ),
                isMirror: true,
              },
            ].map(
              ({
                speaker,
                subheading,
                list,
                speakerImg,
                quotedPersonImg,
                quoteSection,
                isMirror,
              }) => (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div
                    className={`${
                      isMirror && "md:order-2"
                    } flex justify-center h-full `}
                  >
                    <img
                      src={speakerImg}
                      alt="Speaker"
                      className="rounded-lg shadow-lg w-full h-full"
                    />
                  </div>
                  <div className={`${isMirror && "md:order-1"} font-open-sans`}>
                    <h3 className="text-4xl font-bold mb-4 font-montserrat">
                      {speaker}
                    </h3>
                    <p className="text-md mb-4 font-montserrat uppercase">
                      {subheading}
                    </p>
                    <hr></hr>
                    <ul className="mt-9 mb-9 space-y-3 list-none text-lg text-left font-open-sans">
                      {list.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start md:items-center space-x-3"
                        >
                          <div>
                            <Checked />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <hr></hr>
                    <div className="mt-9 flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={quotedPersonImg}
                          alt="Quoted person"
                          className="w-16 h-16 rounded-full border-2 border-gray-400"
                        />
                      </div>

                      {/* Quote Section */}
                      {quoteSection}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Final Section */}
          <div className="text-center mt-16 px-4">
            <p className="text-lg max-w-3xl mx-auto font-open-sans">
              Don’t miss this rare opportunity to learn directly from these
              respected experts. Their wisdom and proven techniques can help you
              achieve remarkable breakthroughs in your health, wealth, and
              overall well-being.
            </p>
            <ButtonComponent className="mt-12 px-3 py-4 sm:px-20 sm:py-10">
              <p className="font-montserrat text-sm text-white font-bold sm:text-xl uppercase">
                Yes, I’m Ready to Quantum <br />
                Leap My Life – Reserve My Spot!
              </p>
            </ButtonComponent>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VisionarySection;
