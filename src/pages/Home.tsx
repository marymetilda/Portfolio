import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { SparklesCore } from "../components/Sparkle";
import { Data } from "../Data/data";
import AboutButton from "../assets/about.png";
import ProjectsIcon from "../assets/projects.svg";
import SkillsIcon from "../assets/skills.jpg";
import ContactIcon from "../assets/contact.png";
import GithubIcon from "../assets/github.png";
import ResumeIcon from "../assets/resume.png";
import LinkedIn from "../assets/linkedin.svg";
import { useEffect, useState } from "react";

const homepageData = Data.home;

function Home() {
  const [shouldShowName, setShouldShowName] = useState(true);
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

  const duration = shouldShowName ? 3000 : 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldShowName(!shouldShowName);
    }, duration);
    return () => clearInterval(interval);
  }, [shouldShowName]);

  const GradientBar = () => (
    <div className="relative z-10 h-12 w-4 block">
      <div className="absolute inset-y-2 inset-x-2 bg-linear-indigo h-3/4 w-[2px] blur-md" />
      <div className="absolute inset-y-4 inset-x-2 bg-linear-indigo h-3/4 w-px" />
      <div className="absolute inset-y-6 inset-x-2 bg-gradient-to-b from-transparent via-sky-500 to-transparent h-2/4 w-[5px] blur-md" />
      <div className="absolute inset-y-8 inset-x-2 bg-gradient-to-b from-transparent via-sky-500 to-transparent h-2/4 w-px" />
    </div>
  );

  return (
    <div className="w-full h-screen bg-black flex overflow-hidden rounded-md">
      {shouldShowName ? (
        <div className="flex flex-col items-center justify-center h-full w-full animate-appear">
          <div className="flex flex-col items-center justify-center">
            <p className="text-indigo-400 text-xl animate-appear pb-4">
              {homepageData.introStatement}
            </p>
            <div className="relative flex items-center justify-center">
              <h1 className="md:text-6xl text-3xl font-bold text-center text-transparent z-20 bg-clip-text bg-indigo-600 blur-md animate-appear">
                {homepageData.name}
              </h1>
              <h1 className="absolute inset-0 md:text-6xl text-3xl font-bold text-center text-transparent z-20 bg-clip-text bg-slate-600 blur-sm animate-appear">
                {homepageData.name}
              </h1>
              <h1 className="absolute inset-0 md:text-6xl text-3xl font-bold text-center text-transparent z-20 bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500 via-teal-500 to-slate-500 animate-appear">
                {homepageData.name}
              </h1>
            </div>
            <p className="text-sky-500 text-[3vw] md:text-xl font-semibold animate-appear pt-4">
              {homepageData.designation}
            </p>
          </div>
          <div className="w-[40rem] h-40 relative mt-4">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              id="particle-1"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-start h-full w-full animate-appear">
          <div className="w-[40rem] h-20 relative mt-4">
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            <SparklesCore
              id="particle-2"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
          <div className="flex flex-col items-end md:gap-0 pr-0 md:pr-[4vw]">
            <div className="flex items-end justify-end gap-4 animate-appear pt-8">
              <Button
                handleButtonClick={handleAbout}
                buttonLabel={homepageData.aboutButtonLabel}
              />
              <div className="flex flex-col items-center justify-between">
                <button
                  onClick={handleAbout}
                  className="w-8 h-8 p-1 bg-linear-blue rounded-full flex items-center justify-center"
                >
                  <img
                    className="h-full w-full"
                    src={AboutButton}
                    alt="about"
                  />
                </button>
              </div>
            </div>
            <div className="flex items-end justify-end gap-4 animate-appear">
              <Button
                handleButtonClick={handleSkill}
                buttonLabel={homepageData.skillsButtonLabel}
              />
              <div className="flex flex-col items-center">
                <GradientBar />
                <button
                  onClick={handleSkill}
                  className="w-8 h-8 p-1 bg-linear-blue rounded-full flex items-center justify-center"
                >
                  <img
                    className="h-full w-full rounded-full"
                    src={SkillsIcon}
                    alt="skill"
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
                <GradientBar />
                <button
                  onClick={handleProject}
                  className="w-8 h-8 p-1 bg-linear-blue rounded-full flex items-center justify-center"
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
                <GradientBar />
                <button
                  onClick={handleContact}
                  className="w-8 h-8 p-1 bg-linear-blue rounded-full flex items-center justify-center"
                >
                  <img
                    className="h-full w-full"
                    src={ContactIcon}
                    alt="contact"
                  />
                </button>
                <GradientBar />
              </div>
            </div>
            <div className="flex gap-4">
              {" "}
              <div className="w-8 h-8 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center">
                <a href="https://github.com/marymetilda">
                  <img className="h-full w-full" src={GithubIcon} alt="about" />
                </a>
              </div>
              <div className="w-8 h-8 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center">
                <a href="https://drive.google.com/file/d/1LzXMUy_YOeDrnzrcNWHj8zm1gVsebP72/view?usp=sharing">
                  <img className="h-full w-full" src={ResumeIcon} alt="about" />
                </a>
              </div>
              <div className="w-8 h-8 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center">
                <a href="https://www.linkedin.com/in/mary-metilda-9961aa279">
                  <img className="h-full w-full" src={LinkedIn} alt="about" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[40rem] h-20 relative mt-4">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              id="particle-3"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
