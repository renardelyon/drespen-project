import Section from "./Section";

const ScheduleSection = () => {
  return (
    <Section id="admission" className="bg-yellow-50 !pt-10 !pb-10">
      <div className="container relative">
        <div className="pt-12 pb-0 text-black">
          {/* Heading Section */}
          <div className="text-center mb-12 px-4">
            <h1 className="text:4xl md:text-5xl font-bold mb-4 font-montserrat">
              HERE'S WHAT YOU CAN EXPECT
            </h1>
            <p className="text-lg max-w-2xl mx-auto font-open-sans">
              A day of quantum leaps in health, wealth, and mental mastery.
            </p>
          </div>

          {/* Morning Section */}
          {[
            {
              session: "Morning: Unlocking your quantum potential",
              bgColor: "bg-[#D39612]",
              schedule: [
                {
                  time: "9:00 AM - 10:30 AM",
                  title: "Quantum Mind Mastery with Dr Espen",
                  desc: (
                    <>
                      {" "}
                      Dive deep into the hidden realms of your subconscious with
                      Dr Espen. Learn powerful techniques to reprogram limiting
                      beliefs and install success patterns that will catapult
                      you toward your dreams.
                    </>
                  ),
                },
                {
                  time: "10:30 AM - 11:00 AM",
                  title: "Integration Break",
                  desc: (
                    <>
                      {" "}
                      Reflect, connect, and recharge. Light refreshments
                      provided to fuel your transformation journey.
                    </>
                  ),
                },
                {
                  time: "11:00 AM - 12:30 PM",
                  title: "DMT Breathwork Experience",
                  desc: (
                    <>
                      {" "}
                      Prepare for a consciousness-altering journey guided by Dr
                      Espen. This revolutionary breathwork session will help
                      you:
                      <br />
                      <ul className="list-disc pl-5">
                        <li>Release years of emotional baggage in minutes</li>
                        <li>
                          Access profound states of clarity and insight Elevate
                          your
                        </li>
                        <li>Elevate your consciousness to new heights</li>
                      </ul>
                    </>
                  ),
                },
              ],
            },
            {
              session: "Afternoon: Mastering Your Quantum Reality",
              bgColor: "bg-[#FF5146]",
              schedule: [
                {
                  time: "1:30 PM - 3:00 PM",
                  title: "The Quantum Wheel of Life Mastery",
                  desc: (
                    <>
                      {" "}
                      Join Dr John Demartini to discover the secret to total
                      life balance. You'll learn how to:
                      <br />
                      <ul className="list-disc pl-5">
                        <li>
                          Align your finances, health, relationships, and
                          purpose
                        </li>
                        <li>
                          Identify and eliminate hidden imbalances holding you
                          back
                        </li>
                        <li>
                          {" "}
                          Create a personalised roadmap for holistic success
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  time: "3:00 PM - 3:30 PM",
                  title: "Quantum Integration Break",
                  desc: (
                    <>
                      Absorb the powerful insights gained and connect with
                      fellow quantum pioneers.
                    </>
                  ),
                },
                {
                  time: "3:30 PM - 5:00 PM",
                  title: "VIP Exclusive Q&A Session",
                  desc: (
                    <>
                      For VIP ticket holders: Engage directly with Dr Espen and
                      Dr John Demartini. Get personalised insights to accelerate
                      your transformation.
                    </>
                  ),
                },
                {
                  time: "3:30 PM - 5:00 PM",
                  title: "Quantum Living Workshop (General Admission)",
                  desc: (
                    <>
                      For General Admission: Hands-on workshop to integrate
                      quantum principles into your daily life. Learn practical
                      tools for sustained success and ongoing transformation.
                    </>
                  ),
                },
              ],
            },
            {
              session: "Evening: Amplifying Your Transformation",
              bgColor: "bg-[#000132]",
              schedule: [
                {
                  time: "5:30 PM - 7:00 PM",
                  title: "Building Your Quantum Network",
                  desc: (
                    <>
                      Dive deep into the hidden realms of your subconscious with
                      Dr Espen. Learn powerful techniques to reprogram limiting
                      beliefs and install success patterns that will catapult
                      you towards your dreams.
                    </>
                  ),
                },
                {
                  time: "7:00 PM - 8:00 PM",
                  title: "Quantum Leap Closing Ceremony",
                  desc: (
                    <>
                      Reflect, connect, and recharge. Light refreshments
                      provided to fuel your transformation journey.
                    </>
                  ),
                },
              ],
            },
          ].map(({ bgColor, schedule, session }) => (
            <div className="max-w-4xl mx-auto mb-8 font-montserrat">
              <div
                className={`${bgColor} relative text-white py-4 px-6 rounded-lg font-semibold text-lg`}
              >
                {session}
                {/* Overlay for image */}
                {/* <div className="absolute inset-0 bg-gradient-to-b bg-black rounded-lg"></div> */}
              </div>
              <div className="p-4 rounded-b-lg space-y-4">
                {schedule.map(({ desc, time, title }) => (
                  <div className="grid grid-cols-[4fr_1fr_14fr] gap-0 items-start">
                    <p className="font-bold">{time}</p>
                    <div
                      className={`border-1 bg-black h-full w-1 justify-self-center `}
                    />
                    <div>
                      {" "}
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className=" pt-4">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ScheduleSection;
