import React, { ReactNode } from "react";

interface FlipingCardProps {
  backSideChildren?: ReactNode;
  frontSideChildren?: ReactNode;
}

function FlipingCard({
  backSideChildren,
  frontSideChildren,
}: FlipingCardProps) {
  return (
    <div className="bg-transparent cursor-pointer group perspective w-fit h-fit">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-[20rem] h-[45vh] duration-1000 bg-linear-blue-white border-2 border-solid border-white-1 rounded-tl-[50px] rounded-br-[50px]">
        <div className="absolute backface-hidden border-2 border-[#057777] w-full h-full rounded-tl-[50px] rounded-br-[50px] bg-linear-blue overflow-hidden">
          {frontSideChildren}
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          {backSideChildren}
        </div>
      </div>
    </div>
  );
}

export default FlipingCard;
