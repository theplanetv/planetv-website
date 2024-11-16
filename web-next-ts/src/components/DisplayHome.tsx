import { Carousel } from "flowbite-react";

import H1 from "@/components/H1";

export default function DisplayHome(): JSX.Element {
  return (
    <div className="py-20 mx-auto w-fit flex flex-col gap-y-10">
      <div className="h-80 sm:h-80 xl:h-80 2xl:h-96 flex flex-col gap-y-5">
        <H1>PlanetV Website</H1>
        <Carousel slideInterval={5000}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
        </Carousel>
      </div>

      <div className="flex flex-col gap-y-5">
        <h2 className="text-center font-bold text-xl">
          Welcome to my own website!
        </h2>

        <p className="text-center">
          This is a place I document about journey. Try to find thing you
          interest in here I guess...
        </p>
      </div>
    </div>
  );
}
