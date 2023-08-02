import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import trelloImg from '../public/assets/projects/trello.jpg'
import commentImg from '../public/assets/projects/comment.jpg'
import rymImg from '../public/assets/projects/rm.jpg'
import ProjectItem from './ProjectItem';
import { About } from './About';

export function Projects() {

  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#0891b2]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid gap-8 md:grid-cols-2'>

          <ProjectItem
            title='Rick & Morty API'
            backgroundImg={rymImg}
            projectUrl='https://wiki-by-gambo-rick-and-morty.vercel.app/'
            tech='React JS'
          />

          <ProjectItem
            title='Trello App'
            backgroundImg={trelloImg}
            projectUrl='https://proyecto-trello.vercel.app/'
            tech='Next JS'
          />

          <ProjectItem
            title='Comentarios en App'
            backgroundImg={commentImg}
            projectUrl='https://publicacion-coment.vercel.app/'
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
