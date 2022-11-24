import React from 'react'
import Image from 'next/image'
import name_logo from '../assets/name_logo.svg'
export default function Footer() {
  return (
    <div className='bg-accent w-full flex flex-col items-center justify-center gap-4 p-5'>
        <Image src={name_logo} alt='logo' width={70}/>
        <p className='text-sm text-white'>Made by <a href='https://abigailkayeunating.vercel.app' rel='noreferrer' target='_blank' className='underline'>Abigail</a> with ❤️</p>
    </div>
  )
}
