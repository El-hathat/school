import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import whatsapp from '@/public/icones/whatsapp.png'

function page() {
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <div>
            <p class="font-bold text-[#ff8367] dark:text-[#ff8367] text-2xl text-center">Contact us</p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Lorem ipsum lorem lorem</h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima non commodi illo porro pariatur ad repellat velit facere eveniet amet!</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className='flex items-center justify-evenly'>
                    <div class="inline-block p-3 h-12 w-12 text-blue-500 rounded-full bg-[#f9c3b77d]  ">
                    <Mail color="#ff8367" />
                    </div>
                    <div>
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 w-[200px]">contactez-nous par email</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-[#ff8367]">info@example.com</p></div>
                </div>

                <div className='flex items-center justify-evenly'>
                    <div class="inline-block h-12 w-12 p-3 text-blue-500 rounded-full bg-[#f9c3b77d]   ">
                        <Image src={whatsapp} alt='' className='w-6 h-6'/>
                    </div>
                    <div>
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Whatssap</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Contactez-nous sur whatsapp.</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-[#ff8367]"><a href="https://wa.me/+212694286773">Démarrer la discussion</a></p></div>
                </div>

                <div className='flex items-center justify-evenly '>
                    <div class="inline-block h-12 w-12 p-3 text-blue-500 rounded-full bg-[#f9c3b77d]   ">
                    <MapPin color="#ff8367" />
                    </div>
                    <div>
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Localisation</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 w-[150px]"><a href="https://www.google.com/maps/place/34%C2%B001'42.7%22N+5%C2%B000'04.6%22W/@34.0285301,
                    -5.0038543,17z/data=!3m1!4b1!4m4!3m3!8m2!3d34.0285301!4d-5.0012794?entry=ttu" className='no-underline '>https://www.google.com/maps/place</a></p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-[#ff8367] w-[200px]">rue 13, Hay el-massira,Riad salam, fes</p></div>
                </div>

                <div className='flex items-center justify-evenly'>
                    <div class="inline-block h-12 w-12 p-3 text-blue-500 rounded-full bg-[#f9c3b77d]   ">
                    <Phone color="#ff8367" />
                    </div>
                    <div>
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Tel</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Lundi-Samedi , 8:00 to 18:00</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-[#ff8367]">+212 61234-5678</p>
                    </div>
                </div>
            </div>

            <div class="p-4 py-6 rounded-lg bg-gray-50   md:p-8">
                <form>
                    <div class="-mx-2 md:items-center md:flex">
                        <div class="flex-1 px-2">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Prenom</label>
                            <input type="text" placeholder="Prenom " class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#ff8367] dark:focus:border-[#ff8367] focus:ring-[#ff8367] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1 px-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nom</label>
                            <input type="text" placeholder="Nom" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#ff8367] dark:focus:border-[#ff8367] focus:ring-[#ff8367] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                        <input type="email" placeholder="info@example.com" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#ff8367] dark:focus:border-[#ff8367] focus:ring-[#ff8367] focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#ff8367] dark:focus:border-[#ff8367] focus:ring-[#ff8367] focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff8367] rounded-lg hover:bg-[#ff8367] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default page