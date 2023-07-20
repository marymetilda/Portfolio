import React, { ReactNode } from "react";

interface WhiteBgCardProps {
  children: ReactNode;
}

function WhiteBgCard({ children }: WhiteBgCardProps) {
  return (
    <div className="md:w-[30vw] w-[50vw] lg:h-[60vh] md:h-[55vh] max-h-fit p-8 z-10 flex flex-col justify-between bg-opacity-20 hover:bg-opacity-75 bg-[#fcf6f4] hover:bg-black border-2 border-solid border-black">
      {children}
    </div>
  );
}

export default WhiteBgCard;
