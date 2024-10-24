'use client'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import cov from '@/public/images/student.jpg'
import circle from '@/public/images/circle.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Accueil() {
  useEffect(()=>{
    AOS.init({duration:1000});
    
    },[]);
  return (
<section className=" lg:flex z-10">
  <div className='hidden lg:flex flex-col w-[20%]'>
  <Image src={circle} data-aos="fade-up" alt="" className='ml-[15%] mt-6 z-0 w-[200px] h-[200px]'/>
  <Image src={circle} data-aos="fade-down" alt="" className=' mt-10 ml-[60%] z-0 w-[100px] h-[100px]'/>

  </div>
<div className="lg:w-[40%] pl-6 flex lg:pt-0 flex-col gap-4 pt-16">
  <div className="hidden"></div>
  <div className="">
    <h1 className='text-2xl font-bold text-center  lg:pr-20 pb-4 lg:pt-4' data-aos="fade-right">Bienvenue sur NL School, votre portail complet de gestion scolaire.</h1>
    <p className='hidden lg:flex pl-10 pr-10 lg:text-sm lg:w-[500px]' data-aos="fade-left">Concu pour faciliter l'experience
educative numerique, notre portail vous permet d'acceder facilement a toutes les ressources dont
vous avez besoin pour reussir academiquement. Ici, vous pouvez suivre vos cours en ligne,
soumettre vos devoirs, et consulter vos performances scolaires en temps reel. <br/><br/> Connectez-vous des maintenant pour decouvrir toutes les fonctionnalites disponibles et commencez
a optimiser votre parcours educatif avec nous.</p>
  </div>        
  <form action="#" data-aos="zoom-out-down" className="lg:flex hidden  lg:pt-3 lg:w-[120%] pl-3 pr-3 bg-white lg:h-16 rounded-md justify-between mt-4 z-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
        <div className="sm:flex-1 lg:flex">
          <label htmlFor="email" className="sr-only">Email</label>
<div className='lg:flex lg:pt-2 hidden'><Mail color="#ff8367" /><pre className='text-wrap lg:w-40'>Email addresse  |</pre></div>
          <input
            type="email"
            placeholder="info@gmail.com"
            className="w-full rounded-md lg:mr-2 border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 lg:h-9 z-20"
          />
        </div>

        <a
        href='/signup'
              className="group z-40 mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto lg:h-9"
        >
          <span className="text-sm font-medium"> S'inscrire </span>

          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </form>
<Image src={circle}  alt="" className='hidden lg:flex ml-[85%] z-0 w-[50px] h-[50px]'/>
</div>
<div className="lg:w-[40%] lg:h-[80%] -z-10">
  <Image src={cov}  alt="" className='z-0 rounded-md lg:h-[420px] lg:w-[80%]'data-aos="fade-up"/>
  <div className=" ml-16 lg:w-[400px] top-[200px] right-0 lg:h-[400px] bg-[#FF8367] opacity-20 absolute -z-10"></div>
  <p className='lg:hidden pt-2 pl-5 pr-5' data-aos="fade-right">Concu pour faciliter l'experience
educative numerique, notre portail vous permet d'acceder facilement a toutes les ressources dont
vous avez besoin pour reussir academiquement. Ici, vous pouvez suivre vos cours en ligne,
soumettre vos devoirs, et consulter vos performances scolaires en temps reel. <br /> <br />Connectez-vous des maintenant pour decouvrir toutes les fonctionnalites disponibles et commencez
a optimiser votre parcours educatif avec nous.</p>

</div>
<form action="#" data-aos="zoom-out-down" className="flex flex-col lg:hidden sm:gap-4 lg:pt-3 lg:w-[150%] pl-3 pr-3 bg-white lg:h-16 rounded-md mt-4 ">
        <div className="sm:flex-1 lg:flex">
          <label htmlFor="email" className="sr-only">Email</label>
<div className='lg:flex    hidden'><Mail color="#ff8367" /><pre className='text-wrap lg:w-40'>Email addresse  |</pre></div>
          <input
            type="email"
            placeholder="info@gmail.com"
            className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 lg:h-9"
          />
        </div>

        <a
        href='/signup'
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto lg:h-9"
        >
          <span className="text-sm font-medium"> S'inscrire </span>

          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </form>
</section>
  
  )
}

export default Accueil