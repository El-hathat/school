'use client'
import { register } from 'swiper/element/bundle';
import 'swiper/element/css/effect-coverflow';
import 'swiper/element/css/effect-cards';
import './swiper.css';
import { Quote } from 'lucide-react';

const testemonialArray=[
  {img:'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
  name :'mohamed El-hathat',
  fonction:'Etudiant',
description:'Grâce à cette école, j\'ai découvert ma passion pour les sciences. Les enseignants sont toujours disponibles et encouragent chaque élève à donner le meilleur de soi-même. J\'ai non seulement appris des matières académiques, mais aussi des compétences de vie qui me seront utiles pour l\'avenir.'
},
{img:'https://images.unsplash.com/photo-1450500392544-c2cb0fd6e3b8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name:'kamal Alaoui',
fonction:'Parent',
description:'L\'école a offert à mon enfant un environnement sécurisé et stimulant. Depuis son inscription, il est plus motivé et épanoui. J\'apprécie particulièrement l\'accompagnement personnalisé et la communication constante avec les enseignants. C\'est rassurant de savoir que mon enfant est entre de bonnes mains.'
},
{img:'data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAAZVBSXkVMTBs7MgApFQAlAAAvAAA4AAM8V1BVTUBMMQA3AAAxAABGGhVaHDNfADRZW2NoTlNeJR5IAABICihkNVF6O1x/LVR1fYiJcXqAUFpsLEJoNFV8TG6QVHWUTG2Mq7Gun6amgoyUYXSJV3SQYYCdaYaiZ4Oe09TOyMvHq7O2iJmlcoqecoqieY+ofZOq7uzk4+Tdxs3MoLC3hJinfY+kg5Spi5yx+PTr7ezlz9bUqLe9ipyqgJCkh5Wqj6Cz',
  name:"rachid El-hadry",
fonction:'Parent',
description:'Depuis que mon fils a rejoint cette école, j\'ai vu une transformation incroyable en lui. Il est plus confiant, curieux, et enthousiaste à l\'idée d\'apprendre. L\'équipe éducative est toujours à l\'écoute et crée un environnement où chaque enfant peut s\'épanouir. C\'est un soulagement de voir mon enfant heureux et motivé chaque jour.'
},
{img:'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww',
  name:'samir Naciri',
fonction:'Professeur ',
description:'En tant qu\'enseignant ici depuis plusieurs années, je suis toujours impressionné par l\'engagement de nos élèves. L\'école nous offre les ressources et le soutien nécessaires pour aider chaque étudiant à réussir. Enseigner dans cette école est une expérience enrichissante, tant sur le plan professionnel que personnel.'
},
{img:'https://images.unsplash.com/photo-1544717305-2782549b5136?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name:'salma En-najji',
fonction:'Etudiant',
description:"Cette école m'a vraiment permis de m'épanouir. Les professeurs sont passionnés et savent comment rendre les cours intéressants. J'ai aussi pu participer à plusieurs activités extrascolaires qui m'ont aidé à découvrir de nouvelles passions. Je me sens prêt à relever les défis de l'avenir grâce à tout ce que j'ai appris ici."
}
]

register();
function Swip() {







const tem= <blockquote className="rounded-lg bg-white p-6 shadow-sm sm:p-8 lg:w-[90%] shadow-xl shadow-gray-500 ">
<div className="flex items-center gap-4">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    className="size-16 rounded-full object-cover border-4 border-solid border-[#ff8367]"
  />

  <div>
    <div className="flex justify-center gap-1 font-bold text-lg">
    <p>El-hathat Mohamed </p>
    </div>

    <p className="mt-0.5 text-lg font-medium text-[#ff8367] ">Student</p>
  </div>
  <div className='lg:pl-[200px]'><Quote color="#ff8367" className='rotate-180 w-12 h-12 relative left-[15%] ' /></div>  
</div>

<p className="mt-4 text-gray-700">
  222 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
  consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
  error officiis atque voluptates magnam!
</p>
</blockquote>



  return (
  
    <swiper-container 
            modules='Navigation, Pagination, Scrollbar, Autoplay'
            loop='true'
            loop-fill-group-with-blank='true'
            grab-cursor="true"
          
            pagination='true'
            centered-slides='true'
            space-between='0'
            pagination-clickable='false'
            autoplay-delay='3000'
            class='mySwiper'
            
           

        >
  {
testemonialArray?.map((item,index)=>(

<swiper-slide class='swiper-slide' key={index} >
<blockquote className="rounded-lg bg-white p-6 shadow-sm sm:p-8 lg:w-[90%] shadow-xl shadow-gray-500 ">
<div className="flex items-center gap-4">
  <img
    alt=""
    src={item?.img}
    className="size-16 rounded-full object-cover border-4 border-solid border-[#ff8367]"
  />

  <div>
    <div className="flex justify-center gap-1 font-bold text-lg">
    <p>{item?.name} </p>
    </div>

    <p className="mt-0.5 text-lg font-medium text-[#ff8367] ">{item?.fonction}</p>
  </div>
  <div className='lg:pl-[200px]'><Quote color="#ff8367" className='rotate-180 w-12 h-12 relative left-[15%] ' /></div>  
</div>

<p className="mt-4 text-gray-700">
{item?.description}
</p>
</blockquote>
    </swiper-slide>
  ))
  }
              
             
        </swiper-container>
      

  )
}

export default Swip