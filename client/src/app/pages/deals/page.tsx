import React from "react";
import { Button } from "@/components/ui/button";
import OverlayCards from "@/components/custom/overlayCards";
import Featured from "@/sections/(home)/featured/page";

function Deals() {
  const cards = [
    {
      heading: "LogoIpsum Hosting Coupon: Save 66% + Free Domain",
      overlaycolor: "#AD4084",
      subtitle: "SAVE 66%",
      src: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "LogoIpsum Hosting Coupon: Save 66% + Free Domain",
      overlaycolor: "#44A5B0",
      subtitle: "UP TO 63%",
      src: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "LogoIpsum Hosting Coupon: Save 66% + Free Domain",
      overlaycolor: "#9ACC1A",
      subtitle: "UP TO 63%",
      src: "https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "LogoIpsum Hosting Coupon: Save 66% + Free Domain",
      overlaycolor: "#AD4084",
      subtitle: "SAVE 66%",
      src: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "LogoIpsum Hosting Coupon: Save 66% + Free Domain",
      overlaycolor: "#44A5B0",
      subtitle: "UP TO 63%",
      src: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "LogoIpsum Hosting Coupon: Save 66% + Free Domain",
      overlaycolor: "#9ACC1A",
      subtitle: "UP TO 63%",
      src: "https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className=" mt-28 flex flex-col justify-center items-center">
      <h1 className=" text-5xl mb-11 py-10 font-extrabold text-white">
        {" "}
        Deals{" "}
      </h1>
      <div className=" pt-56 bg-white w-svw flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-1 mb-20 gap-y-20 w-[75%]">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" flex flex-col align-middle items-center border-b-2"
            >
              <OverlayCards
                heading={card.heading}
                src={card.src}
                subtitle={card.subtitle}
                overlaycolor={card.overlaycolor}
              />
              <Button
                type="submit"
                className=" bg-[#7bb52b] w-40 text-white h-12 hover:bg-[#91bd54]"
              >
                VIEW ALL DEALS{" "}
              </Button>

              <a href="#" className=" mt-4">
                {" "}
                Read More{" "}
              </a>
            </div>
          ))}
        </div>
        <div className=" w-[70%]">
          <Featured />
        </div>
      </div>
    </div>
  );
}

export default Deals;
