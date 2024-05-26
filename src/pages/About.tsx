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
    <div className="w-screen rounded-md  h-screen overflow-hidden">
      <Vortex
        rangeSpeed={1}
        backgroundColor="black"
        rangeY={800}
        particleCount={200}
        baseHue={170}
        className="flex items-center flex-col justify-center w-full h-full"
      >
        <div className="h-full w-full relative">
          <div className="fixed top-10 w-full flex items-center justify-center z-40 opacity-50">
            <BackButton handleBackClick={handleBackClick} />
          </div>
          <div className="absolute top-36 sm:top-44 xl:top-48 left-[9vw] opacity-100 z-20 backdrop-blur-[4px] transition duration-300 ease-in-out animate-flash-top">
            <BackgroundGradient className="p-4 md:p-8 w-[75vw] md:w-[50vw] h-fit flex items-center justify-center">
              <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] whitespace-pre-wrap overscroll-y-auto">
                <TextGenerateEffect words={aboutData.description} />
              </p>
            </BackgroundGradient>
          </div>

          <h1 className="text-grey-1 text-[18vw] md:text-[7vw] font-bold fixed z-10 top-[11%] left-[5%]">
            {aboutData.title}
          </h1>
          <img
            className="fixed right-[5vw] top-16 md:top-40 z-40 w-[32vw] h-auto transition duration-300 ease-in-out hover:scale-125 animate-left"
            src={codingImage}
            alt="title"
          />
        </div>
      </Vortex>
    </div>
  );
}

export default About;
