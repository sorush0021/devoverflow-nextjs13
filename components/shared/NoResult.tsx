/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Props {
    title:string
    description:string
    link:string 
    linkTitle:string 
}


const NoResult = ({title ,description ,link , linkTitle}:Props) => {
  return (
    <div className='mt-10 w-full flex-col items-center justify-center'>
        <Image 
        src='/assets/images/light-illustration.png'
        alt='No result illustration'
        width={270}
        height={200}
        className='block object-contain dark:hidden'/>
        <Image 
        src='/assets/images/dark-illustration.png'
        alt='No result illustration'
        width={270}
        height={200}
        className='hidden object-contain dark:flex'/>
        <h2 className='h2-bold text-dark200_light900'> {title}</h2>
        <p className='body-regular text-dark500_light700 my-3.5
        max-w-md  text-center'>{description} 💡</p>
        
        <Link href={link} className='flex justify-end max-sm:w-full'>
      <Button className='paragraph-medium bg-primary-500t min-h-[46px] rounded-lg
      px-4 py-3 !text-light-900 hover:bg-primary-500 dark:bg-light-900 ' >
        {linkTitle}
      </Button>
      </Link>

        </div>
        
  )
}

export default NoResult