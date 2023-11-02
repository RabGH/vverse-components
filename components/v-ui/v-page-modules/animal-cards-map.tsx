"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import classNames from "embla-carousel-class-names";
import { ChevronRight, ChevronLeft } from "lucide-react";

import "./embla-animals.css";

import AnimalCards, {
  AnimalCardsProps,
} from "@/components/v-ui/v-page-modules/animal-cards";

type AnimalCardsMapProps = {
  animalCards?: AnimalCardsProps;
};

const AnimalCardsMap = ({ animalCards }: AnimalCardsMapProps) => {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [autoplayRef] = useState(Autoplay);
  const [classNamesRef] = useState(classNames);

  useEffect(() => {
    if (emblaApi) {
      autoplayRef.current(emblaApi, { interval: 3000 });
      classNamesRef.current(emblaApi);
    }
  }, [emblaApi, autoplayRef, classNamesRef]);

  const handleNext = () => emblaApi?.scrollNext();
  const handlePrev = () => emblaApi?.scrollPrev();

  return (
    <section
      className="flex justify-center w-96 h-64 overflow-hidden embla gap-2"
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
      <div className="flex justify-between items-center absolute inset-x-0 inset-y-0 z-10">
        <button
          className="embla__button embla__button--prev bg-white rounded-full p-2 shadow-lg"
          onClick={handlePrev}
          disabled={!emblaApi?.canScrollPrev()}
        >
          <ChevronLeft
            className={`text-gray-500 ${
              emblaApi?.canScrollPrev() ? "opacity-100" : "opacity-50"
            }`}
            size={24}
          />
        </button>
        <button
          className="embla__button embla__button--next bg-white rounded-full p-2 shadow-lg"
          onClick={handleNext}
          disabled={!emblaApi?.canScrollNext()}
        >
          <ChevronRight
            className={`text-gray-500 ${
              emblaApi?.canScrollNext() ? "opacity-100" : "opacity-50"
            }`}
            size={24}
          />
        </button>
      </div>
    </section>
  );
};

export default AnimalCardsMap;
