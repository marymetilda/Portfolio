import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import AboutButton from "../assets/about.png";
import ProjectsIcon from "../assets/projects.svg";
import SkillsIcon from "../assets/skills.jpg";
import ContactIcon from "../assets/contact.png";
import GithubIcon from "../assets/github.png";
import ResumeIcon from "../assets/resume.png";
import LinkedIn from "../assets/linkedin.svg";
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
    navigate("/contact");
  };

  return (
    <div
      style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      className="p-6 px-[7vw] bg-gray-500 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen bg-hero-pattern bg-repeat"
    >
      <div className="flex flex-col items-start justify-center">
        <p className="text-transparent bg-clip-text bg-linear-green text-[4vw] md:text-[1.5vw] font-medium animate-appear">
          {homepageData.introStatement}
        </p>
        <p className="font-extrabold text-transparent text-[7vw] md:text-[4vw] bg-clip-text bg-linear-blue-white animate-appear">
          {homepageData.name}
        </p>
        <p className="text-transparent bg-clip-text bg-linear-blue-white text-[6vw] md:text-[3vw] font-bold mb-32 animate-appear">
          {homepageData.designation}
        </p>
        <div className="hidden md:flex gap-4">
          {" "}
          <div className="w-8 md:w-12 h-8 md:h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center">
            <a href="https://github.com/marymetilda">
              <img className="h-full w-full" src={GithubIcon} alt="about" />
            </a>
          </div>
          <div className="w-8 md:w-12 h-8 md:h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center">
            <a href="https://drive.google.com/file/d/1LzXMUy_YOeDrnzrcNWHj8zm1gVsebP72/view?usp=sharing">
              <img className="h-full w-full" src={ResumeIcon} alt="about" />
            </a>
          </div>
          <div className="w-8 md:w-12 h-8 md:h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center">
            <a href="https://www.linkedin.com/in/mary-metilda-9961aa279">
              <img className="h-full w-full" src={LinkedIn} alt="about" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-4 md:gap-0 pr-0 md:pr-[4vw]">
        <div className="flex items-end justify-end gap-4 animate-appear">
          <Button
            handleButtonClick={handleAbout}
            buttonLabel={homepageData.aboutButtonLabel}
          />
          <div className="flex flex-col items-center">
            <div className="hidden md:block w-1 h-20 bg-linear-blue-vertical-middle" />
            <button
              onClick={handleAbout}
              className="w-8 md:w-12 h-8 md:h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center"
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
            <div className="hidden md:block w-1 h-20 bg-linear-blue-vertical-middle" />
            <button
              onClick={handleSkill}
              className="w-8 md:w-12 h-8 md:h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center"
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
            <div className="hidden md:block w-1 h-20 bg-linear-blue-vertical-middle" />
            <button
              onClick={handleProject}
              className="w-8 md:w-12 h-8 md:h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center"
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
            <div className="hidden md:block w-1 h-20 bg-linear-blue-vertical-middle" />
            <button
              onClick={handleContact}
              className="w-8 md:w-12 h-8 md:h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center"
            >
              <img
                className="h-full w-full rounded-full"
                src={ContactIcon}
                alt="contact"
              />
            </button>
            <div className="hidden md:block w-1 h-20 bg-linear-blue-vertical-middle" />
          </div>
        </div>
        <div className="flex md:hidden gap-4">
          {" "}
          <div className="w-8 md:w-12 h-8 md:h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center">
            <a href="https://github.com/marymetilda">
              <img className="h-full w-full" src={GithubIcon} alt="about" />
            </a>
          </div>
          <div className="w-8 md:w-12 h-8 md:h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center">
            <a href="https://drive.google.com/file/d/1LzXMUy_YOeDrnzrcNWHj8zm1gVsebP72/view?usp=sharing">
              <img className="h-full w-full" src={ResumeIcon} alt="about" />
            </a>
          </div>
          <div className="w-8 md:w-12 h-8 md:h-12 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center">
            <a href="https://www.linkedin.com/in/mary-metilda-9961aa279">
              <img className="h-full w-full" src={LinkedIn} alt="about" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
