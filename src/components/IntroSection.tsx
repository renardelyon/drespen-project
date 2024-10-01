/* eslint-disable no-irregular-whitespace */
import Section from "./Section";

const IntroSection = () => {
  return (
    <Section
      id="transformation"
      className="!pt-1 !pb-1 bg-gradient-to-t from-color-13 to-black"
    >
      <div className="container relative">
        <div className=" min-h-screen text-white py-12">
          {/* Section Heading */}
          <div className="text-left mb-12 px-4 max-w-[44rem] mx-auto">
            <h1 className=" text-center text-4xl md:text-5xl font-bold mb-4 font-montserrat">
              WHY QUANTUM LEAPING IS A GAME-CHANGER
            </h1>
          </div>

          {/* Feature Blocks */}
          <div className="space-y-16">
            {/* Block 1 */}
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl font-semibold font-montserrat uppercase">
                Quantum Leaping offers more than just a path to healing:
              </p>
              <p className="text-lg font-open-sans">
                It’s a practical, life-enhancing method that helps you achieve
                clarity, vitality, and success. By balancing your mind, body,
                and energy, Quantum Leaping equips you to break free from
                subconscious mental and emotional blocks, improve
                decision-making, and elevate your performance—whether in
                business, leadership or in your personal life.
              </p>
              <h2 className="text-4xl font-bold mb-6 font-montserrat pt-8">
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
                  src: "/src/assets/IMG_7900 1.png",
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
                  src: "/src/assets/IMG_7900 1.png",
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
                  src: "/src/assets/IMG_7900 1.png",
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
                  src: "/src/assets/IMG_7900 1.png",
                },
              ].map(({ title, content, src }) => (
                <>
                  <h3 className="text-3xl font-bold font-montserrat pt-10 uppercase">
                    {title}
                  </h3>
                  <p className=" text-lg text-white font-open-sans pb-2 max-w-[44rem]">
                    {content}
                  </p>
                  <img
                    src={src}
                    alt="Rewire Neural Pathways"
                    className="rounded-lg shadow-lg w-full max-[64rem]"
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
