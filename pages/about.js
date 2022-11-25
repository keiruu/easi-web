import React from 'react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
// import { logos } from '../public/west_cict.png'
import Image from 'next/image'
import Head from 'next/head'

export default function about() {
  return (
    <div className='text-primary flex flex-col items-center justify-center w-full'>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <div className='w-full lg:w-[70%] px-5 lg:px-0 flex flex-col justify-center w-full items-center'>
        <Navbar/>
        <div className='flex flex-col gap-10 my-20'>
            <h1 className='font-bold text-4xl lg:text-6xl'>About</h1>
            <p className=' flex text-sm lg:text-md flex-wrap max-w-[700px]'>
                Easi is a text simplification application developed using OpenAI’s newest language model GPT-3. It first started out as a mobile application developed specifically for elementary students and has now been ported on the web for everyone to use.
                <br/>Easi itself was made by Information Technology students from West Visayas State University - Main Campus as part of their Undergraduate Thesis. 
            </p>
            <div>
                <h2 className='font-bold text-xl lg:text-2xl mb-3'>Authors</h2>
                <div className='flex flex-col gap-3 text-sm lg:text-md'>
                    <a rel='noreferrer' target='_target' href='https://www.linkedin.com/in/anghela-abastillas-b42245258/' className='underline hover:text-accent transition-all cursor-pointer'>Anghela Abastillas</a>
                    <a rel='noreferrer' target='_target' href='https://www.linkedin.com/in/nathalie-elgaran-8979a1249/' className='underline hover:text-accent transition-all cursor-pointer'>Nathalie Elgaran</a>
                    <a rel='noreferrer' target='_target' href='https://github.com/CressJane' className='underline hover:text-accent transition-all cursor-pointer'>Cressida Jane Espino</a>
                    <a rel='noreferrer' target='_target' href='https://github.com/znrick' className='underline hover:text-accent transition-all cursor-pointer'>Zenrick Parcon</a>
                    <a rel='noreferrer' target='_target' href='https://www.linkedin.com/in/abbyunat/' className='underline hover:text-accent transition-all cursor-pointer'>Abigail Kaye Unating</a>
                </div>
            </div>
            <div>
                <h2 className='font-bold text-xl lg:text-2xl mb-3'>Special Thanks</h2>
                <div className='flex flex-col gap-3 text-sm lg:text-md'>
                    <p>Prof. Cyreneo Dofitas Jr. - Our supportive Thesis Adviser</p>
                    <p>Prof. Keith Censoro - Our supportive Thesis Co-Adviser</p>
                    <p>Dr. Evans Sansolis - for his help and expertise during our Application Evaluation</p>
                </div>
            </div>
            <div className='flex items-center w-full justify-center my-8'>
                <img className='w-[150px] lg:w-[200px]' src='/west_cict.png' alt='Logo of West Visayas State University and the College of Information Communications Technology'></img>
            </div>
            {/* <Image width={100} src={logos} alt='Logo of West Visayas State University and the College of Information Communications Technology'/> */}
        </div>
      </div>
      <footer className='w-full'>
        <Footer/>
      </footer>
    </div>
  )
}
