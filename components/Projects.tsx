import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import ProjectItem from './ProjectItem';
import {About} from './About';

export function Projects (){

  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#0891b2]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid gap-8 md:grid-cols-2'>
      
           <h5 className='text-center underline text-[18px] py-4'>
            INFORMATION COMING SOON....
          </h5>
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <h5 className='text-center underline text-[18px] py-4'>
            INFORMATION COMING SOON....
          </h5>

        </div>
      </div>
    </div>
  );
};
