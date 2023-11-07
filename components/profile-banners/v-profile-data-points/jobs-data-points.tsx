import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";
import {
  IconBudget,
  IconExperienceStars,
  IconFollowers,
  IconUserCheck,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";

type JobsDataPointsProps = {
  isLoading?: boolean;
  experience: number;
  salary: number;
  likes: number;
  shares: number;
};

/**
 * Renders the data points for a job.
 *
 * @param {boolean} isLoading - Indicates if the data is loading.
 * @param {number} experience - The number of years of experience.
 * @param {number} salary - The salary for the job.
 * @param {number} likes - The number of likes for the job.
 * @param {number} shares - The number of shares for the job.
 * @return {JSX.Element} The rendered job data points.
 */

const JobsDataPoints = ({
  isLoading,
  experience,
  salary,
  likes,
  shares,
}: JobsDataPointsProps) => {
  return (
    <section className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <VDataPoint
          number={experience}
          description={"Experience"}
          icon={IconExperienceStars}
          isLoading={isLoading}
          isExperience={true}
        />
        <VDataPoint
          number={salary}
          description={"Salary"}
          icon={IconBudget}
          isLoading={isLoading}
          currency="$"
        />
        <VDataPoint
          number={likes}
          description={"Likes"}
          icon={IconUserCheck}
          isLoading={isLoading}
        />
        <VDataPoint
          number={shares}
          description={"Shares"}
          icon={IconFollowers}
          isLoading={isLoading}
        />
      </div>
      <Button variant="bannerBlueRed" size="banner" className="ml-6">
        Edit Profile
      </Button>
    </section>
  );
};

export default JobsDataPoints;
