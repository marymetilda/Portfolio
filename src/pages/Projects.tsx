import React from "react";

import FlipingCard from "../components/FlipingCard";

function Projects() {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-12 pt-20 bg-linear-blue-white-mix overflow-hidden">
      <FlipingCard />
      <FlipingCard />
      <FlipingCard />
      <FlipingCard />
      <FlipingCard />
      <FlipingCard />
      <div className="fixed top-0 left-[10vw] text-black text-opacity-20 text-[10vw] font-bold">
        Projects
      </div>
    </div>
  );
}

export default Projects;
