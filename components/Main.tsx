import React, { useEffect, useState } from 'react';
import { SocialContent } from './SocialContent';


export function Main() {
  const url = 'https://graph.facebook.com/v7.0/6625157610839741?access_token=EAADb0YwdLH4BOyEUPYUHtWTFEbtcmDA9hLuyB0INqnBlc9cOw95h7oBh3sBOuT9KTVml1wXvUyHHKOp4CL6KXQyTKUoEcJMDwaVslqmrlg3hIlXh5xO3oWfUcjMjVWRx73Mi1f1ysAuAjjHy8s6WL6q52iEGOfDv5uAVpTgNUDe5v21mWGAFynuiyZA1ef4FWdR1YPFZBwrMEVXFwYf4DS820JbiVRAgsl9AabcIrK0JcENgyZAoUYnZAZCc3fAZDZD';
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  }, [])
console.log(todos)
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] min-h-[90%] w-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='text-gray-700'>
            <span className='text-[#0891b2]'> Diego </span><span className=''>Gamboa</span>
          </h1>
          <p className='py-2 text-xs text-gray-700'>Front-End Web Developer</p>
          <div className='mt-14'>
            <p className='mb-4 text-sm tracking-widest text-gray-600 uppercase'>
              LET&#39;S BUILD SOMETHING TOGETHER
            </p>

            <SocialContent />
          </div>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto mt-12 text-'>
            I’m focused on building responsive front-end web applications.
          </p>

        </div>
      </div>
    </div>
  );
};

