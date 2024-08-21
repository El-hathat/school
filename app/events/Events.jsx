'use client'
import React, { useEffect } from 'react'
import circle from '@/public/images/circle.png'
import Image from 'next/image'
import { Clock9, MapPinHouse } from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Events() {
  useEffect(()=>{
    AOS.init({duration:2000});
    
    },[]);

  const event=  <div className="flex flex-row shadow-sm w-full lg:w-[45%]" data-aos="zoom-out-down">
  <div className="flex flex-col  rounded-sm bg-white w-[200px] h-[100px] border-4 border-dashed border-[#FF8367] shadow-lg">
<h1 className='text-4xl font-bold text-center text-[#FF8367]'>10</h1>
<p className=' text-lg text-center text-nowrap  pr-4'>Jun, 2024</p>
</div>
<div className=" pl-2">
<p className='text-lg font-bold'>Event Title</p>
<div className=" flex flex-row justify-between text-[#ff8367] text-sm pr-3"><p className='flex flex-row'><Clock9 color="#ff8367" width='20px' height='20px'/>9:00 - 15:00</p>
<p className='flex flex-row'> <MapPinHouse color="#ff8367" width='20px' height='20px'/>fes, Maroc</p> 
</div>
<p className='text-[12px] pr-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et pariatur maiores hic earum? Enim labore dolores aliquid nihil commodi.</p>
</div>
  </div>
  return (
    <section className='flex flex-col lg:flex-row mt-4 overflow-x-hidden'>
    <div className="hidden lg:flex lg:w-[20%]">
    <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[50%] left-[70%]' data-aos="fade-up"/>

    </div>

    <div className='w-full ml-2 mr-2 lg:w-[60%]'>
    <h1 className='text-2xl font-bold text-[#FF8367] text-center' data-aos="fade-right">Our Events</h1>
          <p className='text-md lg:text-lg font-bold text-center pb-3' data-aos="fade-left">Upcoming Events</p>

<div className='flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:gap-7'>
  {event} {event} {event} {event} {event} {event}
</div>
        
      </div>
    
    <div className="hidden lg:flex lg:w-[20%]">
    <Image src={circle} alt='' className='hidden lg:flex w-[200px] h-[200px] relative top-[30%] ' data-aos="zoom-in-right"/>

    <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[70%] ' data-aos="zoom-in-down"/>

    </div>

  </section>
  )
}

export default Events