'use client'
import apis from '@/app/utils/apis'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [certificats,setCertificats]=useState()
  const getcertifications=()=>{
    apis.getACertificats().then((res)=>{
      setCertificats(res?.data)
      console.log(res?.data)
    })
  }
  useEffect(()=>{
    apis.tkn()
    getcertifications()

  },[])
  const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric'});

  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-8 mx-auto">
        <h2 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Mes Certificats</h2>

        <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
          {certificats?.map((item,index)=>(
            <div class="w-full max-w-xs text-center "key={index}>
                <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />

                <div class="mt-2">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">{item?.certificat}</h3>
                    <span class="mt-1 font-medium text-gray-600 dark:text-gray-300"> le {item?.date ? formatter.format(new Date(item.date)) : 'N/A'}</span>
                </div>
            </div>
))}
          
        </div>
    </div>
</section>
    </div>
  )
}
