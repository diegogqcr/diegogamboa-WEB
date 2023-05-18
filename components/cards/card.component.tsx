import Image from 'next/image';
import Css from '../../public/assets/skills/css.png';
import { w } from 'windstitch'
import { CardProps } from './card.type'

export function Card({
    children,
    src='',
    ...props
}:CardProps) {
return(
    <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
        <div className="grid items-center justify-center grid-cols-2 gap-4">
            <div className="m-auto">
                <Image src={''} width={38} height={38} alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
            </div>
        </div>
    </div>
)   
}

export const CardSection = w.section(
    'relative w-full min-w-full max-w-screen-lg rounded-2xl font-medium px-5',
    {
      variants: {
        hover: {
          shadow: 'transition-shadow hover:shadow-md',
          none: '',
        },
        padding: {
          default: 'px-0 py-4 md:py-[1.875rem] md:px-5',
          none: '',
        },
        border: {
          default: 'border border-gray-100',
          none: '',
        },
      },
      defaultVariants: {
        hover: 'shadow',
        padding: 'default',
        border: 'default',
      },
    },
  )