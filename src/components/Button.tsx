import React from "react";
import RightArrow from '../assets/RightArrow.png';

interface ButtonProps {
  buttonLabel: string;
  handleButtonClick: () => void;
}

function Button({buttonLabel, handleButtonClick}: ButtonProps) {
  return (
    <button onClick={handleButtonClick} className="flex gap-4 items-center justify-center hover:cursor-pointer">
    <p className="text-transparent bg-clip-text bg-linear-green text-4xl font-medium hover:scale-125">
      {buttonLabel}
      </p>  
      <img className="h-10 w-10" src={RightArrow} alt="right arrow" />
    </button>
  );
}

export default Button;
