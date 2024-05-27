import React from "react";
import { CanvasRevealEffectContainer } from "./Card";

interface SkillButtonProps {
  darkLines: number;
  skill: string;
  skillLogo: string;
}

function SkillButton({ darkLines, skill, skillLogo }: SkillButtonProps) {
  const Logo = (
    <div className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-300 via-sky-300 to-indigo-300 h-fit w-fit p-2 rounded-full border border-indigo-500 group-hover:animate-movement">
      <div className="w-8 h-8">
        <img
          className="w-full h-full rounded-full"
          src={skillLogo}
          alt="html"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-gray-800 text-white h-fit w-[40%] flex items-center justify-center">
      <CanvasRevealEffectContainer title={skill} icon={Logo} />
    </div>
  );
}

export default SkillButton;
