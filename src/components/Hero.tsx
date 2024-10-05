import { Card, CardBody } from "@nextui-org/react";
import Section from "./Section";
import Rating from "./Rating";
import ButtonComponent from "./ButtonComponent";
import FeatureImgOne from "../assets/FeatureImgOne";
import Marquee from "react-fast-marquee";
import FeatureImgTwo from "../assets/FeatureImgTwo";
import FeatureImgThree from "../assets/FeatureImgThree";
import FeatureImgFour from "../assets/FeatureImgFour";
import FeatureImgFive from "../assets/FeatureImgFive";
import FeatureImgSix from "../assets/FeatureImgSix";
import FeatureImgSeven from "../assets/FeatureImgSeven";
import FeatureImgEight from "../assets/FeatureImgEight";
import FeatureImgNine from "../assets/FeatureImgNine";
import FeatureImgTen from "../assets/FeatureImgTen";

const Hero = () => {
  return (
    <Section
      customPaddings="pt-36 pb-1"
      className="pt-[12rem] mt-[1.25rem] lg:mt-[5.25rem] pb-10 bg-conference bg-cover "
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[100rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <Card className="px-2 py-1 mb-6 inline-block bg-gradient-to-t from-color-11 to-color-12 rounded-md">
            <CardBody>
              <p className="font-montserrat font-bold text-md md:text-xl uppercase text-center">
                Happening Live on October 8th, 2024 | Dee Why, NSW
              </p>
            </CardBody>
          </Card>
          <h1 className="h2 leading-tight md:text-5xl mx-5 mb-6 font-montserrat uppercase font-bold text-white">
            Quantum Leap Your Life: Unlock The Keys To Extraordinary Health,
            Wealth & Consciousness in One Transformative Day
          </h1>
          <p className="body-1 max-w-[62rem] mx-auto mb-6 text-white lg:mb-8 font-normal font-open-sans">
            Join <b>Dr. Espen Wold-Jensen</b> and <b>Dr. John Demartini</b> in
            person, with virtual appearances by <b>Kelly Gores</b> and{" "}
            <b>David 'Avocado' Wolfe</b> at the exclusive Quantum Summit 2024,
            where you'll discover life-changing tools and strategies to break
            through your limits and achieve extraordinary success in body, mind,
            and money.
          </p>
          <ButtonComponent className="px-3 py-3 md:px-6 md:py-8 lg:px-9 lg:py-12">
            <p className="font-montserrat text-[10px] min-[328px]:text-sm text-white font-bold lg:text-xl xl:text-[28px] uppercase">
              Secure Your Life-Changing Spot Now
            </p>
          </ButtonComponent>
          <Rating />
        </div>
        <div className="relative max-w-[24rem] mx-auto md:max-w-6xl xl:mb-24 pb-10">
          <div className="relative z-1 p-0.5 rounded-2xl bg-white">
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
        <div className="text-center text-white mb-4">
          <h2 className="text-lg md:text:xl lg:text-2xl font-semibold font-montserrat">
            AS FEATURED IN
          </h2>
        </div>
        <div
          className={`flex justify-center items-center space-x-6 mx-auto 
          xl:max-w-7xl max-w-6xl bg-white py-6 rounded-3xl shadow-lg my-6`}
        >
          <Marquee
            pauseOnHover
            speed={75}
            gradient
            gradientWidth={300}
            className="marquee-gap"
          >
            <div>
              <FeatureImgOne />
            </div>
            <div>
              <FeatureImgTwo />
            </div>
            <div>
              <FeatureImgThree />
            </div>
            <div>
              <FeatureImgFour />
            </div>
            <div>
              <FeatureImgFive />
            </div>
            <div>
              <FeatureImgSix />
            </div>
            <div>
              <FeatureImgSeven />
            </div>
            <div>
              <FeatureImgEight />
            </div>
            <div>
              <FeatureImgNine />
            </div>
            <div>
              <FeatureImgTen />
            </div>
          </Marquee>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
