import React from "react";
import Image from "next/image";
import icon from "../../assets/deals/icon.svg"

interface CardProps {
  src: string;
  heading: string;
  subtitle: string;
  overlaycolor: string;
}

const OverlayCards: React.FC<CardProps> = ({ src, heading, subtitle, overlaycolor }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-sm cursor-pointer hover:bg-slate-300 transition 
    ease-in-out duration-300 relative text-center">
      {/* Container for image and overlay */}
      <div className="relative flex justify-center items-center">
        {/* Image */}
        <Image
          width={500}
          height={500}
          src={src}
          alt="Image"
          className="w-full h-64 shadow-xl"
        />
        {/* Overlay */}
        <div style={{backgroundColor: overlaycolor}} className="absolute inset-0 opacity-60 z-10"></div>

        <Image src={icon}
          width={170} height={170} alt="icon" className="absolute z-10 bg-transparent" />
      </div>
      
      {/* Card Content */}
      <div className="px-6 py-4 relative z-20 font-montserrat gap-2">
        <div className="text-[#7BB52B] text-base mb-2 font-extrabold font-montserrat my-5">{subtitle}</div>
        <div className="font-extrabold text-3xl mb-2">{heading}</div>
      </div>
    </div>
  );
}

export default OverlayCards;
