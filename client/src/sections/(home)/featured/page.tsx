"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import icon1 from "../../../assets/(home)/featured/logo1.svg";
import icon2 from "../../../assets/(home)/featured/logo2.svg";
import icon3 from "../../../assets/(home)/featured/logo3.svg";
import icon4 from "../../../assets/(home)/featured/logo4.svg";
import icon5 from "../../../assets/(home)/featured/logo5.svg";
import icon6 from "../../../assets/(home)/featured/logo6.svg";
import icon7 from "../../../assets/(home)/featured/logo7.svg";
import { StaticImageData } from "next/image";

interface Company {
  src: StaticImageData;
}

function Featured() {
  const Companies: Company[] = [
    { src: icon1 },
    { src: icon3 },
    { src: icon4 },
    { src: icon5 },
    { src: icon6 },
    { src: icon7 },
    { src: icon3 },
    { src: icon4 },
    { src: icon5 },
    { src: icon6 },
    { src: icon7 },
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 3000); // Change to desired interval (in ms)

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <div className="max-h-60 bg-white overflow-hidden pt-6 pb-12">
      <h1 className="text-center mb-14 text-base font-montserrat font-bold">
        PROUDLY FEATURED ON
      </h1>
      <div className="relative lg:w-[80%] md:w-full overflow-hidden mx-auto">
        <Carousel setApi={setApi} className="w-full overflow-hidden">
          <CarouselContent className="flex w-full">
            {Companies.map((company, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 w-full md:basis-1/2 lg:basis-1/5"
              >
                <div className="py-2 w-52 h-auto flex justify-center">
                  {company.src ? (
                    <Image
                      src={company.src}
                      className="max-h-24 w-36 object-cover"
                      alt={`Company ${index}`}
                    />
                  ) : (
                    <div className="w-full h-24 bg-gray-200 flex items-center justify-center">
                      No Image
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Featured;
