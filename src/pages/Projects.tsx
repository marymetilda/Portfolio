import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FlipingCard from "../components/FlipingCard";
import BackButton from "../components/BackButton";
import { Data } from "../Data/data";

const projectData = Data.projects;

const settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        centerPadding: "0",
      },
    },
  ],
};

function Projects() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center gap-12 pt-20 bg-linear-blue-white-mix overflow-hidden">
      <div className="absolute top-[12vh] right-[10vw] z-40 opacity-50">
        <BackButton handleBackClick={handleBackClick} />
      </div>
      <Slider {...settings} className="w-full sm:block">
        {projectData.projectList.map((project, index) => {
          return <FlipingCard {...project} />;
        })}
      </Slider>
      <div className="fixed top-0 left-[10vw] text-black text-opacity-20 text-[10vw] font-bold">
        {projectData.title}
      </div>
    </div>
  );
}

export default Projects;
