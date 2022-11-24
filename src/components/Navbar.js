import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <div className='flex items-center justify-center w-full mt-8'>
      <div className='flex items-center justify-between w-full'>
        <Image src={logo} alt="logo" width={50}/>
        <div>
          <ul className='flex items-center gap-10'>
            <li>About</li>
            <li>
              <button className='rounded-full border-2 text-accent border-accent hover:text-white hover:bg-accent transition-all px-3 py-2'>Download App</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
