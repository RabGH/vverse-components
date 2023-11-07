import {
  IconBellOutline,
  IconCalendar,
  IconMail,
  IconMessageBtn,
  IconSponsorMegaphone,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ButtonKey } from "@/lib/types";

type VAlertNavProps = {
  numberOfNotifications: number;
  numberOfMessages: number;
  numberOfEmails: number;
  numberOfPlans: number;
  numberOfNews: number;
  activeButton: ButtonKey;
  setActiveButton: (button: ButtonKey) => void;
  visitedButtons: Record<string, boolean>;
  setVisitedButtons: (visitedButtons: Record<string, boolean>) => void;
};

/**
 * Renders the VAlertNav component.
 *
 * @param {VAlertNavProps} {
 *   numberOfNotifications,
 *   numberOfMessages,
 *   numberOfEmails,
 *   numberOfPlans,
 *   numberOfNews,
 *   activeButton,
 *   setActiveButton,
 *   visitedButtons,
 *   setVisitedButtons,
 * } - The props for the VAlertNav component.
 * @return {JSX.Element} The rendered VAlertNav component.
 */

const VAlertNav = ({
  numberOfNotifications,
  numberOfMessages,
  numberOfEmails,
  numberOfPlans,
  numberOfNews,
  activeButton,
  setActiveButton,
  visitedButtons,
  setVisitedButtons,
}: VAlertNavProps) => {
  const getButtonStyles = (button: string) => {
    return cn(
      "gap-2 text-base h-12",
      activeButton === button
        ? "group hover:bg-hoverBlue hover:text-background hover:border hover:border-blue-400/50"
        : "group hover:bg-hoverBlue hover:text-background hover:border hover:border-blue-400/50 text-muted"
    );
  };

  const getIconStyles = (button: string) => {
    return cn(
      "w-5 h-5",
      activeButton === button
        ? "text-background group group-hover:text-primary"
        : "text-muted group-hover:text-primary"
    );
  };

  const getCircleStyles = (button: string) => {
    return cn(
      "rounded-full flex items-center justify-center w-10 h-10 group group-hover:text-background",
      activeButton === button
        ? "vgBlue group group-hover:vgWhite group-hover:border group-hover:border-blue-400/50"
        : "bg-gray-100"
    );
  };

  const getBadgeStyles = (button: ButtonKey, count: number) => {
    return cn(
      "border font-normal",
      activeButton === button
        ? "vgBlue group group-hover:vgWhite group-hover:text-primary border-blue-400/50"
        : "bg-gray-100 border border-gray-300 text-muted group-hover:bg-background",
      count > 0 && !visitedButtons[button]
        ? "vgRed text-background border-red-400/50"
        : ""
    );
  };

  return (
    <div
      className={cn(
        "rounded-md p-2 flex justify-center items-center shadow-md max-w-max mx-auto"
      )}
    >
      <div className="flex flex-row gap-2 justify-center items-center">
        <Button
          variant={"notificationCenter"}
          className={getButtonStyles("Notifications")}
          onClick={() => {
            setActiveButton("Notifications");
            const updatedVisitedButtons = {
              ...visitedButtons,
              Notifications: true,
            };
            setVisitedButtons(updatedVisitedButtons);
          }}
        >
          <div className={getCircleStyles("Notifications")}>
            <IconBellOutline className={getIconStyles("Notifications")} />
          </div>
          Notifications
          <Badge
            size="numberTag"
            className={getBadgeStyles("Notifications", numberOfNotifications)}
          >
            {numberOfNotifications}
          </Badge>
        </Button>

        <Button
          variant={"notificationCenter"}
          className={getButtonStyles("Messages")}
          onClick={() => {
            setActiveButton("Messages");
            const updatedVisitedButtons = {
              ...visitedButtons,
              Messages: true,
            };
            setVisitedButtons(updatedVisitedButtons);
          }}
        >
          <div className={getCircleStyles("Messages")}>
            <IconMessageBtn className={getIconStyles("Messages")} />
          </div>
          Messages
          <Badge
            size="numberTag"
            className={getBadgeStyles("Messages", numberOfMessages)}
          >
            {numberOfMessages}
          </Badge>
        </Button>

        <Button
          variant={"notificationCenter"}
          className={getButtonStyles("Emails")}
          onClick={() => {
            setActiveButton("Emails");
            const updatedVisitedButtons = {
              ...visitedButtons,
              Emails: true,
            };
            setVisitedButtons(updatedVisitedButtons);
          }}
        >
          <div className={getCircleStyles("Emails")}>
            <IconMail className={getIconStyles("Emails")} />
          </div>
          Emails
          <Badge
            size="numberTag"
            className={getBadgeStyles("Emails", numberOfEmails)}
          >
            {numberOfEmails}
          </Badge>
        </Button>

        <Button
          variant={"notificationCenter"}
          className={getButtonStyles("Planner")}
          onClick={() => {
            setActiveButton("Planner");
            const updatedVisitedButtons = {
              ...visitedButtons,
              Planner: true,
            };
            setVisitedButtons(updatedVisitedButtons);
          }}
        >
          <div className={getCircleStyles("Planner")}>
            <IconCalendar className={getIconStyles("Planner")} />
          </div>
          Planner
          <Badge
            size="numberTag"
            className={getBadgeStyles("Planner", numberOfPlans)}
          >
            {numberOfPlans}
          </Badge>
        </Button>

        <Button
          variant={"notificationCenter"}
          className={getButtonStyles("News")}
          onClick={() => {
            setActiveButton("News");
            const updatedVisitedButtons = {
              ...visitedButtons,
              News: true,
            };
            setVisitedButtons(updatedVisitedButtons);
          }}
        >
          <div className={getCircleStyles("News")}>
            <IconSponsorMegaphone className={getIconStyles("News")} />
          </div>
          News
          <Badge
            size="numberTag"
            className={getBadgeStyles("News", numberOfNews)}
          >
            {numberOfNews}
          </Badge>
        </Button>
      </div>
    </div>
  );
};

export default VAlertNav;
