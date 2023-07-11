import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

function BackButton() {
  return (
    <button className="bg-white p-2 w-fit h-fit rounded-full hover:opacity-10">
      <a href="/">
        <IoArrowBackOutline className="w-8 h-8" />
      </a>
    </button>
  );
}

export default BackButton;
