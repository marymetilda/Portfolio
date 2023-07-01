import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

function BackButton() {
  return (
    <button className="bg-white p-2 w-fit h-fit rounded-full">
      <a href="/">
        <IoArrowBackOutline className="w-[32px] h-[32px]" />
      </a>
    </button>
  );
}

export default BackButton;
