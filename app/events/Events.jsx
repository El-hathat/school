'use client'
import React, { useEffect } from 'react'
import circle from '@/public/images/circle.png'
import Image from 'next/image'
import { Clock9, MapPinHouse } from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import rp from '@/public/images/meet.jpg'
import odd from '@/public/images/odd.png'
import ae from '@/public/images/ae.png'




const enentsArray=[
  {img:rp,
  titre:'Reunions parents-professeurs',
  day:31,
  periode:'9:00-12:30',
  date:'aout,2024',
  adresse:'Fes,Maroc',
description:'Programmez vos rendez-vous et preparez-vous aux reunions pour discuter des progres de votre enfant.'
},
{img:odd,
titre:'Journees portes ouvertes',
day:10,
periode:'9:00-16:30',
date:'sept,2024',
adresse:'Taounate,Maroc',
description:'Soumettez vos devoirs en ligne facilement et suivez vos delais de soumission.'
},
{img:ae,
titre:"Ateliers educatifs",
day:23,
periode:'10:00-14:00',
date:'sept,2024',
adresse:'Taza,Maroc',
description:'Participez aux journees portes ouvertes pour decouvrir de nouvelles opportunites d\'apprentissage.'
}
]

function Events() {
  useEffect(()=>{
    AOS.init({duration:1000});
    
    },[]);


  return (
    <section className='flex flex-col lg:flex-row mt-4 overflow-x-hidden'>
    <div className="hidden lg:flex lg:w-[20%]">
    <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[50%] left-[70%]' data-aos="fade-up"/>

    </div>

    <div className='w-full ml-2 mr-2 lg:w-[60%]'>
    <h1 className='text-2xl font-bold text-[#FF8367] text-center' data-aos="fade-right">Événements à venir</h1>
          <p className='text-md lg:text-lg font-bold text-center pb-3' data-aos="fade-left">Ne manquez aucun evenement important de votre ecole ! Sur la plateforme NL School, vous
pouvez rester a jour avec tous les evenements a venir tels que :</p>

<div className='flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:gap-7 lg:mt-8'>
  
{
enentsArray?.map((item,index)=>(

<div className="flex flex-row shadow-sm w-full lg:w-[45%]" data-aos="zoom-out-down" key={index}>
  <div className="flex flex-col  rounded-sm bg-white w-[100px] h-[100px] border-4 border-dashed border-[#FF8367] shadow-lg">
<h1 className='text-4xl font-bold text-center text-[#FF8367]'>{item?.day}</h1>
<p className=' text-lg text-center text-nowrap  pr-4'>{item?.date}</p>
</div>
<div className=" pl-2">
<p className='text-lg font-bold'>{item?.titre}</p>
<div className=" flex flex-row justify-between text-[#ff8367] text-sm pr-3"><p className='flex flex-row'><Clock9 color="#ff8367" width='20px' height='20px'/>{item?.periode}</p>
<p className='flex flex-row'> <MapPinHouse color="#ff8367" width='20px' height='20px'/>{item?.adresse}</p> 
</div>
<p className='text-[12px] pr-1'>{item?.description}</p>
</div>
  </div>
))
}
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