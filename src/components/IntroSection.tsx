/* eslint-disable no-irregular-whitespace */
import Section from "./Section";

const IntroSection = () => {
  return (
    <Section
      id="transformation"
      className="!pb-1 bg-gradient-to-t from-color-13 from-[-20%] to-black"
    >
      <div className="container relative">
        <div className=" min-h-screen text-white py-12">
          {/* Section Heading */}
          <div className="text-left mb-12 px-4 max-w-[44rem] mx-auto">
            <h1 className="text-center text-4xl md:text-5xl font-bold mb-4 font-montserrat">
              WHY QUANTUM LEAPING IS A GAME-CHANGER
            </h1>
          </div>

          {/* Feature Blocks */}
          <div className="space-y-16">
            {/* Block 1 */}
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg md:text-2xl font-bold font-montserrat uppercase">
                Quantum Leaping offers more than just a path to healing:
              </p>
              <p className="text-lg md:text-2xl font-normal font-open-sans">
                It’s a practical, life-enhancing method that helps you achieve
                clarity, vitality, and success. By balancing your mind, body,
                and energy, Quantum Leaping equips you to break free from
                subconscious mental and emotional blocks, improve
                decision-making, and elevate your performance—whether in
                business, leadership or in your personal life. 
              </p>
              <h2 className="text-4xl md:text-5xl font-bold md:pb-10 font-montserrat pt-10">
                HERE'S HOW IT WORKS:
              </h2>
              {[
                {
                  title: "REWIRE YOUR NEURAL PATHWAYS",
                  content: (
                    <>
                      {" "}
                      By tapping into the brain’s neuroplasticity and re-writing
                      the pathway from the low vibration of Fear, to the higher
                      vibration of Love, Quantum Leaping supports the conditions
                      for dissolving old limiting beliefs and restructuring
                      thought patterns. This shift fosters adaptability and
                      creative thinking, enhancing both your leadership skills
                      and your ability to innovate in business and life (
                      <i>MDPI</i>
                      )(Well Being Journal).
                    </>
                  ),
                },
                {
                  title: "Activate Cellular Vitality",
                  content: (
                    <>
                      Quantum Leaping works with scientifically proven
                      epigenetic principles, helping optimise the way your cells
                      respond to stress and your environment. This improves how
                      your genes express themselves, boosting your body’s
                      resilience, stress management, and overall physical health
                      <i> ​(JNeurosci) ​(BioMed Central)</i>.
                    </>
                  ),
                },
                {
                  title: "Access Heightened States of Consciousness",
                  content: (
                    <>
                      Through scientifically-backed breathwork techniques,
                      Quantum Leaping helps you access altered brainwave states.
                      This expands your creativity, sharpens neural
                      connectivity, and deepens self-awareness, unlocking new
                      personal and professional insights​​ <i>(JNeurosci).</i>
                    </>
                  ),
                },
                {
                  title: "Manifest Your Desires with Quantum Precision",
                  content: (
                    <>
                      Quantum Leaping aligns your energy with your goals, like
                      tuning a radio to the perfect frequency. This heightens
                      your awareness and focus, allowing you to spot and seize
                      opportunities with unprecedented clarity and speed.
                    </>
                  ),
                },
              ].map(({ title, content }, index) => (
                <>
                  <h3 className="leading-tight text-3xl md:text-[42px] font-bold font-montserrat pb-6 pt-10 uppercase">
                    <span className="text-[#FFE054]">{`0${index + 1} `}</span>
                    {title}
                  </h3>
                  <p className="text-lg md:text-2xl text-white font-open-sans pb-6 max-w-4xl">
                    {content}
                  </p>
                  <img
                    src={`/intro-img-${index + 1}.png`}
                    alt="Rewire Neural Pathways"
                    className="rounded-lg shadow-lg w-full pb-10"
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default IntroSection;
