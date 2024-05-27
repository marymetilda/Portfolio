import React from "react";
import { Vortex } from "../components/Vortex";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { Data } from "../Data/data";
import codingImage from "../assets/codingWithThinking.png";
import { BackgroundGradient } from "../components/BackgroundGradient";
import { TextGenerateEffect } from "../components/TextGenerateEffects";

const aboutData = Data.about;

function About() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="relative w-screen h-screen p-2 bg-linear-violet">
      <div className="w-full h-full overflow-hidden">
        <Vortex
          rangeSpeed={1}
          backgroundColor="black"
          rangeY={800}
          particleCount={200}
          baseHue={170}
          className="flex items-center flex-col justify-center w-full h-full"
        >
          <div className="fixed top-10 w-full flex items-center justify-end pr-4 md:pr-8 z-40 opacity-50">
            <BackButton handleBackClick={handleBackClick} />
          </div>
          <div className="h-full w-full relative flex items-center justify-center md:justify-start ml-0 md:ml-48 mt-10 px-8 md:px-0">
            <div className="w-full md:w-1/2 opacity-100 z-20 backdrop-blur-[4px] transition duration-300 ease-in-out animate-flash-top">
              <BackgroundGradient className="p-4 md:p-8 w-full h-fit flex items-center justify-center">
                <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] whitespace-pre-wrap w-full">
                  <TextGenerateEffect words={aboutData.description} />
                </p>
              </BackgroundGradient>
              <img
                className="md:hidden fixed bottom-full right-0 z-40 w-[32vw] h-auto transition duration-300 ease-in-out hover:scale-125 animate-left"
                src={codingImage}
                alt="title"
              />
            </div>

            <h1 className="text-grey-1 md:text-9xl text-7xl font-bold fixed z-10 top-10 lg:top-[11%] left-[5%]">
              {aboutData.title}
            </h1>
            <img
              className="hidden md:block fixed right-[5vw] top-16 md:top-32 z-40 w-[32vw] h-auto transition duration-300 ease-in-out hover:scale-125 animate-left"
              src={codingImage}
              alt="title"
            />
          </div>
        </Vortex>
      </div>
    </div>
  );
}

export default About;
