'use client'
import apis from '@/app/utils/apis';
import React, { useEffect, useState } from 'react'

function page() {
  const [matiere, setMatiere] = useState({});

  const getMatiere = () => {
    apis.getCours().then(res => {
      setMatiere(res?.data);
      console.log('matieres', res);
    });
  };
  
  useEffect(() => {
    apis.tkn()
    getMatiere();
    
  }, []);

  const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' ,hour:'2-digit',minute:'2-digit' });
  



  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6 '>
  { Array.isArray(matiere) ? matiere.map((item,index) => (
   <a
   key={index}
     href={"/dashbord/cours/"+item?.matID}
     className="relative block overflow-hidden rounded-lg border shadow-md shadow-gray-500 border-gray-100 bg-white p-4 sm:p-6 lg:p-8"
   >
     <span
       className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
     ></span>

     <div className="sm:flex sm:justify-between sm:gap-4">
       <div>
         <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
           {item?.matName}
         </h3>

         <p className="mt-1 text-xs font-medium text-gray-600">par {item?.teacher?.fullName}</p>
       </div>
     </div>

     <dl className="mt-6 flex gap-4 sm:gap-6 justify-between">
       <div className="flex flex-col">
         <dt className="text-sm font-medium text-gray-600">Creer le </dt>
         <dd className="text-xs text-gray-500">{item?.pubDate ? formatter.format(new Date(item.pubDate)) : 'N/A'}</dd>
       </div>

       <div className="flex flex-col">
         <dt className="text-sm font-medium text-gray-600">Cours</dt>
         <dd className="text-xs text-gray-500 text-center">{item?.cours?.length}</dd>
       </div>

       <div className="flex flex-col">
         <dt className="text-sm font-medium text-gray-600">Devoirs</dt>
         <dd className="text-xs text-gray-500 text-center">{item?.devoirs?.length}</dd>
       </div>
     </dl>
   </a>
 )) : <p>No data available</p> }
    </div>
  )
}

export default page