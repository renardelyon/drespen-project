import ButtonComponent from "./ButtonComponent";
import Section from "./Section";
import TestimonialCard from "./TestimonialCard";

const Breakthrough = () => {
  return (
    <Section
      id="breakthrough"
      className="!pt-1 !pb-1 bg-gradient-to-b from-color-13 from-[33%] to-black"
    >
      <div className="container relative">
        <div className="text-white min-h-screen py-24 flex flex-col items-center">
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
          {[
            {
              number: "01",
              title: "Quantum Body Mastery: Unlock Superhuman Vitality",
              content: (
                <>
                  <p className="text-medium text-white mb-4 font-open-sans">
                    You'll learn to unlock untapped reservoirs of energy and
                    vitality using Quantum techniques that will make you feel
                    younger, stronger, and healthier than ever before.
                  </p>
                  <ul className="list-disc pl-8 text-medium">
                    <li>
                      Master Dr Espen's groundbreaking Quantum Coherence
                      Protocol for rapid cellular regeneration.
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
                </>
              ),
              testimony: ` I’m a horrible gambler and my gambling was getting out
                        of control... Since I finished the event, I haven’t been
                        back to a poker machine in 11 and a half weeks. I will
                        continue to invest in myself with Dr Espen.`,
              testimonyOwner: "John",
              isOpposite: false,
            },
            {
              number: "2",
              title: "Quantum Mind Mastery: Elevate Your Consciousness",
              content: (
                <>
                  <p className="text-medium text-white mb-4 font-open-sans">
                    You'll reprogram your neural pathways and expand your
                    consciousness to unlock your full cognitive potential:
                  </p>
                  <ul className="list-disc pl-8 text-medium">
                    <li>
                      Master neuroplasticity techniques to dissolve limiting
                      beliefs and install empowering beliefs, thoughts and
                      emotions.
                    </li>
                    <li>
                      Access altered states of consciousness for enhanced
                      creativity, insight, and problem-solving.
                    </li>
                    <li>
                      Transform the vibration and feeling of STRESS into Quantum
                      focus techniques for unparalleled mental clarity and
                      decision-making ability.
                    </li>
                    <li>
                      Align your thoughts with the Quantum field for accelerated
                      manifestation.
                    </li>
                  </ul>
                </>
              ),
              testimony: `I had double surgery to repair both my hip labrals, 
                ost mobility in my hips. Thanks to Dr Espen, after 
                two and a half years I’ve recovered my mobility and feel no pain.`,
              testimonyOwner: "Jacob",
              isOpposite: true,
            },
            {
              number: "3",
              title: "Quantum Money Mastery: Manifest Financial Abundance",
              content: (
                <>
                  <p className="text-medium text-white mb-4 font-open-sans">
                    You'll align your energy with the Quantum field to attract
                    unprecedented financial opportunities and success:
                  </p>
                  <ul className="list-disc pl-8 text-medium">
                    <li>
                      Master the Quantum principles of wealth creation and
                      financial abundance.
                    </li>
                    <li>
                      Manipulate probability fields to attract business
                      opportunities and resources.
                    </li>
                    <li>
                      Turn your innovative ideas into lucrative ventures with
                      Quantum speed.
                    </li>
                    <li>
                      Connect with a network of like-minded, high-achieving
                      individuals to support your success.
                    </li>
                  </ul>
                </>
              ),
              testimony: `I just found out through the breathwork that my whole life 
              I’ve been so hard on myself I work 15 hours a day, I don’t sleep, 
              I'm always in my mind, I can’t clear, I can’t communicate with people. 
              This is the first time in my life that I’ve felt peace in my heart. 
              This is the first time I say to my inner child it’s okay.`,
              testimonyOwner: "Sam",
              isOpposite: false,
            },
          ].map(
            ({
              number,
              title,
              content,
              testimony,
              testimonyOwner,
              isOpposite,
            }) => (
              <div
                className={`rounded-md space-y-12 border-1 my-12 mb-12 
                  md:mb-24 max-w-8xl w-full border-gray-500`}
              >
                {/* Card 1 */}
                <div className="flex flex-col md:flex-row bg-black rounded-lg shadow-lg">
                  <div className={`md:w-[55%] p-15 ${isOpposite && "order-2"}`}>
                    <span className="text-yellow-300 text-3xl font-extrabold font-montserrat">
                      {number}
                    </span>
                    <h2 className="text-4xl font-semibold mt-2 mb-2 font-montserrat">
                      {title}
                    </h2>
                    {content}
                    <TestimonialCard
                      owner={testimonyOwner}
                      testimony={testimony}
                      className="mt-8"
                    />
                  </div>
                  <div
                    className={`${
                      isOpposite && "order-1"
                    } bg-break-card-img-1 hidden md:block md:w-[44%] pl-10`}
                  />
                </div>
              </div>
            )
          )}

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
