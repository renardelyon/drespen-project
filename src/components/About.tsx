import Checked from "../assets/Checked";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" className="!pt-10 !pb-1">
      <div className="container relative z-2">
        <div className="relative z-1 max-w-[80rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] xl:pl-24">
          <div className="bg-black text-white p-8">
            {/* Header */}
            <div className="text-left mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold font-montserrat uppercase">
                Are You Feeling Stuck in a Life That’s Less Than You Deserve?
              </h1>
            </div>
            {/* Checkmark List */}
            <div className="my-8 text-lg md:text-2xl space-y-4">
              <p className="font-bold text-left font-montserrat uppercase">
                Do you wake up each day feeling:
              </p>
              <ul className="space-y-2 list-none text-lg md:text-2xl text-left font-open-sans">
                {[
                  "Drained and directionless, instead of energised and purposeful?",
                  "Experiencing self-doubt, rather than confidence and empowerment?",
                  "Low energy and deflated rather than powerful and strong?",
                  "Stressed about money, instead of feeling financially abundant?",
                  "Unfulfilled in your relationships, career, or business?",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start md:items-center space-x-2 pb-2"
                  >
                    <Checked />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left text-xl md:text-[26px] flex-col justify-between h-full mb-10 max-w-4xl font-montserrat">
              <p className=" pb-3 font-bold uppercase">You're not alone.</p>
              <p className="text-lg md:text-2xl font-normal">
                Millions find themselves caught in this cycle, using only 0.01%
                of their true potential. Despite our best efforts, the life
                we've always wanted remains frustratingly out of reach.
              </p>
            </div>
            <div className="relative text-left text-lg md:text-[32px] leading-tight space-x-4 font-montserrat max-w-4xl">
              <div className="flex-col justify-between border-l-8 border-l-yellow-300 h-full pl-7">
                <p className=" pb-5">
                  But what if there was a way to access the other 99.99% of our
                  untapped “Quantum” potential?
                </p>
                <p>
                  To completely rewire your reality at the Quantum level across
                  all eight dimensions of your life and business?
                </p>
              </div>
            </div>

            {/* Introduction Section */}
            <div className="mt-12">
              <h2 className="text-3xl md:text-[42px] font-bold text-left font-montserrat mb-12">
                INTRODUCING THE QUANTUM SUMMIT
              </h2>
              <p className="text-lg md:text-2xl my-4 text-left font-open-sans max-w-5xl">
                The Quantum Summit, founded by Dr Espen Wold Jensen, is a
                transformative, consciousness-expanding event that has already
                impacted over 250,000 lives around the world. With roots in
                cutting-edge science, applied with ancient spiritual principles,
                this summit combines the power of Quantum breathwork and
                transformational breakthroughs that go beyond traditional
                seminars to offer a truly unique experience.
                <br />
                <br />
                Whether you're looking to elevate your health, accelerate your
                business success, or achieve deep personal fulfilment, the
                Quantum Summit will show you how to tap into your untapped
                potential.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Image Grid */}
      <div className="bg-grid-conf w-full h-[52rem] bg-cover xl:bg-contain bg-no-repeat" />
      <div className="container relative z-2 max-w-[80rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <div className="bg-black text-white p-8">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center">
            {/* Story Section */}
            <div className="mt-8">
              <h2 className="leading-tight text-3xl md:text-[42px] font-bold text-left uppercase font-montserrat mb-7">
                From Tragedy to{" "}
                <span className="text-[#FFE054]">Transformation</span>:{" "}
                <br></br>Dr Espen's Journey
              </h2>

              <div className="text-lg md:text-2xl my-4 text-left font-open-sans">
                <p>
                  In 2006, Dr Espen's life was forever changed by a near-fatal
                  motorcycle accident. With two broken legs and a systemic
                  life-threatening infection, he was told he might never walk
                  again, let alone survive. Refusing to give in to despair, Dr
                  Espen embarked on a journey that combined ancient healing
                  practices with Quantum science, epigenetics, and the power of
                  consciousness.
                </p>
                {/* Image Section */}
                <div className="w-full my-10">
                  <img
                    src="public/about-img-dying-1.png"
                    alt="Dr Espen tragedy to transformation"
                    className="rounded-lg"
                  />
                </div>
                <p>
                  This journey transformed him into a global leader in Quantum
                  Healing and a four-time seven-figure entrepreneur, helping
                  thousands revolutionise their lives and businesses.
                  <br />
                  <br />
                  Now, with his two decade-long mission, Dr Espen and The
                  Quantum Academy bring you the world’s leading pioneers and
                  experts in healing, transformation and leadership for the
                  Quantum Summit, a life-changing event immersion that fuses
                  ancient wisdom with cutting-edge science to help you realise
                  your full potential in one very transformational day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
