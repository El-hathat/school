'use client'
import React, { useEffect, useState } from 'react'
import Password from './password/page'
import apis from '@/app/utils/apis';
import { Atom } from 'react-loading-indicators';
function page() {
  const [student, setStudent] = useState();
  const [school, setSchool] = useState();
  const [classe, setClasse] = useState();
  const [bus, setBus] = useState();

  const getStudent = () => {
    apis.getStudent().then(res => {
      console.log("res",res?.data)
    res?.data?  setStudent(res?.data[0][0]):'';
    res?.data?setSchool(res?.data[0][1]):'';
      res?.data?setClasse(res?.data[0][2]):'';
      res?.data?setBus(res?.data[0][3]):'';

    });
  };
  
  useEffect(() => {
    apis.tkn()
    getStudent();
    
  }, []);


  //console.log('student', student);
  const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const bd = student?.birthDate ? formatter.format(new Date(student.birthDate)) : 'N/A'; // Ensure valid Date
  return (
    student?
        <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
        
          <h1 className="text-2xl font-semibold text-blue-700 mb-6">Bonjour,{student?.fullName}</h1>
          
          <div className="bg-blue-50 p-4 rounded-t-lg">
            <h2 className="text-lg font-semibold text-blue-800">Mes informations personnelles</h2>
          </div>
          
          <div className="border border-gray-200 rounded-b-lg overflow-hidden">
            <div className="grid grid-cols-2 gap-4 p-4">
              <div>
                <p className="text-sm font-semibold text-gray-600">Code élève</p>
                <p className="text-sm text-gray-800">{student?.email}</p>
                
              </div>
              
              <div className="contents">
                <div>
                  <p className="text-sm font-semibold text-gray-600">Nom Complet</p>
                  <p className="text-sm text-gray-800">{student?.fullName}</p>
                </div>
                <div className="bg-gray-50">
                  <p className="text-sm font-semibold text-gray-600">Nom Du Mere</p>
                  <p className="text-sm text-gray-800">{student?.motherName}</p>
                </div>
              </div>
              
              <div className="contents">
                <div>
                  <p className="text-sm font-semibold text-gray-600">Nom du Pere</p>
                  <p className="text-sm text-gray-800">{student?.fatherName}</p>
                </div>
                <div className="bg-gray-50">
                  <p className="text-sm font-semibold text-gray-600">Adresse</p>
                  <p className="text-sm text-gray-800">{student?.address}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-600">Téléphone Tuteur</p>
                <p className="text-sm text-gray-800">{student?.tel}</p>
              </div>
              
              <div className="contents">
                <div>
                  <p className="text-sm font-semibold text-gray-600">Date de naissance</p>
                  <p className="text-sm text-gray-800">{bd}</p>
                </div>
                <div className="bg-gray-50">
                  <p className="text-sm font-semibold text-gray-600">Genre</p>
                  <p className="text-sm text-gray-800">{student?.genre || "undefined"}</p>
                </div>
              </div>
              
              <div className="contents">
              <div>  <p className="text-sm font-semibold text-gray-600">Etablissement</p>
                <p className="text-sm text-gray-800">{school}</p></div>
                <div className="">
                <p className="text-sm font-semibold text-gray-600">Classe</p>
                <p className="text-sm text-gray-800">{classe || "pas determiner"}</p>
                </div>
              </div>
              
              <div className="contents">
                <div>
                  <p className="text-sm font-semibold text-gray-600">Académie</p>
                  <p className="text-sm text-gray-800">{student?.academy}</p>
                </div>
                <div className="bg-gray-50">
                  <p className="text-sm font-semibold text-gray-600">Direction provinciale</p>
                  <p className="text-sm text-gray-800">Province: {student?.dp}</p>
                </div>
              </div>
{bus?
              <div className="contents">
                <div>
                  <p className="text-sm font-semibold text-gray-600">School Bus</p>
                  <p className="text-sm text-gray-800">{bus}</p>
                </div>
              </div>:''}
            </div>
          </div>
          <div className=""><Password /></div>
          
        
        </div> :
        <div className='w-full h-screen flex justify-center items-center align-middle mt-1/2'>
         <Atom color="#e6e250" size="large" text="NlSchool" textColor=""  /></div>
    
    
    
  )
}

export default page

