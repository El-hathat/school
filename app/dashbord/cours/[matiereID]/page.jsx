'use client'
import apis from '@/app/utils/apis';
import { Check, CloudDownload, MessageCircleMore } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'


function page({params: {matiereID}}) {

  const texteRef = useRef(null); 
  const [copied, setCopied] = useState(false); 

  const copierTexte = () => {
    texteRef.current.select(); 
    document.execCommand('copy'); 
    window.getSelection().removeAllRanges(); 
    setCopied(true); 
    setTimeout(() => setCopied(false), 4000);
  };

  


  const [cours, setCours] = useState({});
  const [prof, setProf] = useState("");

  const getCours = () => {
    apis.getCours().then(res => {
      res?.data?.forEach(item => {
        if (item?.matID == matiereID) {
          setCours(item?.cours);
          setProf(item?.teacher?.fullName);
        }
      });

      
    });
  };
  
  useEffect(() => {
    getCours();
    
  }, []);

  const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' ,hour:'2-digit',minute:'2-digit' });




  return (
    <div className="">
     

<section
  className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1488998427799-e3362cec87c3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top bg-no-repeat"
>
  <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">{matiereID}</h2>

      

      <div className="flex items-center justify-between w-full mt-5 gap-x-2">
                    <input type="text" ref={texteRef} value="4ijkmya" className="flex-1 block h-10 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    
                    <button onClick={copierTexte} className="rounded-md sm:block p-1.5 text-gray-700 bg-white border border-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-500">
                      {copied?<Check/>:  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>}
                    </button>
                </div>
    </div>
  </div>
</section>
    <div className='grid grid-cols-1  gap-6 m-0 lg:m-6 '>
    { Array.isArray(cours) ? cours?.map((item,cle)=>(
  <div  className="w-full lg:px-8 px-3 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800" key={cle}>
  <div className="flex items-center justify-between">
    <div className=" block">
  <div className="flex items-center px-5">
          <img className="object-cover ml-[-10%] w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar"/>
          <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link">{prof}</a>
      </div> 
      <span className="text-sm font-light text-gray-600 dark:text-gray-400">{item?.pubDate ? formatter.format(new Date(item.pubDate)) : 'N/A'}</span>
      </div>
      <button className="text-sm font-light text-gray-600 dark:text-gray-400 flex flex-col items-center"><CloudDownload />Telecharger</button>
    </div>
  <div className="flex flex-col-reverse  lg:flex-row  ">
    <div className="  flex  flex-row gap-x-3 items-center lg:flex-col">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        className="aspect-square h-12 w-12 rounded-sm md:h-24 lg:h-40 md:w-36 lg:w-60 object-cover lg:rounded-lg "
      />
      <a href="#">
          <h5 className="font-bold uppercase text-gray-900">
          {item?.matName}
          </h5>
        </a>
    </div>
  
    <div className="flex flex-1 flex-col justify-between">
      <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
        
  
        <p className="mt-2 line-clamp-3 lg:line-clamp-5 text-xs/relaxed text-gray-700">
        {item?.description}
        </p>
      </div>
      </div>
      </div>
  
  <div className="w-full mx-auto lg:p-4 p-1 bg-gray-50 rounded-lg mt-4">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <h2 className="text-sm font-light lg:text-lg lg:font-semibold text-gray-700">Commentaires ajoutés au cours</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 min-w-10 min-h-10  bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">
            U
          </div>
          <div className="relative flex-grow">
            <input 
              type="text"
              className="w-full text-xs lg:text-lg py-2 pl-3 pr-10 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ajouter un commentaire au cours..."
            />
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Envoyer le commentaire"
            >
              
              <svg className="w-5 h-5 min-w-5 min-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
            
          </div>
          <a href={'/dashbord/cours/'+matiereID+'/part1Physic'} className="flex flex-row"><MessageCircleMore />(22)</a>
          
        </div>
      </div>
  </div>
)): <p>No data available</p>}
</div>
</div>
  )
}

export default page