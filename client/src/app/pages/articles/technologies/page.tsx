"use client";
import React from 'react';
import Link from 'next/link';

function Technologies() {
  const sections = [
    {
      title: "15 Common-sense Tips for Tech Startups",
      imgSrc: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      linkText: "Read More »",
      heightClass: 'h-80',
      commentLink: "#", // Add the actual link here
    },
    {
      title: "The Most Awesome Online Lorem Ipsum",
      imgSrc: "https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      linkText: "Read More »",
      heightClass: 'h-80',
      commentLink: "#", // Add the actual link here
    },
    {
      title: "5 Best iPhone Earbuds Pro Settings",
      imgSrc: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      linkText: "Read More »",
      heightClass: 'h-80',
      commentLink: "#", // Add the actual link here
    },
  ];

  return (
    <div className='bg-white flex flex-col items-center py-12 px-4'>
      <div className='lg:max-w-4xl md:max-w-2xl w-full flex flex-col py-6'>
      <h1 className='text-5xl font-extrabold text-black mb-12'> Technologies </h1>
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
            <p className='text-sm text-gray-500 my-4'>
              <a href={section.commentLink} className='hover:text-green-600 transition-colors'>
                Leave a Comment
              </a> / <span>Technologies</span>
            </p>

            <p className='text-slate-700 leading-relaxed mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
            </p>

            <Link href={section.commentLink} className='text-2xl text-slate-800 hover:text-green-600 hover:underline'>
              {section.linkText}
            </Link>

            <hr className='bg-slate-300 w-full mb-6 h-1 mt-12' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
