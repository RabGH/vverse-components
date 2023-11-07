"use client";

import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "./embla-animals.css";

import AnimalCards, {
  AnimalCardsProps,
} from "@/components/v-ui/v-page-modules/animal-cards";

type AnimalCardsMapProps = {
  animalCards?: AnimalCardsProps;
};

/**
 * Renders a map of animal cards.
 *
 * @param {AnimalCardsMapProps} animalCards - The animal cards to display in the map.
 * @return {JSX.Element} - The rendered map of animal cards.
 */

const AnimalCardsMap = ({ animalCards }: AnimalCardsMapProps) => {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section
      className="flex w-[1200px] h-64 overflow-hidden embla"
      ref={emblaRef}
    >
      <div className="w-full h-full embla__container">
        <div className="embla__slide w-full h-full flex-shrink-0">
          <AnimalCards
            imageUrl={"/bg-svgs/buffalo-home-sliders-full.svg"}
            buttonTitle={"Dicover V-Guide"}
            buttonLink={"/"}
          />
        </div>

        <div className="embla__slide w-full h-full flex-shrink-0">
          <AnimalCards
            imageUrl={"/bg-svgs/giraffe-home-sliders-full.svg"}
            buttonTitle={"Dicover V-Blog"}
            buttonLink={"/"}
          />
        </div>

        <div className="embla__slide w-full h-full flex-shrink-0">
          <AnimalCards
            imageUrl={"/bg-svgs/bulldog-home-sliders-full.svg"}
            buttonTitle={"Dicover V-Nation"}
            buttonLink={"/"}
          />
        </div>

        <div className="embla__slide w-full h-full flex-shrink-0">
          <AnimalCards
            imageUrl={"/bg-svgs/leopard-home-sliders-full.svg"}
            buttonTitle={"Dicover V-Jobs"}
            buttonLink={"/"}
          />
        </div>

        <div className="embla__slide w-full h-full flex-shrink-0">
          <AnimalCards
            imageUrl={"/bg-svgs/fox-home-sliders-full.svg"}
            buttonTitle={"Dicover V-Jobs"}
            buttonLink={"/"}
          />
        </div>

        <div className="embla__slide w-full h-full flex-shrink-0">
          <AnimalCards
            imageUrl={"/bg-svgs/hawk-home-sliders-full.svg"}
            buttonTitle={"Dicover V-College"}
            buttonLink={"/"}
          />
        </div>

        <div className="embla__slide w-full h-full flex-shrink-0">
          <AnimalCards
            imageUrl={"/bg-svgs/dog-home-sliders-full.svg"}
            buttonTitle={"Dicover V-Market"}
            buttonLink={"/"}
          />
        </div>

        <div className="embla__slide w-full h-full flex-shrink-0">
          <AnimalCards
            imageUrl={"/bg-svgs/racoon-home-sliders-full.svg"}
            buttonTitle={"Dicover V-Lance"}
            buttonLink={"/"}
          />
        </div>

        <div className="embla__slide w-full h-full flex-shrink-0">
          <AnimalCards
            imageUrl={"/bg-svgs/lion-home-sliders-full.svg"}
            buttonTitle={"Dicover V-Events"}
            buttonLink={"/"}
          />
        </div>

        <div className="embla__slide w-full h-full flex-shrink-0">
          <AnimalCards
            imageUrl={"/bg-svgs/bison-home-sliders-full.svg"}
            buttonTitle={"Dicover V-Webinars"}
            buttonLink={"/"}
          />
        </div>

        <div className="embla__slide w-full h-full flex-shrink-0">
          <AnimalCards
            imageUrl={"/bg-svgs/owl-home-sliders-full.svg"}
            buttonTitle={"Dicover V-Marketing"}
            buttonLink={"/"}
          />
        </div>

        <div className="embla__slide w-full h-full flex-shrink-0">
          <AnimalCards
            imageUrl={"/bg-svgs/goose-home-sliders-full.svg"}
            buttonTitle={"Dicover V-Agency"}
            buttonLink={"/"}
          />
        </div>
      </div>
    </section>
  );
};

export default AnimalCardsMap;
