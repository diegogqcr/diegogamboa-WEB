import {ReactNode} from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';



function SocialLink({ url, children }: { url: string; children: ReactNode}){
    return(
      <a
        className='p-6 duration-300 ease-in rounded-full shadow-sm cursor-pointer shadow-gray-300 hover:scale-110'
        target="_blank" 
        rel="noreferrer" 
        href={url}>
        {children}
      </a>
    )
  }


export function SocialContent (){
    return (

<div className='flex items-center justify-between max-w-[330px] m-auto py-4 mt-12'>
<SocialLink
  url='https://www.linkedin.com/in/diegogamboaq/'
>
    <FaLinkedinIn />
</SocialLink>
<SocialLink
  url='https://github.com/djgqcr'
>
    <FaGithub />
</SocialLink>
<SocialLink
  url='/#contact'
  >
    <AiOutlineMail />
</SocialLink>
<SocialLink
  url='/resume'
  >
    <BsFillPersonLinesFill />
</SocialLink>

</div>
    );
};