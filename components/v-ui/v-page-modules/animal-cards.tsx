import React from "react";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type AnimalCardsProps = {
  imageUrl: string;
  buttonTitle: string;
  titleOne?: string;
  titleTwo?: string;
  buttonLink: string;
};

/**
 * Renders a card component displaying V module link information.
 *
 * @param {AnimalCardsProps} props - The props object containing the following properties:
 *   - imageUrl: string - The URL of the animal image.
 *   - buttonTitle: string - The title of the button.
 *   - titleOne: string - The first title for the animal card. Currently not in use, since the photo was exported as SVG. Only button was not.
 *   - titleTwo: string - The second title for the animal card. Currently not in use, since the photo was exported as SVG. Only button was not.
 *   - buttonLink: string (optional) - The URL the button should link to. Default value is "/".
 * @returns {JSX.Element} - The rendered card component.
 */

const AnimalCards = ({
  imageUrl,
  buttonTitle,
  titleOne,
  titleTwo,
  buttonLink = "/",
}: AnimalCardsProps) => {
  return (
    <Card className="group border-0 h-80 overflow-hidden relative z-0 hover:-translate-y-[0.5px] hover:-translate-x-[0.5px] transition ease-in-out duration-300">
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
            className={`group-hover:shadow-xl group-hover:bg-red-600/80 
            transition duration-300 ease-in-out bg-redMid text-primary-foreground 
            text-[12px] sm:text-[9px] font-bold w-fit h-6 rounded-md inset-x-12 inset-y-40 
            absolute transform scale-100 sm:scale-125`}
          >
            {buttonTitle}
          </Button>
        </Link>
        <div className="text-lg font-extrabold top-20 right-0 left-10 absolute">
          <h2>{titleOne}</h2>
          <h2>{titleTwo}</h2>
        </div>
      </div>
    </Card>
  );
};

export default AnimalCards;
