import Image from "next/image";
import React from "react";

type VHeroHeaderProps = {
  pillar: string;
  description: string;
};

const VHeroHeader = ({ pillar, description }: VHeroHeaderProps) => {
  return (
    <header className="relative z-0 w-fit h-fit shadow-lg hover:shadow-2xl transition ease-in-out duration-300">
      <div className="w-full h-full relative">
        <Image
          src="/svgs/HeroSectionBackground.svg"
          alt="vVerse"
          width={1450}
          height={690}
          className="shadow-inner rounded-xl"
        />
        <div className="bg-opacity-10 bg-black z-[2] absolute inset-0 w-full h-full rounded-xl" />
      </div>
      <div className="absolute inset-0 z-[3] text-white flex flex-col justify-center items-center p-4">
        <h1 className="text-4xl font-extrabold text-center">
          Welcome to {pillar}
        </h1>
        <p className="text-lg font-extralight text-center break-words">
          {description}
        </p>
      </div>
    </header>
  );
};

export default VHeroHeader;
