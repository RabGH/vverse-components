import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type VFooterAdsProps = {
  images: string[];
};

/**
 * Renders a list of footer ads with the given images. Flowbite carousel can be added here for auto play to show case ads. 
 *
 * @param {VFooterAdsProps} images - An array of images to display as ads.
 * @return {JSX.Element} - The rendered list of footer ads.
 */

const VFooterAds = ({ images }: VFooterAdsProps) => {
  return (
    <ScrollArea className="w-full rounded-md border mb-2 mt-20">
      <div className="flex flex-row w-max space-x-6 p-4 items-center justify-center">
        {images.map((src, index) => (
          <figure
            key={index}
            className="shrink-0 relative hover:translate-y-[-5px] transition duration-300 ease-in-out"
          >
            <div>
              <Image
                src={src}
                alt={`Image ${index}`}
                width={300}
                height={300}
                className="aspect-[3/3] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-lg">
                AD
              </div>
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="" />
    </ScrollArea>
  );
};

export default VFooterAds;
