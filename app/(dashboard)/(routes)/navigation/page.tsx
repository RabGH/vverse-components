import React from "react";

import VNavbar from "@/components/v-ui/v-nav/v-navbar";
import VHeroHeader from "@/components/v-ui/v-page-modules/hero-header";
import AnimalCardsMap from "@/components/v-ui/v-page-modules/animal-cards-map";

/**
 * Renders the VNavigation component.
 *
 * @return {JSX.Element} The rendered VNavigation component.
 */
const VNavigation = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-10">
        <VNavbar userTitle="<Member Title>" />
        <div className="flex flex-col items-center gap-20">
          <VHeroHeader
            pillar={"V-Guide"}
            description={"V-Verse Demo, home page with sliders and nav."}
          />
          <AnimalCardsMap />
        </div>
      </div>
    </>
  );
};

export default VNavigation;
