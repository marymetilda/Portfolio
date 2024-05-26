import React from "react";
import BackButton from "../components/BackButton";
import Particle from "../components/Particle";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-full">
      <div className="relative">
        <div className="fixed top-10 w-full flex items-center justify-center z-40 opacity-50">
          <BackButton handleBackClick={handleBackClick} />
        </div>
        <div className="p-4 md:p-8 border-solid border-2 border-white w-[75vw] md:w-[50vw] h-fit flex items-center justify-center absolute top-36 sm:top-52 md:top-56 left-[9vw] opacity-100 z-20 backdrop-blur-[4px] transition duration-300 ease-in-out hover:scale-110 animate-flash-top">
          <p className="text-white text-[18px] md:text-[24px]">
            Mail Me at:
            <br />
            <br />
            metilda0496@gmail.com
            <br />
            <br />
            Connect Me through:
            <br />
            <a href="https://www.linkedin.com/in/mary-metilda-9961aa279">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <Particle
        density={800}
        onHoverInteractivity={false}
        shouldEnableLinks={false}
        particleColor="#ffffff"
        linkColor="#ffffff"
        bgColor="#004040"
        minParticleSize={1}
        maxParticleSize={6}
      />
    </div>
  );
};

export default Contact;
