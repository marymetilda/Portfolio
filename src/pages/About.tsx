import React from "react";
import BackButton from "../components/BackButton";
import Particle from "../components/Particle";

import codingImage from "../assets/codingWithThinking.png";
import { useNavigate } from "react-router-dom";
import { Data } from "../Data/data";

const aboutData = Data.about;

function About() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-full">
      <div className="relative">
        <div className="fixed top-10 w-full flex items-center justify-center z-40 opacity-50">
          <BackButton handleBackClick={handleBackClick} />
        </div>
        <div className="p-4 md:p-8 border-solid border-2 border-white w-[75vw] md:w-[50vw] h-fit flex items-center justify-center absolute top-36 sm:top-52 md:top-56 left-[9vw] opacity-100 z-20 backdrop-blur-[4px] transition duration-300 ease-in-out hover:scale-110 animate-flash-top">
          <p className="text-white text-[18px] md:text-[24px]">
            {aboutData.primaryDescription}
            <br />
            <br />
            {aboutData.secondaryDescription}
            <br />
            <br />
            {aboutData.tertiaryDescription}
            <br />
            {aboutData.quinaryDescription}
          </p>
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
      <Particle
        onHoverInteractivity={false}
        shouldEnableLinks={false}
        particleColor="#ffffff"
        linkColor="#ffffff"
        bgColor="#004040"
        minParticleSize={0.25}
        maxParticleSize={2}
      />
    </div>
  );
}

export default About;
