import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Link,
} from "@nextui-org/react";

const SocialMediaSection = () => {
  const cards = [
    {
      title: "TUNE IN TO THE DR ESPEN PODCAST",
      description:
        "Get insightful discussions on Quantum healing, personal growth, and unlocking your full potential DR ESPEN PODCAST.",
      buttonText: "LISTEN NOW",
      icon: "🎧", // Replace with your desired icon (e.g., podcast icon)
    },
    {
      title: "JOIN 32K+ OTHER GROWTH SEEKERS",
      description:
        "FOLLOW DR ESPEN and stay updated on our latest events and gain insights into Quantum Healing and Peak Performance.",
      buttonText: "FOLLOW DR ESPEN",
      icon: "📘", // Replace with your desired icon (e.g., Facebook icon)
    },
    {
      title: "JOIN 144K+ OTHER QUANTUM ENTHUSIASTS",
      description:
        "FOLLOW DR ESPEN for daily inspiration, life changing advice, and exclusive behind-the-scenes event updates.",
      buttonText: "FOLLOW DR ESPEN",
      icon: "📸", // Replace with your desired icon (e.g., Instagram icon)
    },
    {
      title: "CONNECT WITH DR ESPEN & OTHERS ALIKE",
      description:
        "CONNECT WITH DR ESPEN to learn the Quantum Principles that fuel personal growth and business success.",
      buttonText: "FOLLOW DR ESPEN",
      icon: "🔗", // Replace with your desired icon (e.g., LinkedIn icon)
    },
    {
      title: "JOIN 350K+ OTHER EMAIL SUBSCRIBERS",
      description:
        "SIGN UP AND GET exclusive content on personal mastery, Quantum healing, and business transformation.",
      buttonText: "SUBSCRIBE NOW",
      icon: "📧", // Replace with your desired icon (e.g., Email icon)
    },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-900 to-black py-16">
      <div className="text-center text-white mb-10">
        <h1 className="text-4xl font-bold">AMPLIFY YOUR QUANTUM EXPERIENCE</h1>
        <p className="text-lg mt-4">
          Get a taste of the transformation that awaits you at the Quantum
          Summit:
        </p>
      </div>

      <div className="flex flex-wrap justify-center space-x-4 mx-auto max-w-8xl">
        {cards.map(() => (
          //   <div
          //     key={index}
          //     className="bg-gradient-to-b from-purple-700 to-black p-6 rounded-lg text-center text-white max-w-[288px] mb-8 shadow-lg"
          //   >
          //     <div className="text-5xl mb-4">{card.icon}</div>
          //     <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
          //     <p className="text-sm mb-6">{card.description}</p>
          //     <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-bold hover:bg-yellow-500 transition">
          //       {card.buttonText}
          //     </button>
          //   </div>
          <Card className="rounded-lg text-center text-white max-w-[288px] mb-8">
            <CardHeader className="flex items-center justify-center bg-[#42358F] rounded-t-md">
              <p className="font-montserrat text-center">
                <b>TUNE IN</b> TO THE <br></br> DR ESPEN PODCAST
              </p>
            </CardHeader>
            <Divider />
            <CardBody className="bg-gradient-b from-[#31286D] to-black">
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link showAnchorIcon href="https://github.com/nextui-org/nextui">
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center text-white mt-12">
        <h2 className="text-xl font-bold">
          START YOUR JOURNEY NOW AND ARRIVE AT THE QUANTUM SUMMIT PRIMED FOR
          MAXIMUM TRANSFORMATION!
        </h2>
      </div>
    </div>
  );
};

export default SocialMediaSection;
