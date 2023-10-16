import { Button } from "@/components/ui/button";

import { RadioGroupDemo } from "@/components/test/RadioGroupDemo";
import { SwitchDemo } from "@/components/test/SwitchDemo";
import { CheckboxDemo } from "@/components/test/CheckboxDemo";

import { NewPostButton } from "@/components/posts/new-post-button";
import {
  PlusSquare,
  PenSquare,
  UserPlus,
  Newspaper,
  MicOff,
  Mic,
} from "lucide-react";

import { CreatePostButton } from "@/components/posts/create-post-button";
import Heading from "@/components/nav/heading";

export default function ButtonPage() {
  return (
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
          <Button variant="outline" className="rounded-xl">
            Outline
          </Button>
          <Button variant="destructive" className="rounded-xl">
            Destructive
          </Button>
          <Button variant="secondary" className="rounded-xl">
            Secondary
          </Button>
          <Button variant="ghost" className="rounded-xl">
            Ghost
          </Button>
          <Button variant="link" className="rounded-xl">
            Link
          </Button>
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
        <div className="">
          <NewPostButton icon={PenSquare} label={"New Blog Post"} link={""} />
        </div>
        <div className="">
          <NewPostButton
            icon={PlusSquare}
            label={"New Social Post"}
            link={""}
          />
        </div>
        <div className="">
          <NewPostButton icon={UserPlus} label={"New Social Group"} link={""} />
        </div>
        <div className="">
          <CreatePostButton
            icon={Newspaper}
            label={
              "Donex Ligula Dictum Fringilla Nunc Dui Odio Sit Convallis. Eu Lectus Sed."
            }
            title={"New Social Group"}
            link={""}
          />
        </div>
      </div>
    </div>
  );
}
