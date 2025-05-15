"use client";
import React from 'react';
import Link from 'next/link';

function Programming() {
  const sections = [
    {
      title: "Introduction to Programming",
      imgSrc: "https://images.pexels.com/photos/1181245/pexels-photo-1181245.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      linkText: "Discover the basics of programming",
      heightClass: 'h-80',
    },
    {
      title: "Modern Coding Practices",
      imgSrc: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      linkText: "Explore modern coding practices",
      heightClass: 'h-80',
    },
    {
      title: "Tech Innovations",
      imgSrc: "https://images.pexels.com/photos/1181449/pexels-photo-1181449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      linkText: "Learn about the latest tech innovations",
      heightClass: 'h-80',
    },
  ];
  

  return (
    <div className='bg-white flex flex-col items-center py-12 px-4'>
      <div className='lg:max-w-4xl md:max-w-2xl w-full flex flex-col py-6'>
      <h1 className='text-5xl font-extrabold text-black mb-12'> Programming </h1>
        {sections.map((section, index) => (
          <div key={index} className='mb-8'>
           
            <div className={`relative w-full ${section.heightClass} mb-6`}>
              <img
                src={section.imgSrc}
                alt='programming image'
                className='object-cover w-full h-full'
              />
            </div>
            <h1 className='text-4xl font-extrabold text-slate-600 mb-12'>{section.title}</h1>

            <Link href="#" className='text-2xl text-slate-800 hover:underline'>
              {section.linkText}
            </Link>

            <p className='text-sm text-gray-500 my-4'>
              <span>Leave a Comment</span> / <span>Programming</span>
            </p>
            <p className='text-slate-700 leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
            </p>
            <hr className=' bg-slate-300 w-full mb-6 h-1 mt-12' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programming;
