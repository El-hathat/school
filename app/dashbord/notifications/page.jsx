'use client'
import apis from '@/app/utils/apis'
import React, { useEffect, useState } from 'react'

function page() {
  const [message,setMessage]=useState()
  const getMessages=()=>{
    apis.getNofifications().then(res=>{
setMessage(res?.data)
    })
  }

  
    
  
    
  
  
  useEffect(()=>{
    apis.tkn()
getMessages()
apis.setNotification().then(res => console.log("change",res?.data));
  },[])

  const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' ,hour:'2-digit',minute:'2-digit' });

  return (
    <div>
      {message? message?.map((item,index)=>(


    
      <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert" key={index}>
  <div className="flex items-center gap-4">
    <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
      <svg
        className="size-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
          fillRule="evenodd"
        />
      </svg>
    </span>

    <p className="font-medium sm:text-lg">{item?.subject}</p>
  </div>

  <p className="mt-4 text-gray-500">
    {item?.message}
  </p>
  <p>{item?.messageDate ? formatter.format(new Date(item.messageDate)) : 'N/A'}</p>
</div>
  )):<></>}
    </div>
  )
}

export default page