import React from 'react'
import Password from './password/page'
function page() {
  return (
  
        <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold text-blue-700 mb-6">Bonjour MOHAMED EL-HATHAT,</h1>
          
          <div className="bg-blue-50 p-4 rounded-t-lg">
            <h2 className="text-lg font-semibold text-blue-800">Mes informations personnelles</h2>
          </div>
          
          <div className="border border-gray-200 rounded-b-lg overflow-hidden">
            <div className="grid grid-cols-2 gap-4 p-4">
              <div>
                <p className="text-sm font-semibold text-gray-600">Code élève</p>
                <p className="text-sm text-gray-800">S123456789</p>
              </div>
              
              <div className="contents">
                <div>
                  <p className="text-sm font-semibold text-gray-600">Prénom</p>
                  <p className="text-sm text-gray-800">محمد (MOHAMED)</p>
                </div>
                <div className="bg-gray-50">
                  <p className="text-sm font-semibold text-gray-600">Nom</p>
                  <p className="text-sm text-gray-800">الهطهاط (EL-HATHAT)</p>
                </div>
              </div>
              
              <div className="contents">
                <div>
                  <p className="text-sm font-semibold text-gray-600">Prénom Tuteur</p>
                  <p className="text-sm text-gray-800">عبد السلام (Abdeslam)</p>
                </div>
                <div className="bg-gray-50">
                  <p className="text-sm font-semibold text-gray-600">Nom Tuteur</p>
                  <p className="text-sm text-gray-800">الهطهاط (EL Hathat)</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-600">Téléphone Tuteur</p>
                <p className="text-sm text-gray-800">0612312312</p>
              </div>
              
              <div className="contents">
                <div>
                  <p className="text-sm font-semibold text-gray-600">Lieu de naissance</p>
                  <p className="text-sm text-gray-800">taounate,fes</p>
                </div>
                <div className="bg-gray-50">
                  <p className="text-sm font-semibold text-gray-600">Genre</p>
                  <p className="text-sm text-gray-800">Garçon</p>
                </div>
              </div>
              
              <div className="contents">
              <div>  <p className="text-sm font-semibold text-gray-600">Etablissement</p>
                <p className="text-sm text-gray-800">Lycée Qualifiant Ibn Sina</p></div>
                <div className="">
                <p className="text-sm font-semibold text-gray-600">Classe</p>
                <p className="text-sm text-gray-800">1bac2</p>
                </div>
              </div>
              
              <div className="contents">
                <div>
                  <p className="text-sm font-semibold text-gray-600">Académie</p>
                  <p className="text-sm text-gray-800">Fès-Meknès</p>
                </div>
                <div className="bg-gray-50">
                  <p className="text-sm font-semibold text-gray-600">Direction provinciale</p>
                  <p className="text-sm text-gray-800">Province: Taounate</p>
                </div>
              </div>
            </div>
          </div>
          <Password />
        </div>
    
    
    
  )
}

export default page

