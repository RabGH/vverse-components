import React from "react";
import { LogoBlue } from "../icons/logo-icons";

/**
 * Renders the Hero component. Can be deleted.
 *
 * @return {JSX.Element} The rendered Hero component.
 */

const Hero = () => {
  return (
    <div className="text-center p-20">
      <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col items-center gap-5">
        <LogoBlue /> <h1>Component library Vverse</h1>
      </div>
      <div className="mt-10 text-sm md:text-xl font-light">
        Components library for Vverse, buttons, headers, navbar, posts, etc..
      </div>
    </div>
  );
};

export default Hero;
