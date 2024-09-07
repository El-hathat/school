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
              <h2 className="text-lg font-semibold mb-4">Statistics</h2>
              <div className="h-[200px] w-[100%] bg-gray-100 flex items-end justify-between p-4">
              
              </div>
            </div>
            
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 ">
            <div className="col-span-4 bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Database</h2>
              <div className="space-y-4">
                {[
                  { name: "Glenn Maxwell", score: "80/100", time: "12/10/22-10 PM", grade: "Excellent", status: "Pass" },
                  { name: "Cathe Heavan", score: "70/100", time: "12/10/22-10 PM", grade: "Average", status: "Pass" },
                  { name: "Yoader Gil", score: "35/100", time: "12/10/22-10 PM", grade: "Poor", status: "Fail" },
                  { name: "Preeth Siring", score: "80/100", time: "12/10/22-10 PM", grade: "Excellent", status: "Pass" },
                ].map((student, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Image src="/placeholder.svg?height=40&width=40" alt={student.name} width={40} height={40} className="rounded-full" />
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-gray-500">{student.score}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{student.time}</div>
                    <div>{student.grade}</div>
                    <div className={`rounded-full px-2 py-1 text-xs ${student.status === "Pass" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {student.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          
              
            </div>
          </div>

          <div className="mt-3 bg-white p-6 rounded-lg shadow ml-6 mr-6">
            <h2 className="text-lg font-semibold mb-4">Notice Board</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Notice of Special Examinations of Semester Spring 2021",
                  author: "Justin Langer",
                  image: "/placeholder.svg?height=40&width=40",
                },
                {
                  title: "Time Extension Notice of Semester Admission",
                  author: "Daniel Vatory",
                  image: "/placeholder.svg?height=40&width=40",
                },
                {
                  title: "COVID-19 Vaccination Survey October 2021",
                  author: "Jacob Oram",
                  image: "/placeholder.svg?height=40&width=40",
                },
                {
                  title: "Scholarship Viva Notice Spring 2021",
                  author: "name",
                  image: "/placeholder.svg?height=40&width=40",
                },
              ].map((notice, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <Image src={notice.image} alt={notice.title} width={40} height={40} className="rounded-lg" />
                  <div>
                    <h3 className="font-medium">{notice.title}</h3>
                    <p className="text-sm text-gray-500">By - {notice.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
    
  )
}