'use client'
import apis from '@/app/utils/apis';
import React, { useEffect, useState } from 'react'





export default function page({params:{devoirByMat}}) {

  const [devoirs, setDevoirs] = useState([]);


  const getDevoirs = (devoir) => {
    apis.getDevoirsByMatiere(devoir).then((res) => {
      setDevoirs(res?.data || []);
      console.log('devoirs', res);
    });
  };

  

  useEffect(() => {
    getDevoirs(devoirByMat);
  }, []);



  const formatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <a href={'/dashbord/devoirs/'+devoirByMat+'/devoir 1'} className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {devoirs.map((assignment) => (
          <li key={assignment.devoirID} className="p-4 hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex flex-col lg:flex-row w-full justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {assignment?.devoirTitle}
                </p>
                <p className="text-sm text-gray-500">
                {assignment?.limiteDate ? formatter.format(new Date(assignment?.limiteDate)) : 'Aucune date limite'}
                  
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </a>
  )
}