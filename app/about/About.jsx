'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import std from '@/public/images/student1.jpg'
import { CircleCheck } from 'lucide-react'
import circle from '@/public/images/circle.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
function About() {
  useEffect(()=>{
    AOS.init({duration:2000});
    
    },[]);
  return (
    <section className='flex flex-col lg:flex-row ' >
      <div className="ml-2 mr-2 lg:w-1/2 lg:flex lg:justify-center ">
        <div className='lg:hidden'>
          <h1 className='text-2xl font-bold text-[#FF8367] text-center' data-aos="fade-right">About Us</h1>
          <p className='text-xl font-semibold text-center' data-aos="fade-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[70%] ' data-aos="fade-up"/>
<Image src={std} alt=" " className='rounded-[30px] lg:mt-[100px] lg:w-[500px] lg:h-[500px] lg:rounded-[50%] mt-2 ' data-aos="fade-down"/>
<div className=" hidden lg:flex rounded-[50%] bg-white w-[150px] h-[150px] relative left-[80%] top-[-20%] justify-center items-center shadow-md">
  
  <div className="flex flex-col pt-4 rounded-[50%] bg-white w-[130px] h-[130px] border-4 border-dashed border-[#FF8367]" data-aos="zoom-out-down">
  <h1 className='text-2xl font-bold text-center text-[#FF8367]'>50</h1>
  <p className='font-semibold text-center text-wrap' >Years of Experience</p>
  </div>
</div>
</div>
      </div>
      {/* ##################################################3 */}
      <div className=" pl-3 pr-2 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:gap-3 lg:pl-10 lg:pr-10">
      <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative   left-[80%]' data-aos="zoom-in-right"/>

      <div className='hidden lg:flex lg:flex-col'>
          <h1 className='text-2xl  font-bold text-[#FF8367] text-center' data-aos="fade-right">About Us</h1>
          <p className='text-2xl mt-2 font-semibold text-center ' data-aos="fade-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        
        </div>
        <p className='text-sm lg:text-lg pl-4 pt-3 pb-3 pr-2 lg:w-[90%]' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit optio ipsa soluta est, aspernatur recusandae molestiae, facilis magnam ullam magni eaque tempore quibusdam odit neque aut itaque ex ab.</p>
      <div className="flex text-sm lg:text-lg font-semibold  gap-2 pb-2 lg:pl-4" data-aos="fade-up"><CircleCheck color='#FF8367' /> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
      <div className=" flex text-sm lg:text-lg gap-2 font-semibold lg:pl-4" data-aos="fade-up"><CircleCheck color='#FF8367'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
      <button data-aos="fade-up" type="button" className=" mt-3 w-[200px] ml-[25%] focus:outline-none text-white bg-[#FF8367] hover:bg-[#eda0a8] focus:ring-4 focus:ring-[#FF8367] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Read more</button>

      </div>
    </section>
  )
}

export default About