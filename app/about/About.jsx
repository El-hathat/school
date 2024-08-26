'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import std from '@/public/images/student1.jpg'
import { CircleCheck } from 'lucide-react'
import circle from '@/public/images/circle.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
function About() {
  const [view,setView]=useState(false)
  const viewHandle=()=>{
    setView(!view)
  }
  useEffect(()=>{
    AOS.init({duration:1000});
    
    },[]);
  return (
    <section className='flex flex-col lg:flex-row ' >
      <div className="ml-2 mr-2 lg:w-1/2 lg:flex lg:justify-center ">
        <div className='lg:hidden'>
          <h1 className='text-2xl font-bold text-[#FF8367] text-center' data-aos="fade-right">A Propos de Nous</h1>
          <p className='text-xl font-semibold text-center' data-aos="fade-left">Chez NL School, nous sommes dedies a offrir une experience educative numerique innovante.</p>
        </div>
        <div>
          <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[70%] ' data-aos="fade-up"/>
<Image src={std} alt=" " className='rounded-[30px] lg:mt-[100px] lg:w-[500px] lg:h-[500px] lg:rounded-[50%] mt-2 ' data-aos="fade-down"/>
<div className=" hidden lg:flex rounded-[50%] bg-white w-[150px] h-[150px] relative left-[80%] top-[-20%] justify-center items-center shadow-md">
  
  <div className="flex flex-col pt-4 rounded-[50%] bg-white w-[130px] h-[130px] border-4 border-dashed border-[#FF8367]" data-aos="zoom-out-down">
  <h1 className='text-2xl font-bold text-center text-[#FF8367]'>50</h1>
  <p className='font-semibold text-center text-wrap' >ans <br/>d'experience</p>
  </div>
</div>
</div>
      </div>
      {/* ##################################################3 */}
      <div className=" pl-3 pr-2 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:gap-3 lg:pl-10 lg:pr-10">
      <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative   left-[80%]' data-aos="zoom-in-right"/>

      <div className='hidden lg:flex lg:flex-col'>
          <h1 className='text-2xl  font-bold text-[#FF8367] text-center' data-aos="fade-right">A Propos de Nous</h1>
          <p className='text-2xl mt-2 font-semibold text-center ' data-aos="fade-left">Chez NL School, nous sommes dedies a offrir une experience educative numerique innovante.</p>
        
        </div>
            <div className="flex text-sm lg:text-md pt-4 gap-2 pb-2 lg:pl-4" data-aos="fade-up"><CircleCheck color='#FF8367' className='min-w-8 max-w-8  max-h-8 min-h-8'/> <p className='h-[40px] ' style={view?{overflow:'visible',height:'100%'}:{overflow:'hidden',textOverflow:'ellipsis',height:'20px'}}>
              Notre mission est de simplifier la gestion scolaire en {view?'':'...'} fournissant une plateforme intuitive {view?'':'...'} {view?'':<br/>}et facile a
utiliser, qui renforce la communication entre les eleves, les parents, et les enseignants.</p></div>
      <div className=" flex text-sm lg:text-md gap-2  lg:pl-4    " data-aos="fade-up"><CircleCheck color='#FF8367' className='min-w-8 max-w-8  max-h-8 min-h-8 mt-[0px]'/><p className='h-[40px] ' style={view?{overflow:'visible',height:'100%'}:{overflow:'hidden',textOverflow:'ellipsis',height:'20px'}}>
        Avec NL School, vous avez acces a des outils {view?'':'...'} pedagogiques de pointe qui favorisent un
apprentissage actif et autonome. Nous croyons que l'education doit etre accessible, flexible, et
adaptee aux besoins de chaque etudiant. Rejoignez-nous pour decouvrir comment nous
revolutionnons l'education grace a la technologie.</p></div>
      <button data-aos="fade-up" type="button" onClick={viewHandle} className="mt-4 lg:mt-0  w-[200px] ml-[25%] focus:outline-none text-white bg-[#FF8367] hover:bg-[#eda0a8] focus:ring-4 focus:ring-[#FF8367] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Voir plus</button>

      </div>
    </section>
  )
}

export default About