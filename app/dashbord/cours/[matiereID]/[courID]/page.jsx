import { CloudDownload, MessageCircleMore } from 'lucide-react'
import React from 'react'

function page({params :{courID}}) {




const com=<div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
<img
  src="https://plus.unsplash.com/premium_photo-1682089892133-556bde898f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="User avatar"
  className="w-10 h-10 rounded-full cover "
/>
<div className="flex-1">
  <div className="bg-gray-100 p-3 rounded-lg shadow">
    <h3 className="font-bold text-sm mb-1">Mohamed el-hathat</h3>
    <p className="text-xs lg text-sm" >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempore dicta dolor.
    </p>
  </div>
  <div className="flex items-center justify-between space-x-2 mt-2 text-sm text-gray-500">
  <div className='flex gap-3'> <span>2d</span>
    <button className="font-semibold">J'aime</button>
    <button className="font-semibold" >Repondre</button></div> 
    <span className="flex items-center">
      <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
      </svg>
      2
    </span>
  </div>
</div>

</div>


  return (
    <div>
      
      <div className="w-full lg:px-8 px-3 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800  border-2 border-gray-200  border-solid">
<div className="flex items-center justify-between ">
  <div className=" block ">
<div className="flex items-center px-5 ">
        <img className="object-cover ml-[-10%] w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar"/>
        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link">Khatab wedaa</a>
    </div> 
    <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
    </div>
    <button className="text-sm font-light text-gray-600 dark:text-gray-400 flex flex-col items-center"><CloudDownload />Telecharger</button>
  </div>
<div className="flex flex-col-reverse  lg:flex-row  border-2 border-gray-200  border-solid p-2">
  <div className="  flex  flex-row gap-x-3 items-center lg:flex-col">
    <img
      alt=""
      src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      className="aspect-square h-12 w-12 rounded-sm md:h-24 lg:h-40 md:w-36 lg:w-60 object-cover lg:rounded-lg "
    />
    <a href="#">
        <h5 className="font-bold uppercase text-gray-900">
          Cours d'electricite
        </h5>
      </a>
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      

      <p className="mt-2 line-clamp-3 lg:line-clamp-5 text-xs/relaxed lg:text-sm text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
        quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
        atque dignissimos. Molestias explicabo corporis voluptatem?
      </p>
    </div>
    </div>
    </div>


<div className=" flex flex-col gap-1 mt-2">
    {com}{com}{com}{com}{com}{com}{com}{com}
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
        <div className="flex flex-row"><MessageCircleMore />(22)</div>
        
      </div>
    </div>
</div>
      
      </div>
  )
}

export default page