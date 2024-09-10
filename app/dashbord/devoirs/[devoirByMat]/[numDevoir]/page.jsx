'use client'
import { CloudDownload } from 'lucide-react'
import Image from 'next/image'


export default function page({params:{numDevoir}}) {






  return (
    <div className="w-full mx-auto p-6 bg-white shadow-sm rounded-lg flex flex-col lg:flex-row">
    <div className='flex-1'>  <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">📄</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold">TP2 SQL : </h1>
            <p className="text-sm text-gray-500">alaoui Ahmed • 4 déc. 2023 </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <span className="sr-only">More options </span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold flex fex-row gap-5 items-center"><p>20 points</p> 
        <button className="text-sm font-light text-gray-600 dark:text-gray-400 flex flex-col items-center"><CloudDownload />Telecharger</button>

        </span>
        
        <span className="text-sm text-gray-500">Date limite : 9 déc. 2023 23:59</span>
      </div>
      
      <p className="mb-4">Application 2 : Travail individuel à déposer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat atque dicta repudiandae sint eius illo ratione vitae laboriosam veniam eaque! Illum animi pariatur consequuntur tempore ducimus harum maiores dolorum quo?</p>
      
      <div className="border-t pt-4 mb-4">
        <h2 className="text-sm font-semibold mb-2">1 commentaire ajouté au cours</h2>
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
            L
          </div>
          <div>
            <p className="font-semibold">El-hathat ali <span className="font-normal text-gray-500 text-sm">6 déc. 2023</span></p>
            <p className="text-sm">password est "chifrement"</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
            L
          </div>
          <input
            type="text"
            placeholder="Ajouter un commentaire au cours..."
            className="flex-grow p-2 border rounded-md"
          />
          <button className="text-gray-400 hover:text-gray-600">
            <span className="sr-only">Send comment</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Votre devoir</h2>
        <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
          <div className="flex items-center space-x-3">
          <div>
    <label for="file" class="block text-sm text-gray-500 dark:text-gray-300">File</label>

    <label for="dropzone-file" class="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>

        <h2 class="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Importer un fichier</h2>

        <p class="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">les fichiers Supportee : images,document. </p>

        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div>
          </div>
          
        </div>
        <button className="mt-3 w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition duration-200">
          Remise
        </button>
      </div>
    </div>
  )
}