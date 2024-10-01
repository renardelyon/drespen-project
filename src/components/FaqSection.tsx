import { Accordion, AccordionItem } from "@nextui-org/react";
import Section from "./Section";
import { FaPlus } from "react-icons/fa6";
import { PiLineVerticalBold } from "react-icons/pi";

const FAQSection = () => {
  // FAQ data
  const faqData = [
    {
      question: "What should I bring to the event?",
      answer:
        "Bring a notebook and pen for taking notes, a water bottle to stay hydrated, and any personal items you may need throughout the day. If you’re participating in physical activities like breathwork, consider bringing a yoga mat or comfortable cushion. It’s also a good idea to have a light jacket or sweater in case the venue is cool.",
    },
    {
      question: "Is there a dress code?",
      answer:
        "The recommended dress code is business casual. Comfort is key, especially since you’ll be participating in various activities throughout the day, including meditation and breathwork sessions. Feel free to wear comfortable clothes that allow for movement and relaxation.",
    },
    {
      question:
        "Can I attend this event if I'm not a business owner or entrepreneur?",
      answer:
        "Absolutely! While the event covers business strategies and personal growth, the principles shared can benefit anyone seeking holistic development and personal transformation. The summit is designed for high achievers, entrepreneurs, professionals, and anyone looking to elevate their life and mindset.",
    },
    {
      question: "Will there be networking opportunities?",
      answer: "",
    },
    {
      question: "Are meals and refreshments provided?",
      answer: "",
    },
    {
      question: "Can I bring a guest?",
      answer: "",
    },
    {
      question: "How will the event benefit my business specifically?",
      answer: "",
    },
    {
      question: "Is the event suitable for people with disabilities?",
      answer: "",
    },
    {
      question: "Will the event be recorded?",
      answer: "",
    },
  ];

  return (
    <Section
      id="faq"
      className="bg-gradient-to-b from-[#FFFCF0] to-[#FFF5C9] !pt-12"
    >
      <div className="py-12 text-black">
        {/* Header Section */}
        <div className="text-center mb-8 px-4 font-montserrat">
          <h1 className="font-bold text-4xl md:text-5xl">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-2xl mt-5">Your questions, answered</p>
        </div>

        {/* FAQ Container */}
        <div className="max-w-6xl mx-auto bg-[#FFFCF0] rounded-lg shadow-lg px-24 py-16">
          {faqData.map((faq, index) => (
            <Accordion selectionMode="multiple" showDivider>
              <AccordionItem
                className="border-b-2 border-gray-400 border-opacity-50 font-open-sans"
                key={index}
                aria-label={faq.question}
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <PiLineVerticalBold size={20} color="black" />
                  ) : (
                    <FaPlus size={20} color="black" />
                  )
                }
                title={
                  <p className="font-montserrat font-bold text-2xl">
                    {faq.question}
                  </p>
                }
              >
                <p className="max-w-2xl pb-5 text-lg">{faq.answer}</p>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {/* Footer Contact Section */}
        <div className="text-center mt-12 max-w-6xl mx-auto bg-[#FFFCF0] rounded-lg shadow-lg py-6 font-montserrat">
          <p className="text-lg">Still have questions? We’re here to help!</p>
          <p className="font-bold text-xl">
            Contact our support team at <span>support@drespen.com</span>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;
