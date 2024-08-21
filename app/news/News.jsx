'use client'
import React, { useEffect } from 'react'
import circle from '@/public/images/circle.png'
import Image from 'next/image'
import { CalendarDays } from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css'
function News() {

  useEffect(()=>{
    AOS.init({duration:2000});
    
    },[]);


  const blog= <div className="block lg:w-[330px] mr-4" data-aos="zoom-in-down">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    className="h-40 w-full object-cover sm:h-80 lg:h-96 rounded-md"
  />
  <pre  className=" flex mt-3 w-[200px]  
           text-white bg-[#FF8367]   font-medium rounded-3xl text-md px-5 
            py-2.5 me-2 mb-2 pl-5 relative bottom-8 left-[20%]" data-aos="fade-right"> <CalendarDays color="#ffffff" /> 7 March,2024</pre>
      <div className="hidden w-[10%] lg:flex "></div>
  <h3 className="-mt-8 text-lg font-bold text-gray-900 sm:text-xl" data-aos="fade-up">Lorem, ipsum dolor.</h3>

  <p className="mt-1 max-w-sm text-gray-700" data-aos="fade-down">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
  </p>
  <button type="button" className=" flex mt-3 w-[120px]  
           text-[#ff8367] hover:shadow-lg  font-medium rounded-lg text-sm px-5 
            py-2.5 me-2 mb-2 ml-[25%]"  data-aos="zoom-in-down">Read more</button>
    
</div>
  




  return (
    <section className='flex flex-col lg:flex-row mt-4 overflow-x-hidden'>
    <div className="hidden lg:flex lg:w-[10%]">
    <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[50%] left-[30%]' data-aos="zoom-in-right"/>

    </div>

    <div className='w-full ml-2 mr-2 lg:w-[75%]'>
    <h1 className='text-2xl font-bold text-[#FF8367] text-center'data-aos="zoom-in-down">Our Blog</h1>
          <p className='text-md lg:text-lg font-bold text-center pb-3'data-aos="zoom-in-right">Latest News Feed</p>

<div className='flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:gap-7'>
  {blog}{blog}{blog}
</div>
        
      </div>
    
    <div className="hidden lg:flex lg:w-[15%]">
    <Image src={circle} alt='' className='hidden lg:flex w-[150px] h-[150px] relative top-[20%] ' data-aos="zoom-out-down"/>

    <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[50%] ' data-aos="zoom-in-down"/>

    </div>

  </section>
  )
}

export default News