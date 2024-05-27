"use client";
import React from "react";

import { AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "../components/CanvasRevealEffect";
import SkillButton from "../components/SkillButton";
import WhiteBgCard from "../components/WhiteBgCard";
import BackButton from "../components/BackButton";

import { Data } from "../Data/data";
import { useNavigate } from "react-router-dom";

const skillData = Data.skills;

function Sample() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative">
      <div className="h-full w-full flex items-start justify-center gap-24 lg:gap-28 xl:gap-32 relative py-20">
        <div className="absolute top-10 w-full flex items-center justify-end pr-4 sm:pr-0 sm:justify-center z-40 opacity-50">
          <BackButton handleBackClick={handleBackClick} />
        </div>
        <div className="w-fit h-full sm:block hidden">
          <WhiteBgCard>
            <p className="text-transparent text-center font-bold text-[25px] bg-clip-text bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-300 via-sky-300 to-indigo-300 pb-8">
              {skillData.skillList.leftCard.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {skillData.skillList.leftCard.skills.map((skillItem) => {
                return (
                  <SkillButton
                    key={skillItem.skill}
                    skillLogo={skillItem.skillLogo}
                    skill={skillItem.skill}
                    darkLines={skillItem.darkLine}
                  />
                );
              })}
            </div>
          </WhiteBgCard>
        </div>
        <div className="w-fit h-full sm:block hidden">
          <WhiteBgCard>
            <div className="">
              <p className="text-transparent text-center font-bold text-[25px] bg-clip-text bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-300 via-sky-300 to-indigo-300 pb-8">
                {skillData.skillList.rightCard.title}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {skillData.skillList.rightCard.skills.map((skillItem) => {
                  return (
                    <SkillButton
                      key={skillItem.skill}
                      skillLogo={skillItem.skillLogo}
                      skill={skillItem.skill}
                      darkLines={skillItem.darkLine}
                    />
                  );
                })}
              </div>
            </div>
          </WhiteBgCard>
        </div>
        <div className="sm:hidden">
          <WhiteBgCard>
            <div className="">
              <p className="text-transparent text-center font-bold text-[20px] bg-clip-text bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-300 via-sky-300 to-indigo-300 pb-4">
                I Love Working with...
              </p>
              <div className="w-full flex flex-col gap-4 max-h-[600px] overflow-y-scroll  scrollbar-hide">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {skillData.skillList.leftCard.skills.map((skillItem) => {
                    return (
                      <SkillButton
                        skillLogo={skillItem.skillLogo}
                        skill={skillItem.skill}
                        darkLines={skillItem.darkLine}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {skillData.skillList.rightCard.skills.map((skillItem) => {
                    return (
                      <SkillButton
                        skillLogo={skillItem.skillLogo}
                        skill={skillItem.skill}
                        darkLines={skillItem.darkLine}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </WhiteBgCard>
        </div>
        <div className="fixed top-0 left-4 right-[35%] text-white text-opacity-20 text-[25vw] sm:text-[10vw] font-bold">
          {skillData.title}
        </div>
      </div>
      <AnimatePresence>
        <CanvasRevealEffect
          showGradient={false}
          animationSpeed={5}
          containerClassName="bg-transparent h-full w-full absolute inset-0"
          colors={[
            [14, 255, 255],
            [285, 14, 285],
            [129, 140, 248],
          ]}
          opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
          dotSize={2}
        />
      </AnimatePresence>
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}

export default Sample;
