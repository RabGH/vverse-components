import { ChapterTitle } from "@vidstack/react";

/**
 * Renders the Title component.
 *
 * @return {JSX.Element} The rendered Title component.
 */

export function Title() {
  return (
    <span className="inline-block flex-1 overflow-hidden text-ellipsis whitespace-nowrap px-2 text-sm font-medium text-blue-300/70">
      <span className="mr-1">|</span>
      <ChapterTitle />
    </span>
  );
}
