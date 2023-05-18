// import Image from 'next/image';
// import { Image } from './images/image/imagen.component';
// import { Card } from './cards';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import NextJS from '../public/assets/skills/nextjs.png'
import ImageNext from 'next/image';


export function Skills() {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#0891b2]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 gap-8 m-3 mt-3 lg:grid-cols-4 md:grid-cols-3">

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">   
            <div className="grid items-center justify-center grid-cols-2 gap-4">             
              <div className="m-auto">
                <ImageNext
                  src={Html}
                  width={38}
                  height={38}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xs md:text-base">HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <ImageNext
                  src={Css}
                  width={38}
                  height={38}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <ImageNext
                  src={Javascript}
                  width={38}
                  height={38}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xs md:text-base">JavaScript</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <ImageNext 
                src={ReactImg} 
                width={38} 
                height={38} 
                alt="/" 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <ImageNext
                  src={Tailwind} 
                  width={38} 
                  height={38} 
                  alt="/" 
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <ImageNext 
                src={Github} 
                width={38} 
                height={38} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <ImageNext 
                src={NextJS} 
                width={38} 
                height={38} 
                alt="/" 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
