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
            size="icon"
            icon={<IconHeartFilled />}
            aria-label="Emoji"
          />
        </PopoverTrigger>
        <PopoverContent>
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        </PopoverContent>
      </Popover>
      <Card>
        <CardTitle>Emoji</CardTitle>
        <CardContent>
          {selectedEmojis.map((emoji: any, index) => (
            <span key={index}>{emoji}</span>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
