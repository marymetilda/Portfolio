import React from "react";
import BackButton from "../components/BackButton";

function About() {
  return (
    <div className="relative">
      <div className="w-full flex justify-center items-center pt-8">
        <BackButton />
      </div>
      <h1 className="text-white-1 text-[36px] font-bold fixed left-8 top-8 z-30">
        HR
      </h1>
      <div className="p-8 border-solid border-2 border-white w-[50vw] flex items-center justify-center absolute top-44 left-[9vw] opacity-100 z-10 backdrop-blur-[4px]">
        <p className="text-white text-[24px]">
          I'm a Software Developer at Vonnue Innovations. I adore designing
          user-friendly websites that are both simple and elegant. I consider
          myself to be a lifelong learner. I'm proficient in data structures and
          algorithms.
          <br />
          <br />
          I'm also interested in Machine Learning, and I adore experimenting
          with new ideas and putting together fantastic projects. I've always
          been interested in robotics and built around seven of them when I was
          15 years old.
          <br />
          <br />
          I'm a Crypto junkie and a Pianist contrasting right ?
          <br />
          I've been fascinated by technology since I was a child and grown up as
          a Tech Savvy
        </p>
      </div>
      <h1 className="text-grey-1 text-[7vw] font-bold fixed z-0 top-[7%] left-[4%]">
        ABOUT
      </h1>
    </div>
  );
}

export default About;
