/* eslint-disable jsx-a11y/iframe-has-title */
import React, { ReactNode } from "react";

interface FlipingCardProps {
  backSideChildren?: ReactNode;
  title: string;
  description: string;
  projectUrl: string;
  liveText: string;
  githubLink?: string;
  githubText?: string;
}

function FlipingCard({
  backSideChildren,
  title,
  description,
  projectUrl,
  liveText,
  githubLink,
  githubText,
}: FlipingCardProps) {
  return (
    <div className="bg-transparent cursor-pointer group perspective w-fit h-fit">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-[15rem] h-[50vh] duration-1000 bg-linear-blue-white border-2 border-solid border-white-1 rounded-tl-[50px] rounded-br-[50px]">
        <div className="absolute backface-hidden border-2 border-[#057777] w-full h-full rounded-tl-[50px] rounded-br-[50px] bg-linear-blue overflow-hidden">
          <iframe
            scrolling="no"
            className="h-full w-full overflow-hidden"
            src={projectUrl}
          ></iframe>
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden rounded-tr-[50px] rounded-bl-[50px]">
          <div className="h-full w-full bg-linear-blue-white p-6 flex flex-col items-center justify-between">
            <p className="text-xl font-bold text-transparent bg-clip-text bg-linear-dark-blue">
              {title}
            </p>
            <p className="text-lg font-normal text-[#ffffff]">{description}</p>
            <p className="text-lg font-medium text-transparent bg-clip-text bg-linear-dark-blue">
              <a href={projectUrl}>{liveText}</a>
            </p>
            {githubText && (
              <p className="text-x=lg font-medium text-transparent bg-clip-text bg-linear-dark-blue">
                <a href={githubLink}>{githubText}</a>
              </p>
            )}
          </div>
          {backSideChildren}
        </div>
      </div>
    </div>
  );
}

export default FlipingCard;
