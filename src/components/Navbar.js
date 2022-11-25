import React from 'react'
import Image from 'next/image'
import logo from '../assets/name_logo.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex items-center justify-center w-full mt-8'>
      <div className='flex items-center justify-between w-full'>
        <Link href="/"><Image src={logo} alt="logo" width={85}/></Link>
        <div>
          <ul className='flex items-center gap-6 lg:gap-10 lg:text-md text-sm'>
            <li className='hover:text-accent transition-all'>
              <Link href="/about">About</Link>
            </li>
            <li>
              <button onClick={() => toast('😔 Sorry! The application is not available for download yet')} className='rounded-full border-2 text-accent border-accent hover:text-white hover:bg-accent transition-all px-3 py-2'>Download App</button>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer 
        position='bottom-right'
        theme='colored'
      />
    </div>
  )
}
