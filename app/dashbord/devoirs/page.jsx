import React from 'react'

function page() {

const cour=<a
href="/dashbord/devoirs/Physique"
className="relative block overflow-hidden rounded-lg border shadow-md shadow-gray-500 border-gray-100 bg-white p-4 sm:p-6 lg:p-8"
>
<span
  className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
></span>

<div className="sm:flex sm:justify-between sm:gap-4">
  <div>
    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
Physique
    </h3>

    <p className="mt-1 text-xs font-medium text-gray-600">par el-hatht mohamed</p>
  </div>

  
</div>



<dl className="mt-6 flex gap-4 sm:gap-6 justify-between">


  <div className="flex flex-col">
    <dt className="text-sm font-medium text-gray-600">Devoir remis</dt>
    <dd className="text-xs text-gray-500 text-center">3 </dd>
  </div>

  <div className="flex flex-col">
    <dt className="text-sm font-medium text-gray-600">Devoirs Non-remis</dt>
    <dd className="text-xs text-gray-500 text-center">6</dd>
  </div>
</dl>
</a>


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6 '>
       {cour} {cour} {cour} {cour} {cour}{cour} {cour} {cour} {cour} 
    </div>
  )
}

export default page