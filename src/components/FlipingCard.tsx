/* eslint-disable jsx-a11y/iframe-has-title */
import React, { ReactNode } from "react";

interface FlipingCardProps {
  backSideChildren?: ReactNode;
  siteUrl: string;
}

function FlipingCard({ backSideChildren, siteUrl }: FlipingCardProps) {
  return (
    <div className="bg-transparent cursor-pointer group perspective w-fit h-fit">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-[20rem] h-[45vh] duration-1000 bg-linear-blue-white border-2 border-solid border-white-1 rounded-tl-[50px] rounded-br-[50px]">
        <div className="absolute backface-hidden border-2 border-[#057777] w-full h-full rounded-tl-[50px] rounded-br-[50px] bg-linear-blue overflow-hidden">
          <iframe
            scrolling="no"
            className="h-full w-full overflow-hidden"
            src={siteUrl}
          ></iframe>
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden rounded-tr-[50px] rounded-bl-[50px]">
          <div className="h-full w-full bg-linear-blue-white p-6 flex flex-col items-center justify-between">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-dark-blue">
              Food Ordering App
            </p>
            <p className="text-xl font-normal text-[#ffffff]">
              Food ordering app from scrach using react js. Technologies used
              are react js, tailwind css, parcel, redux toolkit etc
            </p>
            <p className="text-xl font-medium text-transparent bg-clip-text bg-linear-dark-blue">
              <a href="https://www.google.com/">Live URL</a>
            </p>
            <p className="text-xl font-medium text-transparent bg-clip-text bg-linear-dark-blue">
              <a href="https://www.google.com/">github link</a>
            </p>
          </div>
          {/* <a href={siteUrl}>{siteUrl}</a> */}
          {/* <Link to={siteUrl}>
            <p>{siteUrl}</p>
          </Link> */}
          {backSideChildren}
        </div>
      </div>
    </div>
  );
}

export default FlipingCard;
