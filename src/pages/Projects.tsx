import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import FlipingCard from "../components/FlipingCard";
import BackButton from "../components/BackButton";
import { Data } from "../Data/data";
import "swiper/css";

const projectData = Data.projects;

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
      <Swiper
        autoplay={{ pauseOnMouseEnter: true, delay: 2500 }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        loop
        className="flex items-center justify-center gap-12"
      >
        {projectData.projectList.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <FlipingCard {...project} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="fixed top-0 left-[10vw] text-black text-opacity-20 text-[10vw] font-bold">
        {projectData.title}
      </div>
    </div>
  );
}

export default Projects;
