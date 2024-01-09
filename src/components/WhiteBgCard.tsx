import React, { ReactNode } from "react";

interface WhiteBgCardProps {
  children: ReactNode;
}

function WhiteBgCard({ children }: WhiteBgCardProps) {
  return (
    <div className="group md:w-[30vw] w-[50vw] lg:h-[60vh] md:h-[55vh] max-h-fit p-8 z-10 flex flex-col justify-between bg-opacity-50 hover:bg-opacity-75 bg-[#fcf6f4] hover:bg-[#004040] border-8 border-solid border-grey-1 shadow-lg">
      {children}
    </div>
  );
}

export default WhiteBgCard;
