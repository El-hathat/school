'use client'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, TriangleAlert } from 'lucide-react'

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
]

export default function page() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 8, 1)) // September 2024

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-2xl font-semibold text-blue-700 mb-6">Bonjour MOHAMED EL-HATHAT,</h1>
        <h3 className='text-xl font-medium text-gray-500'>Vos absences</h3>
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <button onClick={prevMonth} className="p-1">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold">
          {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={nextMonth} className="p-1">
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 gap-2 mb-2">
          {DAYS.map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: firstDayOfMonth - 1 }).map((_, index) => (
            <div key={`empty-${index}`} className="h-10" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => (
            <div
              key={index + 1}
              className="h-10 flex items-center justify-center text-sm border border-gray-200 rounded-md"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2" />
            <span className="text-sm text-gray-600">Justifié</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-orange-500 rounded-full mr-2" />
            <span className="text-sm text-gray-600">Non justifié</span>
          </div>
        </div>
      </div>
      <div className=" flex flex-row text-sm lg:text-lg text-red-500 gap-2"><TriangleAlert color='red'/><p>Les absences non justifiées peuvent avoir un impact sur tes notes.</p></div>
    </div>
  )
}