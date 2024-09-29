import { Card, CardBody } from "@nextui-org/react";
import Section from "./Section";
import Rating from "./Rating";
import ButtonComponent from "./ButtonComponent";

const Hero = () => {
  return (
    <Section
      customPaddings="pt-36 pb-1"
      className="pt-[12rem] mt-[1.25rem] lg:mt-[5.25rem] bg-conference bg-cover "
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[100rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <Card className="mb-6 inline-block bg-gradient-to-t from-color-11 to-color-12 rounded-sm">
            <CardBody>
              <p className="font-montserrat font-extrabold text-lg uppercase text-center">
                Happening Live on October 8th, 2024 | Dee Why, NSW
              </p>
            </CardBody>
          </Card>
          <h1 className="h2 mb-6 font-montserrat uppercase font-bold text-white">
            Quantum Leap Your Life: Unlock The Keys To Extraordinary Health,
            Wealth & Consciousness in One Transformative Day
          </h1>
          <p className="body-1 max-w-[62rem] mx-auto mb-6 text-white lg:mb-8 font-montserrat font-semibold font-open-sans">
            Join{" "}
            <b>
              Dr Espen Wold-Jensen, Dr John Demartini, Kelly Gores, and David
              ‘Avocado’ Wolfe
            </b>{" "}
            at the exclusive Quantum Summit 2024, where you'll discover
            life-changing tools and strategies to break through your limits and
            achieve extraordinary success in body, mind, and money.
          </p>
          <ButtonComponent className="px-3 py-3 sm:px-7 sm:py-7">
            <p className="font-montserrat text-sm text-white font-bold sm:text-xl uppercase">
              Secure Your Life-Changing Spot Now
            </p>
          </ButtonComponent>
          <Rating />
        </div>
        <div className="relative max-w-[24rem] mx-auto md:max-w-[100rem] xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-white shadow-[0_0_15px_15px_rgba(255,255,255,0.2)]">
            <div className="relative bg-n-8 rounded-[1rem]" />
            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                allow="autoplay; encrypted-media"
                title="video"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
