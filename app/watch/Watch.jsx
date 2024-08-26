'use client'
import React, { useEffect } from 'react'
import circle from '@/public/images/circle.png'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Watch() {
  useEffect(()=>{
    AOS.init({duration:1000});
    
    },[]);
  return (
    <section className='flex flex-col lg:flex-row mt-4'>
      <div className="hidden lg:flex lg:w-[20%]">
      <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[50%] left-[70%]' data-aos="fade-up"/>

      </div>

      <div className=' ml-2 mr-2 lg:w-[60%]'>
          <h1 className='text-2xl font-bold text-[#FF8367] text-center' data-aos="fade-left">Regardez-nous</h1>
          <p className='text-xl font-semibold text-center pb-3' data-aos="fade-right">Plongez au Cœur de Notre École en Vidéo !</p>
          <video className="h--16 w-full rounded-xl " controls autoPlay data-aos="zoom-out-down">
      <source src="https://videos.pond5.com/office-desk-modern-start-workflow-footage-092174388_main_xxl.mp4" type="video/mp4" />
    
    </video>
        </div>
      
      <div className="hidden lg:flex lg:w-[20%]">
      <Image src={circle} alt='' className='hidden lg:flex w-[200px] h-[200px] relative top-[30%] ' data-aos="zoom-in-right"/>

      <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[70%] ' data-aos="zoom-in-down"/>

      </div>

    </section>
  )
}

export default Watch