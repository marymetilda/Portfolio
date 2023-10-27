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
    <div className="bg-linear-green group-hover:bg-linear-blue-vertical-middle shadow-2xl rounded-full h-15 w-full flex items-center justify-between gap-4 px-4">
      <div className="flex items-center gap-4 text-green-950 text-xl font-semibold">
        <div className="bg-linear-blue-white p-2 rounded-full w-fit h-fit">
          <img className="w-10 h-10 rounded-full" src={skillLogo} alt="html" />
        </div>
        <p>{skill}</p>
      </div>
      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: darkLines })?.map(() => {
          return <div className="w-12 h-2 bg-linear-blue-green" />;
        })}
        {Array.from({ length: whiteLines })?.map(() => {
          return <div className="w-12 h-2 bg-linear-white-green" />;
        })}
      </div>
    </div>
  );
}

export default SkillButton;
