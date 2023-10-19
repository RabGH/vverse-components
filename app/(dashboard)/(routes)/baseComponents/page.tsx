import { Button } from "@/components/ui/button";

import { RadioGroupDemo } from "@/components/test/RadioGroupDemo";
import { SwitchDemo } from "@/components/test/SwitchDemo";
import { CheckboxDemo } from "@/components/test/CheckboxDemo";

import {
  PlusSquare,
  PenSquare,
  UserPlus,
  Newspaper,
  MicOff,
  Mic,
  ArrowUpRightSquare,
  ArrowDownAZ,
  Megaphone,
  CalendarDays,
} from "lucide-react";

import Heading from "@/components/nav/heading";
import { SquareButton } from "@/components/v-buttons/square-button";
import { RectangleButton } from "@/components/v-buttons/rectangle-button";
import {
  IconPost,
  IconProducts,
  LogoBlue,
  IconSocialPagesBtn,
  IconEbook,
  IconGrid,
  IconServicesBtn,
  IconGearServicesBtn,
  IconMyChannelBtn,
  IconTV,
  IconLayers,
  IconStore,
  IconCalendarEvent,
  IconCalendarEventStar,
  IconCoursesBtn,
  IconWebinar,
} from "@/components/icons/logo-icons";
import { VBadges } from "@/components/badges/v-badge";
import { categories } from "@/constants";
import { FilterOutlineLarge } from "@/components/filters/lg-outline-filter";
import { FilterFilledLarge } from "@/components/filters/lg-filled-filter";
import { FilterFilledSmall } from "@/components/filters/sm-filled-filter";
import { FilterOutlineSmall } from "@/components/filters/sm-outline-filter";
import { FilterOutlineCheckbox } from "@/components/filters/checkbox-outline-filter";
import { FilterFilledCheckbox } from "@/components/filters/checkbox-filled-filter";
import { PopoverAnnouncement } from "@/components/dialogs/popover-announcements";
import { DialogVAnnouncement } from "@/components/dialogs/dialog-v-announcement";
import { DialogVInputAnnouncement } from "@/components/dialogs/dialog-v-announcement-input";
import { CalendarDemo } from "@/components/calendars/default-calendar";
import { DatePickerWithRange } from "@/components/calendars/range-calendar";

