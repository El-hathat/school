'use client'
import apis from '@/app/utils/apis';
import { CircleX, CloudDownload, MessageCircleMore, MessageCirclePlus, Trash2 } from 'lucide-react'
import React, {  useEffect, useRef, useState } from 'react'
import { saveAs } from 'file-saver';
import { useRouter } from 'next/navigation';
import sessionWork from '@/app/utils/sessionWork';
import { jwtDecode } from 'jwt-decode';


function page({params :{courID}}) {

  const [replay, setReplay] = useState();
  const [inputHidden, setInputHidden] = useState(true);
  const [parentCmt, setparentCmt] = useState("null");
  const [msgChange,setmsgChange]=useState()
const msg=useRef()
const route=useRouter()
  const[currentCour,setCurrentCour]=useState()
  const [prof, setProf] = useState();
const delComment=(id)=>{
  const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?");
  if (confirmed) {
  apis.tkn();
  apis.delComment(id).then(res=>{
    res?getCours():"";
  })}
}
  const getCours = () => {
    apis.getCoursDetails(courID).then(res => {
      console.log(res)
          setCurrentCour(res?.data);
          
        

      
    });
  };


  const handleComment = () => {
    apis.tkn();
    const data = {
      commentID: null,
      message: msg?.current?.value,
      creationDate: new Date(),
      likeCount: 0,
      sousComment: replay ? true : false,
      replayto: replay,
      student: null,
      teacher: null,
      replies: []
    };
    const email=jwtDecode(sessionWork.getSessionValue("token"))?.sub;
  apis.tkn()
    apis.addComment2Cours(courID, email, parentCmt, data).then(res =>{getCours();});
    
    setReplay(null);
    setparentCmt("null");
    msg.current.value = "";
    
    setInputHidden(true);
  };

  
  useEffect(() => {
    apis.tkn()
    getCours();
    
  }, []);

  const handleDownload = async () => {
  //  console.log("file url :",currentCour?.file)
    try {
      // Appel pour récupérer l'image
      
      const fileUrl = currentCour?.file; // L'URL de l'image
  
      if (fileUrl) {
        // Créez un blob depuis l'URL si nécessaire
        const blob = await fetch(fileUrl).then(res => res.blob());
  
        // Utilisez FileSaver.js pour sauvegarder l'image
        saveAs(blob, file.split('/').pop()); // Téléchargez l'image
      } else {
        console.log('Erreur: URL d\'image invalide');
      }
    } catch (error) {
      //location.href(currentCour?.file+"")
      route.push(currentCour?.file)
    //  console.error('Erreur lors de la récupération ou du téléchargement de l\'image :', error);
    }
  };

  const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' ,hour:'2-digit',minute:'2-digit' });


  return (
    <div>
      
      <div className="w-full lg:px-8 px-3 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800  border-2 border-gray-200  border-solid">
<div className="flex items-center justify-between ">
  <div className=" block ">

    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{currentCour?.pubDate ? formatter.format(new Date(currentCour?.pubDate)) : 'N/A'}</span>
    </div>
    <button className="text-sm font-light text-gray-600 dark:text-gray-400 flex flex-col items-center" onClick={()=>handleDownload()}><CloudDownload />Telecharger</button>
  </div>
<div className="flex flex-col-reverse  lg:flex-row  border-2 border-gray-200  border-solid p-2">
  <button className="  flex  flex-row gap-x-3 items-center lg:flex-col "  onClick={()=>handleDownload()}>
  <div className="p-5">  <img
      alt=""
      src='/images/pdf.png'
      className=" h-12 w-12 rounded-sm md:h-24 lg:h-40 md:w-36 lg:w-60 object-contain lg:rounded-lg "
    /></div>
    <div >
        <h5 className="font-bold uppercase text-gray-900">
          {currentCour?.matName}
        </h5>
      </div>
  </button>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      

      <p className="mt-2 line-clamp-3 lg:line-clamp-5 text-xs/relaxed lg:text-sm text-gray-700">
        {currentCour?.description}
      </p>
    </div>
    </div>
    </div>


{//############################
}

<div className="border-t pt-4 mb-4">
      <div className=" flex flex-row justify-between px-3">  <h2 className="text-sm font-semibold mb-2">commentaire ajouté au Cours</h2>
      <button onClick={()=>{setInputHidden(false)}}><MessageCirclePlus /></button></div>
        





<div className="flex flex-col">

{ Array.isArray(currentCour?.comments) ? currentCour?.comments?.map((item,index1) => (
item?.sousComment==false?  <div className="flex flex-col" key={index1}>
  <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
  {item?.student!=null&&item?.student?.profil || item?.teacher!=null&&item?.teacher?.profil ?<img className="w-10 h-10 rounded-full cover" src={item?.student==null?item?.teacher?.profil:item?.student?.profil} alt="avatar"/>:
          <div className="w-10 h-10 min-w-10 min-h-10  bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">
            {item?.student==null?item?.teacher?.fullName?.charAt(0).toUpperCase():item?.student?.fullName?.charAt(0).toUpperCase()}
          </div>
    }
  <div className="flex-1" >
    <div className="bg-gray-100 p-3 rounded-lg shadow">
      <h3 className="font-bold text-sm mb-1">{item?.student==null?item?.teacher?.fullName:item?.student?.fullName}</h3>
      <p className="text-xs lg text-sm" >
      {item?.message}
      </p>
    </div>
    <div className="flex items-center justify-between space-x-2 mt-2 text-sm text-gray-500">
    <div className='flex flex-row gap-3'> <span>{item?.creationDate ? formatter.format(new Date(item?.creationDate)) : 'N/A'}</span>
      
      <button className="font-semibold" onClick={()=>{setReplay(item?.student==null?item?.teacher?.fullName:item?.student?.fullName);setparentCmt(item?.commentID),setInputHidden(false)}}>Repondre</button></div> 
      {jwtDecode(sessionWork.getSessionValue("token"))?.sub==item?.student?.email || jwtDecode(sessionWork.getSessionValue("token"))?.sub==item?.teacher?.email?<div className=""onClick={()=>delComment(item.commentID)}><Trash2 /></div>:<></>}
    </div>
  </div>
    </div>
<div className=" pl-5">
    { Array.isArray(item?.replies) ? item?.replies?.map((item1,index) => (
  item1?.sousComment?<div className="flex items-start space-x-3 p-4 bg-transparent rounded-lg ml-10" key={index}>
  {item1?.student!=null&&item1?.student?.profil || item1?.teacher!=null&&item1?.teacher?.profil ?<img className="w-10 h-10 rounded-full cover" src={item?.student==null?item?.teacher?.profil:item?.student?.profil} alt="avatar"/>:
          <div className="w-10 h-10 min-w-10 min-h-10  bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">
            {item1?.student==null?item1?.teacher?.fullName?.charAt(0).toUpperCase():item1?.student?.fullName?.charAt(0).toUpperCase()}
          </div>
    }
  <div className="flex-1" >
    <div className="bg-gray-100 p-3 rounded-lg shadow ">
      <h3 className="font-bold text-sm mb-1">{item1?.student==null?item1?.teacher?.fullName:item1?.student?.fullName}</h3>
      <div className="text-xs lg text-sm flex flex-row flex-wrap" >
      <p className='font-bold text-md italic text-blue-900 pr-2'>{item1.replayto}</p>  <p>{item1?.message}</p>
      </div>
    </div>
    <div className="flex items-center justify-between space-x-2 mt-2 text-sm text-gray-500">
    <div className='flex flex-row gap-3'> <span>{item1?.creationDate ? formatter.format(new Date(item1?.creationDate)) : 'N/A'}</span>
    
      <button className="font-semibold" onClick={()=>{setReplay(item1?.student==null?item1?.teacher?.fullName:item1?.student?.fullName);setparentCmt(item?.commentID),setInputHidden(false)}}>Repondre</button></div> 
      {jwtDecode(sessionWork.getSessionValue("token"))?.sub==item1?.student?.email || jwtDecode(sessionWork.getSessionValue("token"))?.sub==item1?.teacher?.email?<div className="" onClick={()=>delComment(item1.commentID)}><Trash2 /></div>:<></>}
    </div>
  </div>
    </div>:<></>
 )) : <></> }</div>
    </div>:<></>
 )) : <p>No data available</p> }



</div>





        <div className={`${inputHidden?`hidden`:`flex`}  items-center space-x-3 fixed bottom-0 w-5/6 h-16 lg:h-24 px-4 mx-0 rounded-md bg-gray-200`}>
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
            L
          </div>
          <div className='w-full'>
          <div className={`w-fit rounded-lg pl-3 pr-3 bg-green-400 ${!replay?`hidden`:``}`}>  <input type="text" className='bg-transparent' readOnly value={replay} /><button onClick={()=>{setReplay(null);setparentCmt("null")}}>X</button></div>
          <input
          onChange={()=>setmsgChange(msg?.current?.value)}
            type="text"
            placeholder="Ajouter un commentaire au cours..."
            className="flex-grow p-2 border rounded-md w-full"
            ref={msg}
          /></div>
          {msgChange?
          <button className="text-gray-400 hover:text-gray-600" onClick={()=>handleComment()}>
            <span className="sr-only">Send comment</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>:
          <button className="text-gray-400 hover:text-gray-600" onClick={()=>setInputHidden(true)}>
          <span className="sr-only">hide</span>
          <CircleX />
        </button>}
        </div>
      </div>

{//###############################
}
</div>
      
      </div>
  )
}

export default page