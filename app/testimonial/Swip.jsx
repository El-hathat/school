'use client'
import { register } from 'swiper/element/bundle';
import 'swiper/element/css/effect-coverflow';
import 'swiper/element/css/effect-cards';
import './swiper.css';
import { Quote } from 'lucide-react';



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
  


<swiper-slide class='swiper-slide' >
    {tem}
    </swiper-slide>
     <swiper-slide class='swiper-slide' >
    {tem}
    </swiper-slide>
    <swiper-slide class='swiper-slide' >
{tem}
    </swiper-slide>
    <swiper-slide class='swiper-slide' >
{tem}
    </swiper-slide>
    <swiper-slide class='swiper-slide' >
{tem}
    </swiper-slide>

              
             
        </swiper-container>
      

  )
}

export default Swip