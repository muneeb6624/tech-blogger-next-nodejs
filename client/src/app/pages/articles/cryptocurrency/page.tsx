"use client";
import React from 'react';
import Link from 'next/link';

function Cryptocurrency() {
  const sections = [
    {
      title: "5 NFT Projects You Should Learn About",
      imgSrc: "https://images.pexels.com/photos/5077056/pexels-photo-5077056.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      linkText: "Read More »",
      heightClass: 'h-80',
      commentLink: "#", // Add the actual link here
    },
    {
      title: "What is BETH and How to Use It?",
      imgSrc: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      linkText: "Read More »",
      heightClass: 'h-80',
      commentLink: "#", // Add the actual link here
    },
    {
      title: "What Are Blockchain Transaction Fees?",
      imgSrc: "https://images.pexels.com/photos/4709286/pexels-photo-4709286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      linkText: "Read More »",
      heightClass: 'h-80',
      commentLink: "#", // Add the actual link here
    },
  ];

  return (
    <div className='bg-white flex flex-col items-center py-12 px-4'>
      <div className='lg:max-w-4xl md:max-w-2xl w-full flex flex-col py-6'>
      <h1 className='text-5xl font-extrabold text-black mb-12'> Cryptocurrency </h1>
        {sections.map((section, index) => (
          <div key={index} className='mb-8'>
           

            <div className={`relative w-full ${section.heightClass} mb-6`}>
              <img
                src={section.imgSrc}
                alt={section.title}
                className='object-cover w-full h-full'
              />
            </div>
            <h1 className='text-4xl font-extrabold text-slate-600 mt-12'>{section.title}</h1>

            <Link href={section.commentLink} className='text-2xl text-slate-800 hover:text-green-600 hover:underline'>
              {section.linkText}
            </Link>

            <p className='text-sm text-gray-500 my-4'>
              <a href={section.commentLink} className='hover:text-green-600 transition-colors'>
                Leave a Comment
              </a> / <span>Cryptocurrency</span>
            </p>
            <p className='text-slate-700 leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]
            </p>
            <hr className='bg-slate-300 w-full mb-6 h-1 mt-12' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cryptocurrency;
