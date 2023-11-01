"use client";

import { useState } from "react";

import data, { Emoji } from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconHeartFilled } from "../icons/logo-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function EmojiMart() {
  const [selectedEmojis, setSelectedEmojis] = useState<Emoji[]>([]);

  const handleEmojiSelect = (emoji: Emoji) => {
    setSelectedEmojis((prevEmojis) => [...prevEmojis, emoji]);
  };

  return (
    <div className="flex flex-col gap-1">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"secondary"}
            size="featured"
            icon={<IconHeartFilled className="h-4 w-4" />}
            aria-label="Emoji"
            className="flex items-center"
          >
            Emoji
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        </PopoverContent>
      </Popover>
      <Card className="w-60 h-60 p-4 border-violet flex flex-col items-center">
        <CardTitle>Emoji</CardTitle>
        <CardContent className="p-4">
          {selectedEmojis.map((emoji: any, index) => (
            <span key={index}>{emoji.native}</span>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
