import React from "react";
import { useNavigate } from "react-router-dom";

import WhiteBgCard from "../components/WhiteBgCard";
import Particle from "../components/Particle";
import BackButton from "../components/BackButton";
import SkillButton from "../components/SkillButton";

import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/cssLogo.png";
import jsLogo from "../assets/jsLogo.png";
import tsLogo from "../assets/tsLogo.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import nextLogo from "../assets/next.svg";
import reduxLogo from "../assets/redux.png";

const skillList = [
  [
    {
      skill: "HTML",
      darkLine: 5,
      skillLogo: HtmlLogo,
    },
    {
      skill: "CSS",
      darkLine: 5,
      skillLogo: CssLogo,
    },
    {
      skill: "JavaScript",
      darkLine: 5,
      skillLogo: jsLogo,
    },
    {
      skill: "TypeScript",
      darkLine: 5,
      skillLogo: tsLogo,
    },
    {
      skill: "React",
      darkLine: 5,
      skillLogo: reactLogo,
    },
  ],
  [
    {
      skill: "Next js",
      darkLine: 3,
      skillLogo: nextLogo,
    },
    {
      skill: "Tailwind",
      darkLine: 5,
      skillLogo: tailwindLogo,
    },
    {
      skill: "Redux",
      darkLine: 4,
      skillLogo: reduxLogo,
    },
    {
      skill: "Tailwind",
      darkLine: 5,
      skillLogo: tailwindLogo,
    },
  ],
];

function Skills() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  const computerSvg = (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="laptop-code"
      className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      width="40"
      height="40"
    >
      <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
    </svg>
  );

  const paintSvg = (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="palette"
      className="prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="40"
      height="40"
    >
      <path d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
    </svg>
  );

  return (
    <div className="h-screen w-screen bg-linear-blue">
      <div className="h-full w-full flex items-center justify-center gap-32 relative">
        <div className="absolute top-10 w-full flex items-center justify-center z-40 opacity-50">
          <BackButton handleBackClick={handleBackClick} />
        </div>
        <WhiteBgCard>
          <div className="flex font-bold text-[25px] text-[#004040] group-hover:text-white justify-center gap-4">
            {computerSvg}
            <p>Software Developer</p>
          </div>
          <p className="text-[18px] text-[#004040] group-hover:text-white py-2">
            I enjoy writing clean code and creating useful products.
          </p>
          <p className="text-[18px] text-[#004040] group-hover:text-white py-2">
            It's fun for me to bring new concepts to life. I consider myself
            fortunate to be a frontend developer because my work has a direct
            impact on the user's life.
          </p>
          <div className="flex flex-col gap-3">
            {skillList[1].map((skillItem) => {
              return (
                <SkillButton
                  skillLogo={skillItem.skillLogo}
                  skill={skillItem.skill}
                  darkLines={skillItem.darkLine}
                />
              );
            })}
          </div>
        </WhiteBgCard>
        <WhiteBgCard>
          <div className="">
            <div className="flex font-bold text-[25px] text-[#004040] group-hover:text-white justify-center gap-4 pb-8">
              {paintSvg}
              <p> Frontend Developer</p>
            </div>
            <div className="flex flex-col gap-3">
              {skillList[0].map((skillItem) => {
                return (
                  <SkillButton
                    skillLogo={skillItem.skillLogo}
                    skill={skillItem.skill}
                    darkLines={skillItem.darkLine}
                  />
                );
              })}
            </div>
            {/* <div className="text-[#004040] group-hover:text-white">
              <strong>Skills</strong> <br />
              <p>
                Html, Css, Js, Handlebars, React, Redux, Sass, Bootstrap,
                Firebase
              </p>
            </div>
            <div className=" text-[#004040] group-hover:text-white">
              <strong>Tools</strong>
              <br />
              <p>VScode, Figma, Github, AdobeXD etc.</p>
            </div> */}
          </div>
        </WhiteBgCard>
        <div className="fixed bottom-0 right-[35%] text-black text-opacity-20 text-[10vw] font-bold">
          Skills
        </div>
      </div>
      <Particle
        onHoverInteractivity
        shouldEnableLinks
        particleColor="#004040"
        linkColor="#004040"
        bgColor="tansparent"
        minParticleSize={1.5}
        maxParticleSize={3}
      />
    </div>
  );
}

export default Skills;
