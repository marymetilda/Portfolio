import React from "react";

interface SkillButtonProps {
  darkLines: number;
  skill: string;
  skillLogo: string;
}

function SkillButton({ darkLines, skill, skillLogo }: SkillButtonProps) {
  const totalLength = 5;
  const whiteLines = totalLength - darkLines;

  return (
    <div className="bg-linear-green group-hover:bg-linear-blue-vertical-middle shadow-2xl rounded-full h-7 sm:h-10 w-full flex items-center justify-between gap-4 px-[4%]">
      <div className="flex items-center gap-4 text-green-950 text-[80%] font-semibold">
        <div className="bg-linear-blue-white p-0.5 rounded-full w-fit h-fit">
          <div className="w-5 h-5">
            <img
              className="w-full h-full rounded-full"
              src={skillLogo}
              alt="html"
            />
          </div>
        </div>
        <p className="whitespace-nowrap hidden sm:block">{skill}</p>
      </div>
      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: darkLines })?.map(() => {
          return <div className="w-2 h-2 rounded-full bg-linear-blue-green" />;
        })}
        {Array.from({ length: whiteLines })?.map(() => {
          return <div className="w-2 h-2 rounded-full bg-linear-white-green" />;
        })}
      </div>
    </div>
  );
}

export default SkillButton;
