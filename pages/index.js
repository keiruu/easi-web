import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Textfield from '../src/components/Textfield'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='text-primary flex flex-col items-center justify-center w-full'>
      <div className='w-[70%]'>
        <Navbar/>
        <Textfield/>
      </div>
      <footer className='w-full'>
        <Footer/>
      </footer>
    </div>
  )
}
