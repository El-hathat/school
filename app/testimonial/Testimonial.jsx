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
    AOS.init({duration:1000});
    
    },[]);






  return (
    <section className='flex flex-col items-center lg:flex-row mt-16 bg-[#f99f8a1f] h-[600px] overflow-y-hidden'>
    <div className="hidden w-[10%] lg:flex">
    <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[70%] left-[60%]' data-aos="fade-right"/>

    </div>
    <div className=" lg:w-[35%] flex flex-col items-center lg:justify-center ">
    <h1 className='text-2xl font-bold text-[#FF8367] text-center' data-aos="zoom-in-right">Témoignage</h1>
        <p className='text-xl font-semibold text-center pb-3' data-aos="zoom-in-down">Voyez ce que dit notre client</p>
        <p className='text-sm lg:text-lg pl-6 pt-1 pb-3 pr-6 lg:w-[90%]  text-center' data-aos="fade-up">Bienvenue sur notre page Témoignages, où nos élèves, parents, et enseignants partagent leurs expériences authentiques. Découvrez comment notre école a marqué leurs parcours et laissez-vous inspirer par leurs histoires, reflet de notre engagement et passion.</p>
      

    </div>
    <div className="w-full lg:w-[50%] flex flex-col lg:flex-row  lg:flex-wrap items-center pt-4 gap-8 h-full lg:h-[500px] pl-2 pr-2 overflow-x-hidden overflow-y-hidden"  data-aos="fade-left">
     <Swip />
      
    </div>
      <div className="hidden w-[10%] lg:flex">
    <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative   top-[30%]' data-aos="fade-up"/>

    </div>
  </section>
  )
}

export default Testimonial