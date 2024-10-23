'use client'
import { BookCheck, BookOpenText, CalendarDays, FileChartColumn, LogOut, NotebookPen, ScrollText, Video } from 'lucide-react'
import React from 'react'
import logo from '@/public/images/logo2.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { jwtDecode } from "jwt-decode";

function SideBar() {
  const router = useRouter();
  const deconnexion=()=>{
    localStorage.removeItem("token");
    router.push('/');
  }

  
  return (
    <div className='flex flex-row '>
      <aside className="flex  flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white lg:bg-opacity-100 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
    
    <div className="mx-auto ">
        <Image className="w-auto h-16 sm:h-7 lg:w-full lg:h-full" src={logo} alt="" />
    </div>

    <div className="flex flex-col items-center mt-6 -mx-2">
          {jwtDecode(localStorage.getItem('token'))?.profil?<img className="object-cover w-24 h-24 mx-2 rounded-full" src={jwtDecode(localStorage.getItem('token'))?.profil} alt="avatar" />
:
          <div className="w-10 h-10 min-w-10 min-h-10  bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">
            {jwtDecode(localStorage.getItem('token'))?.name?.charAt(0).toUpperCase()}
          </div>
    }
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{jwtDecode(localStorage.getItem('token'))?.name}</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{jwtDecode(localStorage.getItem('token'))?.sub.toUpperCase()}</p>
    </div>

    <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
            <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" href="/dashbord">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Dashboard</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/dashbord/compte">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Mon compte</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/dashbord/cours">
            <BookOpenText />

                <span className="mx-4 font-medium">Cours</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/dashbord/devoirs">
                <NotebookPen />
                <span className="mx-4 font-medium">Devoirs</span>
            </a>

            

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/dashbord/absence">
                <CalendarDays />
                <span className="mx-4 font-medium">Absense</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/dashbord/notes">
                <FileChartColumn  />
                <span className="mx-4 font-medium">Notes</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/dashbord/meet">
                <Video />
                <span className="mx-4 font-medium">Réunions</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/dashbord/factures">
                <ScrollText />
                <span className="mx-4 font-medium">Factures</span>
            </a>
            <button onClick={()=>{deconnexion()}} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <LogOut  />
                <span className="mx-4 font-medium">Deconnexion</span>
            </button>


        </nav>
    </div>
                  
</aside>

</div>
  )
}

export default SideBar