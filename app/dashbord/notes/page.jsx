'use client'
import apis from '@/app/utils/apis';
import React, { useEffect, useRef, useState } from 'react'




export default function page() {
const [notes,setNotes]=useState([])
const [classInfo,setClassinfo]=useState()
const [noteFinale,setNoteFinale]=useState()
const yearschool=useRef()
const semestreSelected=useRef()

  const getNotes = (schoolyear, semestre, classe,email) => {
    apis.getStudentNotes(schoolyear, semestre).then((res) => {
      setNotes(res?.data || []);
    });
  };

  const getNoteFinal = (year,semestre) => {
    apis.getFinaleNote(year,semestre).then((res) => {
      setNoteFinale(res?.data || []);
    });
  };

  const getClasseInfos = (year) => {
    apis.getClassInfo(year).then((res) => {
      setClassinfo(res?.data || []);
    });
  };
const handleChange=()=>{
  getNotes(yearschool?.current?.value,semestreSelected?.current?.value)
  getNoteFinal(yearschool?.current?.value,semestreSelected?.current?.value)
  getClasseInfos(yearschool?.current?.value)
}
useEffect(()=>{
  apis.tkn()
  getNotes(yearschool?.current?.value,semestreSelected?.current?.value)
  getNoteFinal(yearschool?.current?.value,semestreSelected?.current?.value)
  getClasseInfos(yearschool?.current?.value)

},[])
console.log("semestre",notes)
console.log("year",noteFinale)
  return (
    <div className="  p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">Suivi des notes</h1>
      <div className="flex mb-4 ">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Année Scolaire</label>
          <select onChange={()=>handleChange()} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" ref={yearschool}>
           <option>2022-2023</option>
            <option>2023-2024</option>
            <option selected>2024-2025</option>
            <option>2025-2026</option>
            <option>2026-2027</option>
            <option>2027-2028</option>
            <option>2028-2029</option>
            <option>2029-2030</option>
            
          </select>
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Session</label>
          <select onChange={()=>handleChange()} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" ref={semestreSelected}>
            <option value="S1" selected>Premier semestre</option>
            <option value="S2">Deuxième semestre</option>
          </select>
        </div>
      </div>
      <div className="bg-white shadow  sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Moyenne Note</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{classInfo?.length>0?classInfo[0][2]:''} - {classInfo?.length>0?classInfo[0][1]:''}-{classInfo?.length>0?classInfo[0][0]:''}</p>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{classInfo?.length>0?classInfo[0][3]:''} - {classInfo?.length>0?classInfo[0][4]:''} élèves</p>
        </div>
        <div className="border-t border-gray-200 overflow-x-scroll">
          <table className=" divide-y divide-gray-200 ">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matière</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premier contrôle</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deuxième contrôle</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Troisième contrôle</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quatrième contrôle</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activités intégrées</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {


              notes.map((item, index) => (
                
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs lg:text-md font-medium text-gray-900">{item?.length>0?item[0][3]:''}</td>
                {  item.map((item1, index1) => (
                    <td key={index1} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item1[0] !== null ? item1[0] : '-'}
                    </td>
                  ))}
                </tr>
                
              ))
              
              
              }
            </tbody>
          </table>
          <table  className='border border-solid border-gray-200 px-6 py-4 whitespace-nowrap text-xs lg:text-md font-medium text-gray-900'>
          <tr className=' w-full px-6 py-4 whitespace-nowrap text-xs lg:text-md font-medium text-gray-900'>
              <th colSpan="2" className='border border-solid border-gray-200 w-1/2 text-start'>Resultat du {semestreSelected?.current?.value}</th>
            
            </tr>
            <tr className=' w-full px-6 py-4 whitespace-nowrap text-xs lg:text-md font-medium text-gray-900'>
              <th className='border border-solid border-gray-200 w-1/2 text-start'>Note des controles continues</th>
              <td className='border border-solid border-gray-200 w-1/2 text-center'>{noteFinale?.ncc!=null?noteFinale?.ncc:'-'}</td>
            </tr>
            <tr className='px-6 py-4 whitespace-nowrap text-xs lg:text-md font-medium text-gray-900'>
        
              <th className='border border-solid border-gray-200 w-1/2 text-start'>Note d’examen</th>
              <td className='border border-solid border-gray-200 w-1/2 text-center'>{noteFinale?.nen!=null?noteFinale?.nen:'-'}</td>
            </tr>
            <tr className='px-6 py-4 whitespace-nowrap text-xs lg:text-md font-medium text-gray-900'>
        
              <th className='border border-solid border-gray-200 w-1/2 text-start'>Note Finale</th>
              <td className='border border-solid border-gray-200 w-1/2 text-center'>{noteFinale?.nf!=null?noteFinale?.nf:'-'}</td>
            </tr>
            <tr className='px-6 py-4 whitespace-nowrap text-xs lg:text-md font-medium text-gray-900'>
        
              <th className='border border-solid border-gray-200 w-1/2 text-start'>Note du classe</th>
              <td className='border border-solid border-gray-200 w-1/2 text-center'>{noteFinale?.nc!=null?noteFinale?.nc:'-'}</td>
            </tr>
            <tr className='px-6 py-4 whitespace-nowrap text-xs lg:text-md font-medium text-gray-900'>
        
              <th className='border border-solid border-gray-200 w-1/2 text-start'>Mention</th>
              <td className='border border-solid border-gray-200 w-1/2 text-center'>{noteFinale?.nf!=null && noteFinale?.nf>=16?'T.Bien':noteFinale?.nf!=null && noteFinale?.nf>=14?'Bien':noteFinale?.nf!=null && noteFinale?.nf>=12?'Assez Bien':noteFinale?.nf!=null && noteFinale?.nf>=10?'Passable':'-'}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
