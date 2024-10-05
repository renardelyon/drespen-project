import ButtonComponent from "./ButtonComponent";
import Section from "./Section";
import TestimonialCard from "./TestimonialCard";

const Breakthrough = () => {
  const testimonialsCardContent = [
    {
      number: "01",
      title: (
        <>
          Quantum Body Mastery: <br />
          Unlock Superhuman Vitality
        </>
      ),
      content: (
        <>
          <p className=" text-white mb-4 font-open-sans">
            You'll unlock advanced Quantum Healing techniques to revitalise your
            body and increase the Energy, Frequency, and Vibration throughout
            your whole being:
          </p>
          <ul className="list-disc pl-8 ">
            <li>
              Master Dr Espen's groundbreaking Quantum Coherence Protocol for
              rapid cellular regeneration.
            </li>
            <li>
              Learn to release deep-seated emotional and physical blockages
              (from the subconscious programming) at the subatomic level.
            </li>
            <li>
              Harness the power of{" "}
              <span className="font-bold italic">Quantum DMT Breathwork</span>{" "}
              (the very same breathwork technique that saved Dr Espen’s life) to
              induce profound healing states and boost vitality and energy.
            </li>
            <li>
              Develop the ability to influence your cellular health for enhanced
              longevity and peak performance.
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
      img: "/breakthrough-img-3.png",
      qImg: "/breakthrough-q-img-1.png",
    },
    {
      number: "2",
      title: "Quantum Mind Mastery: Elevate Your Consciousness",
      content: (
        <>
          <p className=" text-white mb-4 font-open-sans">
            You'll reprogram your neural pathways and expand your consciousness
            to unlock your full cognitive potential:
          </p>
          <ul className="list-disc pl-8 ">
            <li>
              Master neuroplasticity techniques to dissolve limiting beliefs and
              install empowering beliefs, thoughts and emotions.
            </li>
            <li>
              Access altered states of consciousness for enhanced creativity,
              insight, and problem-solving.
            </li>
            <li>
              Transform the vibration and feeling of STRESS into Quantum focus
              techniques for unparalleled mental clarity and decision-making
              ability.
            </li>
            <li>
              Align your thoughts with the Quantum field for accelerated
              manifestation.
            </li>
          </ul>
        </>
      ),
      testimony: `I had double surgery to repair both my hip labrals, 
        lost mobility in my hips. Thanks to Dr Espen, after 
        two and a half years I’ve recovered my mobility and feel no pain.`,
      testimonyOwner: "Jacob",
      isOpposite: true,
      img: "/breakthrough-img-2.png",
      qImg: "/breakthrough-q-img-2.png",
    },
    {
      number: "3",
      title: "Quantum Money Mastery: Manifest Financial Abundance",
      content: (
        <>
          <p className=" text-white mb-4 font-open-sans">
            You'll align your energy with the Quantum field to attract
            unprecedented financial opportunities and success:
          </p>
          <ul className="list-disc pl-8 ">
            <li>
              Master the Quantum principles of wealth creation and financial
              abundance.
            </li>
            <li>
              Manipulate probability fields to attract business opportunities
              and resources.
            </li>
            <li>
              Turn your innovative ideas into lucrative ventures with Quantum
              speed.
            </li>
            <li>
              Connect with a network of like-minded, high-achieving individuals
              to support your success.
            </li>
          </ul>
        </>
      ),
      testimony: `I just found out through the breathwork that my whole life
       I’ve been so hard on myself I work 15 hours a day, I don’t sleep,
       I'm always in my mind, I can’t clear, I can’t communicate with people.
       This is the first time in my life that I’ve felt peace in my heart.`,
      testimonyOwner: "Sam",
      isOpposite: false,
      img: "/breakthrough-img-1.png",
      qImg: "/breakthrough-q-img-3.png",
    },
  ];
  return (
    <Section
      id="breakthrough"
      className="!pt-1 !pb-1 bg-gradient-to-b from-color-13 from-[0%] to-black to-[50%]"
    >
      <div className="container relative">
        <div className="text-white min-h-screen py-24 flex flex-col items-center">
          {/* Main Heading */}
          <div className="text-center px-4 mb-12 max-w-[72rem]">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-montserrat uppercase">
              You’ll Experience Three Life-Altering Quantum Breakthroughs
            </h1>
            <p className="text-lg md:text-2xl max-w-6xl mx-auto font-open-sans pt-6">
              At the Quantum Summit, you'll undergo profound transformations
              that will revolutionize your body, mind, and financial reality.
              Here are the extraordinary breakthroughs you'll experience:
            </p>
          </div>

          {/* Breakthrough Cards */}
          {testimonialsCardContent.map(
            (
              {
                number,
                title,
                content,
                testimony,
                testimonyOwner,
                isOpposite,
                img,
                qImg,
              },
              index
            ) => (
              <div
                key={index}
                className={`rounded-md space-y-12 border-2 my-12 mb-12 
                  md:mb-24 max-w-8xl w-full border-gray-700`}
              >
                {/* Card 1 */}
                <div className="flex flex-col md:flex-row bg-black rounded-lg shadow-lg">
                  <div className={`md:w-[55%] p-15 ${isOpposite && "order-2"}`}>
                    <span className="text-yellow-300 text-2xl md:text-3xl font-extrabold font-montserrat">
                      {number}
                    </span>
                    <h2 className="text-2xl font-semibold md:text-3xl mt-2 mb-2 font-montserrat uppercase">
                      {title}
                    </h2>
                    <span className="text-md sm:text-lg font-light">
                      {content}
                    </span>
                    <TestimonialCard
                      ownerImg={qImg}
                      owner={testimonyOwner}
                      testimony={testimony}
                      className="mt-8"
                    />
                  </div>
                  <div
                    className={`${
                      isOpposite && "order-1"
                    } bg-no-repeat bg-cover hidden md:block md:w-[44%] pl-10`}
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                </div>
              </div>
            )
          )}

          {/* CTA Section */}
          <div className="text-center mx-12 lg:mx-32 xl:mx-52 mt-12 font-open-sans">
            <p className="text-md md:text-[22px] mb-4">
              This is your opportunity to rise above limitations of the outdated
              principles and paradigms and embrace your full potential.
            </p>
            <p className="text-md md:text-[22px] mb-4">
              <b className="italic">
                "If everything is Energy, then how do you tap into the bottom of
                your potential?"
              </b>
              <br />- Dr Espen
            </p>
            <p className="text-md md:text-[22px] mb-4">
              And so then what if, by expanding your Consciousness and Energy,
              bringing coherence to the Heart and Equilibrium to the Mind, you
              could finally create the life you deserve? Are you ready to take
              the Quantum Leap?
            </p>
            <ButtonComponent className="mt-12 px-3 py-3 sm:px-[60px] sm:py-14 max-w-2xl">
              <p className="min-[376px]:py-0 text-wrap font-montserrat text-[10px] text-white font-bold lg:text-xl xl:text-[26px] min-[328px]:text-xs sm:leading-tight uppercase">
                Yes, I’m Ready to Quantum Leap My Life – Reserve My Spot!
              </p>
            </ButtonComponent>
            <p className="pt-4 text-md text-center md:text-lg text-white font-open-sans italic">
              With only 23 Diamond spots available, time is running out to
              secure your spot.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Breakthrough;
