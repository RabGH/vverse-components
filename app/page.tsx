import { Button } from "@/components/ui/button";

import { RadioGroupDemo } from "@/components/test/RadioGroupDemo";
import { SwitchDemo } from "@/components/test/SwitchDemo";

import {
  BlogPostButton,
  SocialPageButton,
} from "@/components/blog-post-button";

export default function Home() {
  return (
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
        <SwitchDemo />
      </div>
      <div className="">
        <BlogPostButton />
      </div>
      <div className="">
        <SocialPageButton />
      </div>
    </div>
  );
}
