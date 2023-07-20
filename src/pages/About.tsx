import React from "react";
import BackButton from "../components/BackButton";
import Particle from "../components/Particle";

import codingImage from "../assets/codingWithThinking.png";

function About() {
  return (
    <div className="w-full h-full">
      <div className="relative">
        <div className="absolute top-10 w-full flex items-center justify-center z-40 opacity-50">
          <BackButton />
        </div>
        <div className="p-8 border-solid border-2 border-white w-[50vw] h-fit flex items-center justify-center absolute top-56 left-[9vw] opacity-100 z-20 backdrop-blur-[4px] transition duration-300 ease-in-out hover:scale-110 animate-flash-top">
          <p className="text-white text-[24px]">
            I'm a Software Developer at Vonnue Innovations. I adore designing
            user-friendly websites that are both simple and elegant. I consider
            myself to be a lifelong learner. I'm proficient in data structures
            and algorithms.
            <br />
            <br />
            I'm also interested in Machine Learning, and I adore experimenting
            with new ideas and putting together fantastic projects. I've always
            been interested in robotics and built around seven of them when I
            was 15 years old.
            <br />
            <br />
            I'm a Crypto junkie and a Pianist contrasting right ?
            <br />
            I've been fascinated by technology since I was a child and grown up
            as a Tech Savvy
          </p>
        </div>
        <h1 className="text-grey-1 text-[7vw] font-bold fixed z-10 top-[11%] left-[5%]">
          ABOUT
        </h1>
        <img
          className="absolute right-[5vw] top-40 z-40 w-[32vw] h-auto transition duration-300 ease-in-out hover:scale-125 animate-left"
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
