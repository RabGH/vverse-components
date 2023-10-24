import {
  vAnalyticsLinks,
  vAccountLinks,
  vAlertCenterLicks,
  vBlogBackMenuLinks,
  vNationBackMenuLinks,
  vTubeBackendMenuLinks,
  vJobsBackendMenuLinks,
  vLanceBackendMenuLinks,
  vCollegeBackendMenuLinks,
  vMarketBackendMenuLinks,
  vEventsBackendMenuLinks,
  vWebinarsBackendMenuLinks,
  vExpertsBackendMenuLinks,
  vMarketingBackendMenuLinks,
  vAgencyBackendMenuLinks,
  vHubBackendMenuLinks,
} from "@/constants";

import VNavLinks from "@/components/nav/v-nav/v-nav-links";
import { Separator } from "@/components/ui/separator";

const VVerseBackOfficeMenuContent = () => {
  return (
    <section className="flex flex-row justify-start gap-10">
      <aside className="flex flex-col gap-6">
        <VNavLinks
          sectionLinks={vAnalyticsLinks}
          sectionTitle={"V-Analytics"}
        />
        <VNavLinks
          sectionLinks={vAgencyBackendMenuLinks}
          sectionTitle={"V-Agency"}
        />
        <VNavLinks sectionLinks={vHubBackendMenuLinks} sectionTitle={"V-Hub"} />
      </aside>
      <Separator orientation="vertical" className="h-[530px] mx-1" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-16 justify-start">
          <VNavLinks sectionLinks={vAccountLinks} sectionTitle={"V-Account"} />
          <VNavLinks
            sectionLinks={vAlertCenterLicks}
            sectionTitle={"V-AlertCenter"}
          />
          <VNavLinks
            sectionLinks={vBlogBackMenuLinks}
            sectionTitle={"V-Blog"}
          />
          <VNavLinks
            sectionLinks={vNationBackMenuLinks}
            sectionTitle={"V-Nation"}
          />
          <VNavLinks
            sectionLinks={vTubeBackendMenuLinks}
            sectionTitle={"V-Tube"}
          />
          <VNavLinks
            sectionLinks={vJobsBackendMenuLinks}
            sectionTitle={"V-Jobs"}
          />
        </div>
        <Separator className="" />
        <div className="flex flex-row gap-16 justify-start">
          <VNavLinks
            sectionLinks={vLanceBackendMenuLinks}
            sectionTitle={"V-Lance"}
          />
          <VNavLinks
            sectionLinks={vCollegeBackendMenuLinks}
            sectionTitle={"V-College"}
          />
          <VNavLinks
            sectionLinks={vMarketBackendMenuLinks}
            sectionTitle={"V-Market"}
          />
          <VNavLinks
            sectionLinks={vEventsBackendMenuLinks}
            sectionTitle={"V-Events"}
          />
          <VNavLinks
            sectionLinks={vWebinarsBackendMenuLinks}
            sectionTitle={"V-Webinars"}
          />
          <VNavLinks
            sectionLinks={vExpertsBackendMenuLinks}
            sectionTitle={"V-Experts"}
          />
          <VNavLinks
            sectionLinks={vMarketingBackendMenuLinks}
            sectionTitle={"V-Marketing"}
          />
        </div>
      </div>
    </section>
  );
};

export default VVerseBackOfficeMenuContent;
