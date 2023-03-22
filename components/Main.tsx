import React, { ReactNode } from 'react';
import { SocialContent } from './SocialContent';


export function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] min-h-[90%] w-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='text-gray-700 py-4'>
            <span className='text-[#0891b2]'>Diego </span>Gamboa
          </h1>
          <p className='py-2 text-xs text-gray-700'>Front-End Web Developer</p>
          <p className='text-sm tracking-widest text-gray-600 uppercase'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <SocialContent />
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto mt-11 text-'>
            I’m focused on building responsive front-end web applications.
          </p>

        </div>
      </div>
    </div>
  );
};

