import {
  vGuideLinks,
  vBlogLinks,
  vNationLinks,
  vTubeLinks,
  vJobLinks,
  vLanceLinks,
  vCollegeLinks,
  vMarketLinks,
  vEventsLinks,
  vWebinarsLinks,
  vExpertsLinks,
  vMarketingLinks,
  vAboutUsLinks,
  vOpportunityLinks,
  vAgencyLinks,
  vHubLinks,
} from "@/constants";

import VNavLinks from "@/components/v-ui/v-nav/v-nav-links";
import { Separator } from "@/components/ui/separator";

const VVerseMenuContent = () => {
  return (
    <section className="flex flex-row gap-10 mr-4 animate-slide-in-right">
      <aside className="flex flex-col gap-4">
        <h2 className="text-xl text-background">Home</h2>
        <VNavLinks sectionLinks={vAboutUsLinks} sectionTitle={"V-About Us"} />
        <VNavLinks
          sectionLinks={vOpportunityLinks}
          sectionTitle={"V-Opportunity"}
        />
        <VNavLinks sectionLinks={vAgencyLinks} sectionTitle={"V-Agency"} />
        <VNavLinks sectionLinks={vHubLinks} sectionTitle={"V-Hub"} />
      </aside>
      <Separator orientation="vertical" className="h-[530px] mx-1" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-20 justify-end">
          <VNavLinks sectionLinks={vGuideLinks} sectionTitle={"V-Guide"} />
          <VNavLinks sectionLinks={vBlogLinks} sectionTitle={"V-Blog"} />
          <VNavLinks sectionLinks={vNationLinks} sectionTitle={"V-Nation"} />
          <VNavLinks sectionLinks={vTubeLinks} sectionTitle={"V-Tube"} />
          <VNavLinks sectionLinks={vJobLinks} sectionTitle={"V-Jobs"} />
          <VNavLinks sectionLinks={vLanceLinks} sectionTitle={"V-Lance"} />
        </div>
        <Separator className="" />
        <div className="flex flex-row gap-20 justify-end">
          <VNavLinks sectionLinks={vCollegeLinks} sectionTitle={"V-College"} />
          <VNavLinks sectionLinks={vMarketLinks} sectionTitle={"V-Market"} />
          <VNavLinks sectionLinks={vEventsLinks} sectionTitle={"V-Events"} />
          <VNavLinks
            sectionLinks={vWebinarsLinks}
            sectionTitle={"V-Webinars"}
          />
          <VNavLinks sectionLinks={vExpertsLinks} sectionTitle={"V-Experts"} />
          <VNavLinks
            sectionLinks={vMarketingLinks}
            sectionTitle={"V-Marketing"}
          />
        </div>
      </div>
    </section>
  );
};

export default VVerseMenuContent;
