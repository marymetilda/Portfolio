import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import AboutButton from "../assets/about.png";
import ProjectsIcon from "../assets/projects.svg";
import SkillsIcon from "../assets/skills.jpg";
import ContactIcon from "../assets/contact.png";
import { Data } from "../Data/data";

const homepageData = Data.home;

function Home() {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about");
  };
  const handleSkill = () => {
    navigate("/skills");
  };
  const handleProject = () => {
    navigate("/projects");
  };
  const handleContact = () => {
    navigate("/projects");
  };

  return (
    <div
      style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      className="p-6 px-24 bg-gray-500 flex items-center min-h-screen justify-between bg-hero-pattern bg-repeat"
    >
      <div className="flex flex-col items-start justify-center">
        <p className="text-transparent bg-clip-text bg-linear-green text-3xl font-medium animate-appear">
          {homepageData.introStatement}
        </p>
        <p className="font-extrabold text-transparent text-6xl bg-clip-text bg-linear-blue-white animate-appear">
          {homepageData.name}
        </p>
        <p className="text-transparent bg-clip-text bg-linear-blue-white text-5xl font-bold mb-32 animate-appear">
          {homepageData.designation}
        </p>
      </div>
      <div className="flex flex-col items-end pr-32">
        <div className="flex items-end justify-end gap-4 animate-appear">
          <Button
            handleButtonClick={handleAbout}
            buttonLabel={homepageData.aboutButtonLabel}
          />
          <div className="flex flex-col items-center">
            <div className="w-1 h-20 bg-linear-blue-vertical-middle" />
            <button
              onClick={handleAbout}
              className="w-12 h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center"
            >
              <img className="h-full w-full" src={AboutButton} alt="about" />
            </button>
          </div>
        </div>
        <div className="flex items-end justify-end gap-4 animate-appear">
          <Button
            handleButtonClick={handleSkill}
            buttonLabel={homepageData.skillsButtonLabel}
          />
          <div className="flex flex-col items-center">
            <div className="w-1 h-20 bg-linear-blue-vertical-middle" />
            <button
              onClick={handleSkill}
              className="w-12 h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center"
            >
              <img
                className="h-full w-full rounded-full"
                src={SkillsIcon}
                alt="skills"
              />
            </button>
          </div>
        </div>
        <div className="flex items-end justify-end gap-4 animate-appear">
          <Button
            handleButtonClick={handleProject}
            buttonLabel={homepageData.projectsButtonLabel}
          />
          <div className="flex flex-col items-center">
            <div className="w-1 h-20 bg-linear-blue-vertical-middle" />
            <button
              onClick={handleProject}
              className="w-12 h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center"
            >
              <img
                className="h-full w-full"
                src={ProjectsIcon}
                alt="projects"
              />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 animate-appear">
          <Button
            handleButtonClick={handleContact}
            buttonLabel={homepageData.contanctButtonLabel}
          />
          <div className="flex flex-col items-center">
            <div className="w-1 h-20 bg-linear-blue-vertical-middle" />
            <button
              onClick={handleContact}
              className="w-12 h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center"
            >
              <img
                className="h-full w-full rounded-full"
                src={ContactIcon}
                alt="contact"
              />
            </button>
            <div className="w-1 h-20 bg-linear-blue-vertical-middle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
