import React from "react";

import VNavbar from "@/components/v-ui/v-nav/v-navbar";
import VHeroHeader from "@/components/v-ui/v-page-modules/hero-header";
import AnimalCards from "@/components/v-ui/v-page-modules/animal-cards";

const VNavigation = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-10">
        <VNavbar userName="<Member Name>" userTitle="<Member Title>" />
        <VHeroHeader
          pillar={"V-Guide"}
          description={"V-Verse Demo, home page with sliders and nav."}
        />
        <AnimalCards />
      </div>
    </>
  );
};

export default VNavigation;
