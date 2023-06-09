import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

export function About (){

  return (
    <div id='about' className='flex items-center w-full p-2 py-1 md:h-screen'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#0891b2]'>
            About me
          </p>
          <h2 className='py-4'>Gamboa</h2>
          <p className='py-2 text-gray-600'>
          I'm Diego Gamboa a system engineer from Costa Rica! I've been working 
          as a frontend developer for a couple of years. Start as a developer in 2021 
          after getting my bachelor's degree in systems engineering and then my first 
          job as a junior application developer. 
        
          </p>
          <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using React JS, Next JS, Javascript, and
            Frameworks like Tailwind. I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className='z-0 flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

