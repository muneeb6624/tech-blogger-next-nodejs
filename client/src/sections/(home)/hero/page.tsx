import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";

function Hero() {
  return (
    <div className="container mx-auto px-4 mt-24 mb-20 text-white font-montserrat">
      <div className="font-montserrat">
        <h1 className="text-base md:text-2xl font-extrabold">What I Do?</h1>
        <h1 className="text-5xl md:text-4xl lg:text-5xl font-extrabold mt-8 md:mt-12 mb-12 md:mb-24 leading-relaxed">
          <span className="block mb-6">I explain and teach tech­nol­o­gy,</span>
          <span className="block mb-6">solve tech prob­lems and help you</span>
          <span className="block">make gad­get buy­ing decisions.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-56">
        <div className="flex flex-col">
          <h1 className="font-extrabold mb-6 md:mb-10 text-2xl md:text-3xl">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>

          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Email address"
              className="w-full h-12 md:h-14 rounded-sm"
            />
            <Button
              type="submit"
              className="bg-[#7bb52b] w-full md:w-44 text-white h-12 hover:bg-[#91bd54]"
            >
              SUBMIT
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <hr className="mb-6 md:mb-8 w-full md:w-[40%]" />
          <h1 className=" font-montserrat font-extrabold text-center md:text-right">
            <span className="text-[#8AC932] text-4xl md:text-5xl lg:text-5xl font-extrabold">
              125.000
            </span>{" "}
            <br />
            <span className="text-2xl md:text-3xl">
              JOIN THE LIST OF SUBSCRIBERS
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
