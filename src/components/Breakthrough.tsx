import ButtonComponent from "./ButtonComponent";
import Section from "./Section";
import TestimonialCard from "./TestimonialCard";

const Breakthrough = () => {
  return (
    <Section
      id="benefit"
      className="!pt-1 !pb-1 bg-gradient-to-b from-color-13 from-[33%] to-black"
    >
      <div className="container relative">
        <div className="text-white min-h-screen py-16 flex flex-col items-center">
          {/* Main Heading */}
          <div className="text-center px-4 mb-12 max-w-[72rem]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
              YOU'LL EXPERIENCE THREE LIFE-ALTERING QUANTUM BREAKTHROUGHS
            </h1>
            <p className="text-lg max-w-2xl mx-auto font-open-sans">
              At the Quantum Summit, you'll undergo profound transformations
              that will revolutionize your body, mind, and financial reality.
              Here are the extraordinary breakthroughs you'll experience:
            </p>
          </div>

          {/* Breakthrough Cards */}
          <div className={`rounded-md space-y-12 border-1 border-gray-500`}>
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row bg-black rounded-lg shadow-lg">
              <div className="md:w-[55%] p-15">
                <span className="text-yellow-300 text-3xl font-extrabold font-montserrat">
                  01
                </span>
                <h2 className="text-4xl font-semibold mt-2 mb-2 font-montserrat">
                  Quantum Body Mastery: Unlock Superhuman Vitality
                </h2>
                <p className="text-medium text-white mb-4 font-open-sans">
                  You'll learn to unlock untapped reservoirs of energy and
                  vitality using Quantum techniques that will make you feel
                  younger, stronger, and healthier than ever before.
                </p>
                <ul className="list-disc pl-8 text-medium">
                  <li>
                    Master Dr Espen's groundbreaking Quantum Coherence Protocol
                    for rapid cellular regeneration.
                  </li>
                  <li>
                    Learn to release deep-seated emotional and physical
                    blockages (from the subconscious programming) at the
                    subatomic level.
                  </li>
                  <li>
                    Harness the power of Quantum DMT Breathwork (the very same
                    breathwork technique that saved Dr Espen’s life) to induce
                    profound healing states and boost vitality and energy.
                  </li>
                  <li>
                    Develop the ability to influence your cellular health for
                    enhanced longevity and peak performance.
                  </li>
                </ul>
                <TestimonialCard className="mt-8" />
              </div>
              <div className="bg-break-card-img-1 hidden md:block md:w-[44%] pl-10" />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mx-52 mt-12 font-open-sans">
            <p className="text-xl  mb-4">
              This is your opportunity to rise above limitations of the outdated
              principles and paradigms and embrace your full potential.
            </p>
            <p className="text-xl mb-4">
              <b className="italic">
                "If everything is Energy, then how do you tap into the bottom of
                your potential?"
              </b>
              <br />- Dr Espen
            </p>
            <p className="text-xl mb-4">
              And so then what if, by expanding your Consciousness and Energy,
              bringing coherence to the Heart and Equilibrium to the Mind, you
              could finally create the life you deserve? Are you ready to take
              the Quantum Leap?
            </p>
            <ButtonComponent className="mt-12 px-3 py-4 sm:px-20 sm:py-10">
              <p className="font-montserrat text-sm text-white font-bold sm:text-xl uppercase">
                Yes, I’m Ready to Quantum <br />
                Leap My Life – Reserve My Spot!
              </p>
            </ButtonComponent>
            <p className="text-sm text-white mt-4 italic">
              With only 23 Diamond spots available, time is running out to
              reserve your spot.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Breakthrough;
