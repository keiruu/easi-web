import React from 'react'
import Image from 'next/image'
import name_logo from '../assets/logo.svg'
export default function Footer() {
  return (
    <div className='bg-accent w-full flex flex-col items-center justify-center gap-4 p-5'>
        <Image src={name_logo} alt='logo' width={35}/>
        <div className='flex flex-col gap-0 items-center'>
          <a href='https://github.com/keiruu/easi-web' rel='noreferrer' target='_blank' className='text-sm text-white hover:text-light'>Github Repo</a>
          <p className='font-light text-sm text-white'>Website built using Next.js, Tailwind.css, and React</p>
        </div>
    </div>
  )
}
