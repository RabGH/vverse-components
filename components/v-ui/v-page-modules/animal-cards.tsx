import React from "react";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type AnimalCardsProps = {
  imageUrl: string;
  buttonTitle: string;
  titleOne: string;
  titleTwo: string;
  buttonLink: string;
};

const AnimalCards = ({
  imageUrl = "/svgs/buffallo-home-sliders-bg.svg",
  buttonTitle,
  titleOne,
  titleTwo,
  buttonLink = "/",
}: AnimalCardsProps) => {
  return (
    <Card className="border-transparent rounded-l-3xl w-96 h-fit overflow-hidden relative z-0 hover:-translate-y-1 hover:-translate-x-1 transition ease-in-out duration-300">
      <Image
        src={imageUrl}
        alt="vVerse"
        width={1920}
        height={1080}
        layout="responsive"
      />

      <div className="absolute inset-0 z-[3] text-white flex flex-col justify-start items-end gap-1">
        <Link href={buttonLink}>
          <Button
            variant={"defaultNoBg"}
            className="bg-redMid text-primary-foreground text-[12px] font-bold w-36 h-7 rounded-md bottom-14 right-0 left-8 absolute"
          >
            {buttonTitle}
          </Button>
        </Link>
        <div className="text-2xl font-extrabold top-10 right-0 left-8 absolute mt-6">
          <h2>{titleOne}</h2>
          <h2>{titleTwo}</h2>
        </div>
      </div>
    </Card>
  );
};

export default AnimalCards;
