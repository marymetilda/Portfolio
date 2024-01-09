import React, { ReactNode } from "react";

interface WhiteBgCardProps {
  children: ReactNode;
}

function WhiteBgCard({ children }: WhiteBgCardProps) {
  return (
    <div className="group sm:w-[40vw] md:w-[30vw] w-[90vw] h-full p-8 z-10 flex flex-col justify-start bg-opacity-50 hover:bg-opacity-75 bg-[#fcf6f4] hover:bg-[#004040] border-8 border-solid border-grey-1 shadow-lg">
      {children}
    </div>
  );
}

export default WhiteBgCard;
