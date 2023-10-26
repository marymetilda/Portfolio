import React from "react";

import FlipingCard from "../components/FlipingCard";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate()
  const projectList = [
    { id: 1, url: "https://celluloidgpt-15b7a.web.app/" },
    { id: 2, url: "https://yummy-tasty.netlify.app" },
    { id: 3, url: "https://my-photo-book.netlify.app" },
    { id: 4, url: "https://doordashwebpage.netlify.app" },
    { id: 5, url: "https://azurewebpage.netlify.app" },
    { id: 6, url: "https://airbnb300.netlify.app" },
  ];
  const handleBackClick = () => {
    navigate('/')
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center gap-12 pt-20 bg-linear-blue-white-mix overflow-hidden">
      <div className="absolute top-[12vh] right-[10vw] z-40 opacity-50">
        <BackButton handleBackClick={handleBackClick} />
      </div>
      {projectList.map((project) => {
        return <FlipingCard key={project.id} siteUrl={project.url} />;
      })}
      <div className="fixed top-0 left-[10vw] text-black text-opacity-20 text-[10vw] font-bold">
        Projects
      </div>
    </div>
  );
}

export default Projects;
