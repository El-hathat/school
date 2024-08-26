'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import circle from '@/public/images/circle.png'
import tc from '@/public/images/dc.png'
import dv from '@/public/images/dv.png'
import rn from '@/public/images/rn.png'
import abs from '@/public/images/abs.png'
import note from '@/public/images/note.png'
import AOS from 'aos';
import 'aos/dist/aos.css'


const servicesArray=[
  {img:tc,
  titre:'Telechargement des cours',
description:'Accedez a vos cours et supports pedagogiques a tout moment et en tout lieu.'
},
{img:dv,
titre:'Remise des devoirs',
description:'Soumettez vos devoirs en ligne facilement et suivez vos delais de soumission.'
},
{img:note,
titre:"Consultation des notes d'examens",
description:'Visualisez vos notes d\'examens et suivez votre progression academique en temps reel.'
},
{img:abs,
titre:'Gestion des absences',
description:'Restez informe de votre taux de presence et justifiez vos absences en ligne.'
},
{img:rn,
titre:'Acces aux ressources numeriques',
description:"Profitez de notre bibliotheque numerique pour enrichir vos connaissances et completer vos etudes."
}
]

function Services() {

  useEffect(()=>{
    AOS.init({duration:1000});
    
    },[]);
const [view,setView]=useState(false)
const viewHandle=()=>{
setView(!view)
}


  return (
    <section className='flex flex-col items-center lg:flex-row mt-6'>
      <div className="hidden w-[10%] lg:flex">
      <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative top-[70%] left-[60%]' data-aos="zoom-in-down"/>

      </div>
      <div className=" lg:w-[25%] flex flex-col items-center lg:justify-center ">
      <h1 className='text-2xl font-bold text-[#FF8367] text-center' data-aos="fade-down">Services</h1>
          <p className='text-xl font-semibold text-center pb-3' data-aos="fade-up">Decouvrez nos services essentiels pour une gestion scolaire simplifiee :</p>
          <p className='text-sm lg:text-lg pl-6 pt-1 pb-3 pr-6 lg:w-[90%]  text-center' data-aos="fade-left">Chaque service est concu pour vous offrir une experience utilisateur fluide et efficace. Explorez
chaque section pour en savoir plus et tirer le meilleur parti de notre plateforme.</p>
          <button type="button" className="hidden lg:flex mt-3 w-[200px]  focus:outline-none
           text-white bg-[#FF8367] hover:shadow-lg hover:opacity-60 font-medium rounded-lg text-sm px-5 
            py-2.5 me-2 mb-2 " data-aos="zoom-in-down" onClick={viewHandle}>{view?'VIEW LITTLE':'VIEW ALL SERVICES'}</button>

      </div>
      <div className="lg:w-[60%] flex flex-col lg:flex-row  lg:flex-wrap items-center pt-4 gap-8 h-[1320px] lg:h-[600px] overflow-y-hidden" style={view?{overflowY:'visible',height:'auto'}:{overflowY:'hidden'}}>
      {servicesArray.map((item, index) => (
  <div 
    key={index} 
    className="flex flex-col shadow-xl w-[300px] lg:w-[250px] h-[250px] rounded-md items-center" 
    data-aos="zoom-out-down"
  >
    <Image
      alt=""
      src={item?.img}
      className="h-16 rounded-full w-16 object-cover"
      width={64}
      height={64}
    />

    <h3 className="mt-4 text-lg text-center font-bold text-gray-900 sm:text-xl">
      {item?.titre}
    </h3>

    <p className="mt-2 max-w-sm text-gray-700 pl-4">
      {item?.description}
    </p>
  </div>
))}

          </div>
      <button type="button" className="lg:hidden flex mt-3 w-[200px]  focus:outline-none
           text-white bg-[#FF8367] hover:shadow-lg hover:opacity-60 font-medium rounded-lg text-sm px-5 
            py-2.5 me-2 mb-2 " onClick={viewHandle}>{view?'VIEW LITTLE':'VIEW ALL SERVICES'}</button>
      <div className="hidden w-[10%] lg:flex">
      <Image src={circle} alt='' className='hidden lg:flex w-16 h-16 relative   top-[30%]' data-aos="zoom-in-down"/>

      </div>
    </section>
  )
}

export default Services