export default function ButtonPage() {
  return (
    <div className="max-w-full w-full">
      <div>
        <Heading
          title={"Buttons"}
          description={
            "Button variants, checkboxes, radios, custom buttons with icons"
          }
          icon={Newspaper}
        />
        <div className="flex items-center h-full flex-col space-y-10 m-10">
          <div className="space-x-5">
            <Button variant="default">Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="">
            <RadioGroupDemo />
          </div>
          <div className="">
            <CheckboxDemo />
          </div>
          <div className="">
            <SwitchDemo />
          </div>
          <div className="flex flex-row space-x-2">
            <Button variant="default" size="icon">
              <MicOff />
            </Button>
            <Button variant="default" size="icon">
              <Mic />
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <div className="">
            <SquareButton icon={PenSquare} label={"New Blog Post"} link={""} />
          </div>
          <div className="">
            <SquareButton
              icon={PlusSquare}
              label={"New Social Post"}
              link={""}
            />
          </div>
          <div className="">
            <SquareButton
              icon={UserPlus}
              label={"New Social Group"}
              link={""}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 ml-16">
          <RectangleButton
            icon={IconPost}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Blog Post"}
            link={""}
          />
          <RectangleButton
            icon={IconProducts}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Product"}
            link={""}
          />
          <RectangleButton
            icon={IconSocialPagesBtn}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Social Page"}
            link={""}
          />
          <RectangleButton
            icon={IconEbook}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New E-Book"}
            link={""}
          />
          <RectangleButton
            icon={IconGrid}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Social Group"}
            link={""}
          />
          <RectangleButton
            icon={IconGearServicesBtn}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Services"}
            link={""}
          />
          <RectangleButton
            icon={IconTV}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Channel"}
            link={""}
          />
          <RectangleButton
            icon={IconStore}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Store"}
            link={""}
          />
          <RectangleButton
            icon={IconCalendarEvent}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Event"}
            link={""}
          />
          <RectangleButton
            icon={IconCoursesBtn}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Courses"}
            link={""}
          />
          <RectangleButton
            icon={IconLayers}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Project"}
            link={""}
          />
          <RectangleButton
            icon={IconWebinar}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Webinar"}
            link={""}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 ml-16">
          <RectangleButton
            icon={IconPost}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Blog Post"}
            link={""}
            variant="LGFilled"
          />
          <RectangleButton
            icon={IconProducts}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Product"}
            link={""}
            variant="LGFilled"
          />
          <RectangleButton
            icon={IconSocialPagesBtn}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Social Page"}
            link={""}
            variant="LGFilled"
          />
          <RectangleButton
            icon={IconEbook}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New E-Book"}
            link={""}
            variant="LGFilled"
          />
          <RectangleButton
            icon={IconGrid}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Social Group"}
            link={""}
            variant="LGFilled"
          />
          <RectangleButton
            icon={IconGearServicesBtn}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Services"}
            link={""}
            variant="LGFilled"
          />
          <RectangleButton
            icon={IconTV}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Channel"}
            link={""}
            variant="LGFilled"
          />
          <RectangleButton
            icon={IconStore}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Store"}
            link={""}
            variant="LGFilled"
          />
          <RectangleButton
            icon={IconCalendarEvent}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Event"}
            link={""}
            variant="LGFilled"
          />
          <RectangleButton
            icon={IconCoursesBtn}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Courses"}
            link={""}
            variant="LGFilled"
          />
          <RectangleButton
            icon={IconLayers}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Project"}
            link={""}
            variant="LGFilled"
          />
          <RectangleButton
            icon={IconWebinar}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Webinar"}
            link={""}
            variant="LGFilled"
          />
        </div>
        <div className="mt-20">
          <Heading
            title={"V-Verse Badges"}
            description={
              "Different colored badges, can be sized, icon added, turned into a button or link"
            }
            icon={ArrowUpRightSquare}
          />
          <VBadges />
        </div>
      </div>
      <div className="mt-20">
        <Heading
          title={"Filters"}
          description={
            "Filter bars, size, color, and variants can be changed, icons, etc.."
          }
          icon={ArrowDownAZ}
        />
        <div className="flex flex-col items-center h-full space-y-5 pt-3">
          <div className="flex flex-row space-x-5 ">
            <FilterOutlineLarge
              categories={categories}
              selectCategoryPlaceholder={"Category"}
              searchCategoryPlaceholder={"Search..."}
              noCategoryFoundMessage={"Non Found"}
            />
            <FilterFilledLarge
              categories={categories}
              selectCategoryPlaceholder={"Category"}
              searchCategoryPlaceholder={"Search..."}
              noCategoryFoundMessage={"Non Found"}
            />
          </div>
          <div className="flex flex-row space-x-5 ">
            <FilterFilledSmall
              categories={categories}
              selectCategoryPlaceholder={"Category"}
              searchCategoryPlaceholder={"Search..."}
              noCategoryFoundMessage={"Non Found"}
            />
            <FilterOutlineSmall
              categories={categories}
              selectCategoryPlaceholder={"Category"}
              searchCategoryPlaceholder={"Search..."}
              noCategoryFoundMessage={"Non Found"}
            />
          </div>
          <div className="flex flex-row space-x-5 ">
            <FilterOutlineCheckbox
              categories={categories}
              selectCategoryPlaceholder={"Category"}
              searchCategoryPlaceholder={"Search..."}
              noCategoryFoundMessage={"Non Found"}
            />
            <FilterFilledCheckbox
              categories={categories}
              selectCategoryPlaceholder={"Category"}
              searchCategoryPlaceholder={"Search..."}
              noCategoryFoundMessage={"Non Found"}
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Heading
          title={"Dialogs"}
          description={
            "Dialog pop-ups, can contain forms, toast notifcations, login, etc.."
          }
          icon={Megaphone}
        />
        <div className="flex justify-center flex-col items-center space-y-10">
          <div className="space-x-2">
            <PopoverAnnouncement />
            <DialogVAnnouncement
              title={"V-Verse Announcement"}
              description={"Are you sure you want to close this announcement?"}
              buttonTitle={"V-Verse Announcement"}
              footer={"Do not show this message again."}
            />
          </div>
          <div className="space-x-2">
            <DialogVInputAnnouncement
              title={"Add a new Dashboard"}
              description={""}
              buttonTitle={"Add Dashboard"}
              footer={"Set as a Default Dashboard"}
              inputPlaceholder={"Add Your Dashboard Title Here"}
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Heading
          title={"Calendars"}
          description={"Calendars, single line calendars, range calendars"}
          icon={CalendarDays}
        />
        <div className="justify-center flex">
          <div className="flex flex-col w-fit gap-4">
            <div>
              <CalendarDemo />
            </div>
            <div>
              <DatePickerWithRange />
            </div>
          </div>
        </div>
      </div>
      <LogoBlue className="mt-20" />
    </div>
  );
}
