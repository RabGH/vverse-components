import React from "react";
import { EmojiMart } from "@/components/text-editor/emoji-mart";

/**
 * Renders the TextEditorPage component. Test can be deleted. 
 *
 * @return {JSX.Element} The rendered TextEditorPage component.
 */
const TextEditorPage = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <EmojiMart />
    </div>
  );
};

export default TextEditorPage;
