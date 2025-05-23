"use client"
import React, { useContext, useEffect, useState } from 'react'
import {  LogIn } from 'lucide-react';
import logo from '@/public/images/logo2.png'
import Image from 'next/image'
import Accueil from '../accueil/Accueil';
import About from '../about/About';
import Services from '../services/Services';
import Events from '../events/Events';
import Testimonial from '../testimonial/Testimonial';
import News from '../news/News';

import Footer from '../footer/Footer';
import Watch from '../watch/Watch';
function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='overflow-x-hidden'>
      <header className="bg-[#ffffff] bg-opacity-95 lg:bg-opacity-100 lg:bg-white fixed z-[400] w-full shadow-md">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12 lg:flex lg:justify-start">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Accueil</span>
                <Image src={logo} alt="logo" className='w-auto h-16'/>
              </a>
            </div>

            <div className={`hidden md:block ${isMenuOpen ? 'block' : ''}`}>
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-xl font-bold">
                <li>
                <a href="/" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium     text-[#ff8367] inline-block">
<span  className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ff8367] group-hover:h-full opacity-90"></span>
<span  className="relative group-hover:text-white">Accueil</span>
</a>
                </li>
                <li>
                <a href="#about" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium     text-[#ff8367] inline-block">
<span  className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ff8367] group-hover:h-full opacity-90"></span>
<span  className="relative group-hover:text-white">Apropos </span>
</a>
                </li>
                <li>
                <a href="#services" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium     text-[#ff8367] inline-block">
<span  className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ff8367] group-hover:h-full opacity-90"></span>
<span  className="relative group-hover:text-white">Services</span>
</a>
                </li>
                <li>
                <a href="#events" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium     text-[#ff8367] inline-block">
<span  className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ff8367] group-hover:h-full opacity-90"></span>
<span  className="relative group-hover:text-white">Evenements</span>
</a>
                </li>
                <li>
                <a href="#news" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium     text-[#ff8367] inline-block">
<span  className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ff8367] group-hover:h-full opacity-90"></span>
<span  className="relative group-hover:text-white">Actualités</span>
</a>
                </li>
                <li>
                <a href="/contact" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium     text-[#ff8367] inline-block">
<span  className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ff8367] group-hover:h-full opacity-90"></span>
<span  className="relative group-hover:text-white">Contactez-nous</span>
</a>
                </li>
                </ul>
              </nav>
            </div>

            <div className="flex flex-row  gap-1">
              <div  className="sm:flex sm:gap-4">
              

                <a href='/signin' className='flex flex-row  pt-[6px]'><p className='text-[#ff8367] font-bold text-md ml-3 '>Login</p><LogIn color="#ff8367" /></a>
                              </div>

              <div className="block md:hidden">
                <button 
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <nav aria-label="Global" className=''>
              <ul className="flex flex-col items-center gap-4 text-sm">
                <li>
                <a href="/" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium     text-[#ff8367] inline-block">
<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ff8367] group-hover:h-full opacity-90"></span>
<span className="relative group-hover:text-white font-bold" onClick={toggleMenu}>Accueil</span>
</a>
                </li>
                <li>
                <a href="#about" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium     text-[#ff8367] inline-block">
<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ff8367] group-hover:h-full opacity-90"></span>
<span className="relative group-hover:text-white font-bold" onClick={toggleMenu}>Apropos</span>
</a>
                </li>
                <li>
                <a href="#services"  className="px-5 py-2.5 relative rounded group overflow-hidden font-medium     text-[#ff8367] inline-block">
<span  className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ff8367] group-hover:h-full opacity-90"></span>
<span  className="relative group-hover:text-white font-bold" onClick={toggleMenu}>Services</span>
</a>
                </li>
                <li>
                <a href="#events"  className="px-5 py-2.5 relative rounded group overflow-hidden font-medium     text-[#ff8367] inline-block">
<span  className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ff8367] group-hover:h-full opacity-90"></span>
<span  className="relative group-hover:text-white font-bold" onClick={toggleMenu}>Evenements</span>
</a>
                </li>
                <li>
                <a href="#news"  className="px-5 py-2.5 relative rounded group overflow-hidden font-medium     text-[#ff8367] inline-block">
<span  className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ff8367] group-hover:h-full opacity-90"></span>
<span  className="relative group-hover:text-white font-bold" onClick={toggleMenu}>Actualités</span>
</a>
                </li>
                <li>
                <a href="/contact"  className="px-5 py-2.5 relative rounded group overflow-hidden font-medium     text-[#ff8367] inline-block">
<span  className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#ff8367] group-hover:h-full opacity-90"></span>
<span  className="relative group-hover:text-white font-bold" onClick={toggleMenu}> Contactez-nous</span>
</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
      <div className='lg:pt-[100px] pt-6'>
    <Accueil /> 
      <div id='about'><About/> </div>
      <div><Watch /> </div>
      <div id='services'><Services /></div>
      <div id='events'><Events /> </div>
      <div id='test'><Testimonial /> </div>
      <div id='news'><News /></div>
      <Footer />
    </div></div>
  );
}

export default Header;