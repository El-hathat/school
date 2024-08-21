import React from 'react'
import circle from '@/public/images/circle.png'
import Image from 'next/image'
function Watch() {
  return (
    <section className='flex flex-col lg:flex-row mt-4'>
      <div className="hidden lg:flex lg:w-[20%]">
      <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[50%] left-[70%]'/>

      </div>

      <div className=' ml-2 mr-2 lg:w-[60%]'>
          <h1 className='text-2xl font-bold text-[#FF8367] text-center'>Watch Us</h1>
          <p className='text-xl font-semibold text-center pb-3'>Lorem ipsum sit amet consectetur.</p>
          <video className="h--16 w-full rounded-xl " controls autoPlay>
      <source src="https://videos.pond5.com/office-desk-modern-start-workflow-footage-092174388_main_xxl.mp4" type="video/mp4" />
    
    </video>
        </div>
      
      <div className="hidden lg:flex lg:w-[20%]">
      <Image src={circle} alt='' className='hidden lg:flex w-[200px] h-[200px] relative top-[30%] '/>

      <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[70%] '/>

      </div>

    </section>
  )
}

export default Watch