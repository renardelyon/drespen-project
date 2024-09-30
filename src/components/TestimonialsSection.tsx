import ButtonComponent from "./ButtonComponent";
import Section from "./Section";

const Testimonials = () => {
  const testimonial = {
    video: "src/assets/video-img-1.png",
    quote: (
      <>
        The energy and the vibe and the space that Espen and his team creates is
        just next level jkodjs aoijsoa idjosai djosiadjds sdsdsd sdsds sdsd
      </>
    ),
    speaker: "Darce",
    headline: <>“This event has been awesome!“</>,
  };

  return (
    <Section
      customPaddings="pt-36 pb-1 bg-gradient-to-t from-color-14 to-color-15"
      className="pt-[12rem] "
      id="testimonials"
    >
      <div className="container relative">
        <div className="text-black">
          {/* Header Section */}
          <div className="text-center mb-12 px-4  ">
            <h1 className="text-4xl font-bold max-w-xl mx-auto mb-4 font-montserrat">
              WITNESS THE FULL POWER OF QUANTUM LEAPING
            </h1>
            <p className="text-lg max-w-2xl mx-auto font-open-sans">
              See firsthand how thousands have experienced life-changing
              breakthroughs through the insights and expertise of our
              world-class mentors:
            </p>
          </div>

          {/* Video Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg">
                <div className="relative">
                  {/* Video Placeholder */}
                  <img
                    src={testimonial.video}
                    alt="Video Placeholder"
                    className="w-full rounded-t-md"
                  />
                  <div className="absolute inset-0 flex justify-center items-center"></div>
                </div>
                {/* Quote and Speaker */}
                <div className="mt-4 font-montserrat p-6 pt-4">
                  <p className="text-2xl font-bold">{testimonial.headline}</p>
                  <p className="text-lg line-clamp-3">{testimonial.quote}</p>
                  <a className="text-md font-bold text-red-500 mt-2 hover:underline cursor-pointer ">
                    READ MORE
                  </a>
                  <div className="flex justify-end pt-10">
                    <p className="text-xl jusify-self-end font-bold mt-2">
                      {testimonial.speaker}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mx-32 md:mx-52 mt-12 font-open-sans">
            <p className="text-4xl mb-4 font-bold font-montserrat uppercase">
              Feel the power yourself
            </p>
            <p className="text-xl max-w-xl mx-auto">
              Take control of your story and step into your full potential
            </p>
            <ButtonComponent className="mt-8 px-3 py-4 sm:px-20 sm:py-10">
              <p className="font-montserrat text-sm text-white font-bold sm:text-xl uppercase">
                Yes, I’m Ready to Quantum <br />
                Leap My Life – Reserve My Spot!
              </p>
            </ButtonComponent>
            <p className="text-sm mt-4 italic">
              With only 23 Diamond spots available, time is running out to
              reserve your spot.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
