import React from 'react'
import Image from 'next/image'
import logo from '../assets/name_logo.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import { saveAs } from 'file-saver';

export default function Navbar() {
  const handleDownload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'easi.apk', true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      const url = window.URL.createObjectURL(xhr.response);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'easi.apk';
      document.body.appendChild(a);
      a.click();
      a.remove();
    };
    xhr.send();
  };

  return (
    <div className='flex items-center justify-center w-full mt-8'>
      <div className='flex items-center justify-between w-full'>
        <Link href="/"><Image src={logo} alt="logo" width={90}/></Link>
        <div>
          <ul className='flex items-center gap-6 lg:gap-10 lg:text-md text-sm'>
            <li className='hover:text-accent transition-all'>
              <Link href="/about">About</Link>
            </li>
            <li>
              <button onClick={handleDownload} className='rounded-full border-2 text-accent border-accent hover:text-white hover:bg-accent transition-all px-3 py-2'>Download App</button>
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
