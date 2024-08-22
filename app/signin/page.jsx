import React from 'react'
import logo from '@/public/images/logo.png'
import circle from '@/public/images/circle.png'
import Image from 'next/image'
function page() {
  return (
    <div className='w-full  h-[100%]  absolute bg-no-repeat bg-cover ' style={{backgroundImage: 'url(https://img.freepik.com/photos-gratuite/abstrait-bleu-art-enfume_53876-110800.jpg)'}}>
    <div className='w-full h-auto flex flex-row lg:mt-[10%] mt-[50%]' >
      <div className="hidden lg:flex lg:w-[10%]">
    <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[50%] left-[70%]' data-aos="fade-up"/>

    </div>
      <div className="lg:w-[70%] flex w-full max-w-sm mx-auto overflow-hidden bg-white bg-opacity-30  rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
    <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage: 'url(https://img.freepik.com/photos-premium/fille-est-assise-devant-ordinateur-mot-mathematiques-tableau-noir_1104772-4194.jpg)'}}></div>

    <div class="w-full max-w-sm mx-auto overflow-hidden bg-white bg-opacity-30  bg-opacity-30 rounded-lg shadow-md dark:bg-gray-800">
    <div class="px-6 py-4">
        <div class="flex justify-center mx-auto">
            <Image class="w-[130px] h-[100px] " src={logo} alt=""/>
        </div>

        <h3 class="mt-3 text-xl font-medium text-center text-white dark:text-gray-200">Welcome Back</h3>

        <p class="mt-1 text-center text-white dark:text-gray-400">Login or create account</p>

        <form>
            <div class="w-full mt-4">
                <input class="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white bg-opacity-30  border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
            </div>

            <div class="w-full mt-4">
                <input class="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white bg-opacity-30  border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
            </div>

            <div class="flex items-center justify-between mt-4">
                <a href="#" class="text-sm text-white dark:text-gray-200 hover:text-white">Forget Password?</a>

                <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign In
                </button>
            </div>
        </form>
    </div>

    <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span class="text-sm text-white dark:text-gray-200">Don't have an account? </span>

        <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</a>
    </div>
</div>
</div>
<div className="hidden lg:flex lg:w-[20%]">
    <Image src={circle} alt='' className='hidden lg:flex w-[200px] h-[200px] relative top-[5%] ' data-aos="zoom-in-right"/>

    <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[70%] ' data-aos="zoom-in-down"/>

    </div>
    </div>
    </div>
  )
}

export default page