import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

interface BackButtonProps {
  handleBackClick: () => void;
}

function BackButton({ handleBackClick }: BackButtonProps) {
  return (
    <button
      onClick={handleBackClick}
      className="bg-white p-2 w-fit h-fit rounded-full hover:opacity-10"
    >
      <a href="/">
        <IoArrowBackOutline className="w-5 sm:w-8 h-5 w:h-8" />
      </a>
    </button>
  );
}

export default BackButton;
