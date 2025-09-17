import React from 'react'
import assets from '../assets/assets';

const Hero = () => {
  return (
    <div
      id="Hero"
      className="flex flex-col  items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <div>
        <img className="w-20" src={assets.group_profile}></img>
        <p className=" text-xs font-medium">Trusted by 10K+ people</p>
      </div>
      <h1 className="text-4xl sm-text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[-95] mx-w-5xl">
        Turing imagination into{" "}
        <sapn className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </sapn>
        impact
      </h1>
      <p className="tex-sm sm:text-lg font-medium text-gray-500 dark:text-white /75 max-w-4/5 sm:max-w-lg pb-3">
        Creating meaningful conections and truning big ideas into interactive
        digital expreinces
      </p>

      <div className="relative  w-full flex justify-center">
        <img
          src={assets.hero_img}
          alt=""
          className="w-full max-w-6xl z-10"
        ></img>
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute -top-40 -right-40 sm:-top-100  sm:-right-50 z-0 dark:hidden"
          style={{ top: "-20rem" /* change as needed */ }}
        ></img>
      </div>
    </div>
  );
}

export default Hero