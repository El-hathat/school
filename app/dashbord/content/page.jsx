'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, DownloadCloud, Medal, Menu } from 'lucide-react'
import SideBar from '../sideBar/SideBar'


export default function page() {
  const [currentMonth, setCurrentMonth] = useState('January')
  const [currentYear, setCurrentYear] = useState(2022)

  return (
  <div>

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          
              <div  className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-500">Classement</h2>
                  <Medal />
                </div>
                <p className="mt-2 text-3xl font-semibold text-center">5</p>
              </div>

              <div  className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-500">Teste du mois {new Date().getMonth()}</h2>
                  <Medal />
                </div>
                <p className="mt-2 text-3xl font-semibold text-center">5</p>
              </div>

              <div  className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-500">Certificats</h2>
                  <Medal />
                </div>
                <p className="mt-2 text-3xl font-semibold text-center">5</p>
              </div>

              <div  className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-500">Devoirs Non-Remis</h2>
                  <Medal />
                </div>
                <p className="mt-2 text-3xl font-semibold text-center">5 </p>
              </div>
          
          </div>

          <div className="mt-6 ">
          <div className="col-span-4 bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Statistiques</h2>
              <div className="h-[200px] w-full bg-gray-100 flex items-end justify-between p-4">
                {[1/3, 1/2, 1/4, 3/4, 2/3, 1/2].map((height, index) => (
                  <div key={index} className="w-8 bg-purple-500" style={{height: `${height * 100}%`}}></div>
                ))}
              </div>
            
            </div>
            
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 ">
            <div className="col-span-4 bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Notes des exams</h2>
              <div className="space-y-4">
                {[
                  { name: "Math", score: "18/20", time: "12/10/2024", grade: "Excellent"},
                  { name: "Physic", score: "16/20", time: "12/10/2024", grade: "T.bien"},
                  { name: "Geographie", score: "5/20", time: "12/10/2024", grade: "_"},
                  { name: "Arabe", score: "11/20", time: "10/12/2024", grade: "Passable" },
                ].map((student, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div>
                        <p className="font-medium text-xs lg:text-md">{student.name}</p>
                        <p className="text-sm text-gray-500 text-xs lg:text-md">{student.score}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 text-xs lg:text-md">{student.time}</div>
                    <div className='text-xs lg:text-md'>{student.grade}</div>
                  
                  </div>
                ))}
              </div>
            </div>
          
              
            </div>
          </div>

          <div className="mt-3 bg-white p-6 rounded-lg shadow ml-6 mr-6">
            <h2 className="text-lg font-semibold mb-4">Actualites du classe</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Notice of Special Examinations of Semester Spring 2021",
                  author: "prof 2",
                },
                {
                  title: "Time Extension Notice of Semester Admission",
                  author: "prof 3",
                
                },
                {
                  title: "COVID-19 Vaccination Survey October 2021",
                  author: "Directeur",
                  
                },
                {
                  title: "Scholarship Viva Notice Spring 2021",
                  author: "Deligue",
                  
                },
              ].map((notice, index) => (
                <div key={index} className="flex items-start space-x-4 shadow-sm">
                  <div>
                    <h3 className="font-medium text-xs lg:text-md">{notice.title}</h3>
                    <p className="text-sm text-gray-500 text-xs lg:text-md">By - {notice.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
    
  )
}