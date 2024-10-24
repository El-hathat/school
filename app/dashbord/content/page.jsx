'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, CalendarOff, DownloadCloud, Medal, Menu, NotebookPen, NotepadText } from 'lucide-react'
import { jwtDecode } from "jwt-decode";
import apis from '@/app/utils/apis'
import { useRouter } from 'next/navigation';
import sessionWork from '@/app/utils/sessionWork';


export default function page() {
  const [stat,setStat]=useState()
  const [score,setScore]=useState()
  const [actualites,setActualites]=useState();


  if (!jwtDecode(sessionWork.getSessionValue("token"))) {
    useRouter().push("/signin")
  }
  const getScore=()=>{
apis.getScoreByStudent().then((res)=>{
  setScore(res?.data)
  //console.log('score1',res.data)

})
}

const getActualites=()=>{
  apis.getActualites().then((res)=>{
    setActualites(res?.data)
    //console.log('score1',res.data)
  
  })
  }
const getStat=()=>{
  apis.getStatistique().then((res)=>{
    setStat(res?.data)
    
//console.log('stat1',res.data)
  })
  }

useEffect(()=>{
  apis.tkn()
  getScore()
  getStat()
  getActualites()
  console.log("hitlir",jwtDecode(sessionWork.getSessionValue("token"))?.profil)

},[])
console.log('score',score)
console.log('stat',stat)


const formatter = new Intl.DateTimeFormat('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});


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
                <p className="mt-2 text-3xl font-semibold text-center">{score?score[0]:'-'}</p>
              </div>

              <div  className="bg-white p-6 rounded-lg shadow">
                <a href='/dashbord/certificats' className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-500">Certificats</h2>
                  <NotepadText />
                </a>
                <p className="mt-2 text-3xl font-semibold text-center">{score?score[1]:'-'}</p>
              </div>

              <div  className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-500">Devoirs Non-Remis</h2>
                  <NotebookPen />
                </div>
                <p className="mt-2 text-3xl font-semibold text-center">{score?score[2]:'-'}</p>
              </div>

              <div  className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-500">Nombre d'absences</h2>
                  <CalendarOff />
                </div>
                <p className="mt-2 text-3xl font-semibold text-center">{score?score[3]:'-'} </p>
              </div>
          
          </div>

          <div className="mt-6 ">
          <div className="col-span-4 bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Statistiques</h2>
              <div className="h-[200px] w-full bg-gray-100 flex items-end justify-evenly p-4">
                {stat?stat.map((item, index) => (
                  <div  key={index} className=" w-8 bg-purple-500 group hover:bg-purple-300" style={{height: `${((item?.note*100)/20)}%`}}>
                  <div className='-rotate-90 relative top-1/2 text-md text-center min-w-8 text-white'>{item?.note}</div>
                    <div className="z-10 absolute hidden group-hover:flex text-xs bg-gray-900 font-medium rounded-lg text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            {item?.mat}
        </div>
        
                  </div>
                )):''}
              </div>
              
            
            </div>
            
          </div>

          
          </div>

          <div className="mt-3 bg-white p-6 rounded-lg shadow ml-6 mr-6">
            <h2 className="text-lg font-semibold mb-4">Actualites du classe</h2>
            <div className="space-y-8">
              {actualites?.map((notice, index) => (
                <div key={index} className="flex items-start space-x-4 shadow-sm ">
                  <div>
                    <h3 className="font-medium text-xs lg:text-md space-y-4">{notice?.actualite}</h3>
                    <p className="text-sm text-gray-400 text-xs lg:text-md">Pulier par - {notice?.teacher?.fullName} à {formatter.format(new Date(notice?.date))}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
    
  )
}