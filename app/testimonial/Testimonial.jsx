'use client'
import React, { useEffect } from 'react'
import circle from '@/public/images/circle.png'
import Image from 'next/image'
import Swip from './Swip'
import { Quote } from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Testimonial() {

  useEffect(()=>{
    AOS.init({duration:2000});
    
    },[]);






  return (
    <section className='flex flex-col items-center lg:flex-row mt-16 bg-[#f99f8a1f] h-[500px] '>
    <div className="hidden w-[10%] lg:flex">
    <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[70%] left-[60%]' data-aos="fade-right"/>

    </div>
    <div className=" lg:w-[35%] flex flex-col items-center lg:justify-center ">
    <h1 className='text-2xl font-bold text-[#FF8367] text-center' data-aos="zoom-in-right">Testimonial</h1>
        <p className='text-xl font-semibold text-center pb-3' data-aos="zoom-in-down">Se what our client say's</p>
        <p className='text-sm lg:text-lg pl-6 pt-1 pb-3 pr-6 lg:w-[90%]  text-center' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit optio ipsa soluta est, aspernatur recusandae molestiae, facilis magnam ullam magni eaque tempore quibusdam odit neque aut itaque ex ab.</p>
      

    </div>
    <div className="w-full lg:w-[50%] flex flex-col lg:flex-row  lg:flex-wrap items-center pt-4 gap-8 h-[1320px] lg:h-[500px] pl-2 pr-2 overflow-x-hidden"  data-aos="fade-left">
     <Swip />
      
    </div>
      <div className="hidden w-[10%] lg:flex">
    <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative   top-[30%]' data-aos="fade-up"/>

    </div>
  </section>
  )
}

export default Testimonial