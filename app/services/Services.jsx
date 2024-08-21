'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import circle from '@/public/images/circle.png'
import serv from '@/public/images/serv.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Services() {

  useEffect(()=>{
    AOS.init({duration:2000});
    
    },[]);
const [view,setView]=useState(false)
const viewHandle=()=>{
setView(!view)
}

  const card=<div className="flex flex-col shadow-xl w-[300px] lg:w-[250px] rounded-md items-center" data-aos="zoom-out-down">
  <Image
    alt=""
    src={serv}
    className="h-16 rounded-full w-16 object-cover "
  />

  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lorem, ipsum dolor.</h3>

  <p className="mt-2 max-w-sm text-gray-700 pl-4">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
  </p>
</div>




  return (
    <section className='flex flex-col items-center lg:flex-row mt-6'>
      <div className="hidden w-[10%] lg:flex">
      <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[70%] left-[60%]' data-aos="zoom-in-down"/>

      </div>
      <div className=" lg:w-[25%] flex flex-col items-center lg:justify-center ">
      <h1 className='text-2xl font-bold text-[#FF8367] text-center' data-aos="fade-down">Services</h1>
          <p className='text-xl font-semibold text-center pb-3' data-aos="fade-up">Lorem ipsum sit amet consectetur.</p>
          <p className='text-sm lg:text-lg pl-6 pt-1 pb-3 pr-6 lg:w-[90%]  text-center' data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit optio ipsa soluta est, aspernatur recusandae molestiae, facilis magnam ullam magni eaque tempore quibusdam odit neque aut itaque ex ab.</p>
          <button type="button" className="hidden lg:flex mt-3 w-[200px]  focus:outline-none
           text-white bg-[#FF8367] hover:shadow-lg hover:opacity-60 font-medium rounded-lg text-sm px-5 
            py-2.5 me-2 mb-2 " data-aos="zoom-in-down" onClick={viewHandle}>{view?'VIEW LITTLE':'VIEW ALL SERVICES'}</button>

      </div>
      <div className="lg:w-[60%] flex flex-col lg:flex-row  lg:flex-wrap items-center pt-4 gap-8 h-[1320px] lg:h-[500px] overflow-y-hidden" style={view?{overflowY:'visible',height:'auto'}:{overflowY:'hidden'}}>
        
      {card} {card} {card} {card} {card} {card} {card} {card} {card} {card} {card} {card} 
        
      </div>
      <button type="button" className="lg:hidden flex mt-3 w-[200px]  focus:outline-none
           text-white bg-[#FF8367] hover:shadow-lg hover:opacity-60 font-medium rounded-lg text-sm px-5 
            py-2.5 me-2 mb-2 " onClick={viewHandle}>{view?'VIEW LITTLE':'VIEW ALL SERVICES'}</button>
      <div className="hidden w-[10%] lg:flex">
      <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative   top-[30%]' data-aos="zoom-in-down"/>

      </div>
    </section>
  )
}

export default Services