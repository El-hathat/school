'use client'
import apis from '@/app/utils/apis'
import React, { useEffect, useRef, useState } from 'react'


export default function page() {
const [factures,setFactures]=useState()
const [fact,setFact]=useState('En Attente')

const getFactures=(etat)=>{
  apis.getBillsByEtat(etat).then((res)=>{
    setFactures(res?.data)
  })
}

const enAttente=()=>{
  getFactures('En_Attente')
  setFact('En Attente')
}

const Payee=()=>{
  getFactures('Payee')
  setFact('Payee')
}

useEffect(()=>{
  apis.tkn()
  enAttente()
},[])

  // const factures = [
  //   { id: '9', mois: 'Septombre 2022', dateLimite: '2023-01-15', montant: 500, etat: 'payée' },
  //   { id: '10', mois: 'Octobre 2022', dateLimite: '2023-02-15', montant: 500, etat: 'payée' },
  //   { id: '11', mois: 'Novembre 2022', dateLimite: '2023-03-15', montant: 500, etat: 'en attente' },
  //   { id: '12', mois: 'Decembre 2022', dateLimite: '2023-04-15', montant: 500, etat: 'en retard' },
  //   { id: '1', mois: 'Janvier 2023', dateLimite: '2023-01-15', montant: 500, etat: 'payée' },
  //   { id: '2', mois: 'Février 2023', dateLimite: '2023-02-15', montant: 500, etat: 'payée' },
  //   { id: '3', mois: 'Mars 2023', dateLimite: '2023-03-15', montant: 500, etat: 'en attente' },
  //   { id: '4', mois: 'Avril 2023', dateLimite: '2023-04-15', montant: 500, etat: 'en retard' }, 
  //    { id: '5', mois: 'Mai 2023', dateLimite: '2023-01-15', montant: 500, etat: 'payée' },
  //   { id: '6', mois: 'Juin 2023', dateLimite: '2023-02-15', montant: 500, etat: 'payée' },
  //   { id: '7', mois: 'Septombre 2023', dateLimite: '2023-03-15', montant: 500, etat: 'en attente' },
  //   { id: '8', mois: 'Octobre 2023', dateLimite: '2023-04-15', montant: 500, etat: 'en retard' },
  // ]

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR')
  }

  // Fonction pour obtenir la classe CSS du badge selon l'état

  return (
    <div className="w-full  mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Factures d'études</h2>
      </div>
      <div className=" flex flex-row gap-x-5 pl-4 pt-4 text-center">
      <button onClick={()=>{enAttente()}} className='w-24 px-2 py-1 text-xs text-nowrap font-semibold rounded-full text-white bg-red-500 '>
        En Attente
                                </button>
                    <button onClick={()=>{Payee()}} className='w-24 px-2 py-1 text-xs text-nowrap font-semibold rounded-full text-white bg-green-500'>
                      Payee
                    </button>
      </div>
      <div className="p-6">
        <div className="overflow-x-auto">
          <h1 className='text-lg font-bold '> {fact?'Les factures '+fact:''} </h1>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 font-semibold text-sm text-gray-700 border-b">Mois</th>
                <th className="py-2 px-4 font-semibold text-sm text-gray-700 border-b">Date limite</th>
                <th className="py-2 px-4 font-semibold text-sm text-gray-700 border-b">Montant</th>
                <th className="py-2 px-4 font-semibold text-sm text-gray-700 border-b">État</th>
              </tr>
            </thead>
            <tbody>
              {factures?factures?.map((facture) => (
                <tr key={facture.billID} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{new Date(facture.billDate).getMonth()} / {new Date(facture.billDate).getFullYear()}</td>
                  <td className="py-2 px-4 border-b">{formatDate(facture.limiteDate)}</td>
                  <td className="py-2 px-4 border-b">{facture.montant.toFixed(2)} DH</td>
                  <td className={`w-24 py-2 px-4 border-b ${facture?.etat=='Payee'?'bg-green-500':'bg-red-500'}`}>{facture.etat}</td>
                                </tr>
              )):<tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">Aucune factures</td>
              
                            </tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}