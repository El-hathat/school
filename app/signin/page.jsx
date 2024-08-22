import React from 'react'
import logo from '@/public/images/logo.png'
import circle from '@/public/images/circle.png'
import Image from 'next/image'
function page() {
  return (
    <div   className='w-full  h-[100%]  absolute bg-no-repeat bg-cover ' style={{backgroundImage: 'url(https://img.freepik.com/photos-gratuite/abstrait-bleu-art-enfume_53876-110800.jpg)'}}>
    <div   className='lg:w-full w-[100%] h-[100%] lg:h-auto flex flex-row lg:mt-[10%]' >
      <div   className="hidden lg:flex lg:w-[10%]">
    <Image src={circle} alt=''   className='hidden lg:flex w-16 h-16 relative top-[50%] left-[70%]' />

    </div>
      <div   className="lg:w-[70%] flex w-full max-w-sm mx-auto overflow-hidden bg-white bg-opacity-30   rounded-lg shadow-lg   lg:max-w-4xl">
    <div   className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage: 'url(https://img.freepik.com/photos-premium/fille-est-assise-devant-ordinateur-mot-mathematiques-tableau-noir_1104772-4194.jpg)'}}></div>

    <div  className="w-full  max-w-sm mx-auto overflow-hidden bg-white bg-opacity-30 lg:bg-opacity-0  rounded-lg shadow-md  ">
    <div  className="px-6 py-4">
        <div  className="flex justify-center mx-auto">
            <Image  className="w-[130px] h-[100px] " src={logo} alt=""/>
        </div>

        <h3  className="mt-3 text-xl font-medium text-center text-white ">Welcome Back</h3>

        <p  className="mt-1 text-center text-white ">Login or create account</p>

        <form>
            <div  className="w-full mt-4">
                <input  className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-200 bg-white bg-opacity-30  border rounded-lg    focus: border-[#ff8367]  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#ff8367]" type="email" placeholder="Email Address" aria-label="Email Address" />
            </div>

            <div  className="w-full mt-4">
                <input  className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-200 bg-white bg-opacity-30  border rounded-lg   focus: border-[#ff8367]  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#ff8367]" type="password" placeholder="Password" aria-label="Password" />
            </div>

            <div  className="flex items-center justify-between mt-4">
                <a href="#"  className="text-sm text-white  hover:text-white">Forget Password?</a>

                <button  className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff8367] rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign In
                </button>
            </div>
        </form>
    </div>

    <div  className="flex items-center justify-center py-4 text-center ">
        <span  className="text-sm text-white ">Don't have an account? </span>

        <a href="#"  className="mx-2 text-sm font-bold text-[#ff8367]  hover:underline  ">Register</a>
    </div>
</div>
</div>
<div   className="hidden lg:flex lg:w-[20%]">
    <Image src={circle} alt=''   className='hidden lg:flex w-[200px] h-[200px] relative top-[5%] ' data-aos="zoom-in-right"/>

    <Image src={circle} alt=''   className='hidden lg:flex w-16 h-16 relative top-[70%] ' data-aos="zoom-in-down"/>

    </div>
    </div>
    </div>
  )
}

export default page