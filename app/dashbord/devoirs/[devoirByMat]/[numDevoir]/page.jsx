'use client'
import apis from '@/app/utils/apis';
import { saveAs } from 'file-saver';
import { CircleX, CloudDownload, MessageCirclePlus } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

export default function page({params:{numDevoir}}) {

  const [devoir, setDevoir] = useState();
  const [replay, setReplay] = useState(null);
  const [inputHidden, setInputHidden] = useState(true);
  const [parentCmt, setparentCmt] = useState("null");
  const [msgChange,setmsgChange]=useState()
const msg=useRef()
const [dvSm, setDvSm] = useState();

const [filePreview, setFilePreview] = useState(null);


const [file, setFile] = useState(null);
const [uploading, setUploading] = useState(false);
const [uploadResponse, setUploadResponse] = useState('');

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  setFile(selectedFile); // Store the selected file

  // Create a preview for the file
  if (selectedFile) {
    if (selectedFile.type.startsWith('image/')) {
      setFilePreview(URL.createObjectURL(selectedFile)); // Set preview for images
    } else {
      setFilePreview(null); // Reset preview for non-image files
    }
  }
};

const handleUpload = async () => {
  if (!file) {
    alert('Please select a file to upload');
    return;
  }

  const formData = new FormData();
  formData.append('file', file); // Append the file to the form data

  setUploading(true);

  try {
    const response = await apis.addSoumission(localStorage.getItem("std"), devoir?.devoirID, formData);

    if (response.status === 200) {
      setUploadResponse(`File uploaded successfully: ${response.data.fileName}`);
    } else {
      setUploadResponse(`Upload failed: ${response.data.error}`);
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    setUploadResponse('An error occurred during file upload.');
  } finally {
    setUploading(false);
  }
};

const getDevoirsById = (devoir) => {
  apis.getDevoirByID(devoir).then((res) => {
    setDevoir(res?.data || []);
    console.log('devoirs', res);
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
  const email = localStorage.getItem("std");

  apis.addComment(numDevoir, email, parentCmt, data).then(res => console.log("add comment", res));
  setReplay(null);
  setparentCmt("null");
  msg.current.value = "";
  getDevoirsById(numDevoir);
  setInputHidden(true);
};
  

  useEffect(() => {
    apis.tkn()
    getDevoirsById(numDevoir);
    
    getSoum()
    console.log("ls: ",localStorage.getItem("student"))
  }, []);

  
  const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' ,hour:'2-digit',minute:'2-digit' });

  function isImage(url) {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
    const fileExtension = url.split('.').pop().toLowerCase(); // Extract the file extension
    return imageExtensions.includes(fileExtension);
  }
  const getSoum=() => {
    apis.tkn()
    apis.getSoumission(localStorage.getItem("std"),numDevoir).then(res=>{
      setDvSm(res?.data)
      
        if (isImage(res?.data?.file)) {
          setFilePreview(URL.createObjectURL(res?.data?.file));
          setFile(null) // Set preview for images
          console.log("from teste")
        } else {
          setFilePreview(null);
          setFile(res?.data?.file) // Reset preview for non-image files
        }
      
      console.log("res",res?.data)
      
  })
  };
  
  const handleDownload = async () => {
    try {
      // Appel pour récupérer l'image
      
      const imageUrl = dvSm?.file; // L'URL de l'image
  
      if (imageUrl) {
        // Créez un blob depuis l'URL si nécessaire
        const blob = await fetch(imageUrl).then(res => res.blob());
  
        // Utilisez FileSaver.js pour sauvegarder l'image
        saveAs(blob, file.split('/').pop()); // Téléchargez l'image
      } else {
        console.log('Erreur: URL d\'image invalide');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération ou du téléchargement de l\'image :', error);
    }
  };
  return (
    <div className="w-full mx-auto p-6 bg-white shadow-sm rounded-lg flex flex-col lg:flex-row " >
    <div className='flex-1'>  
    <div className="flex flex-col lg:flex-row">
      <div className="">
    <div className="flex items-center justify-between mb-4">
      
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">📄</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold">{devoir?.devoirTitle} : </h1>
            <p className="text-sm text-gray-500">{devoir?.devoirDate ? formatter.format(new Date(devoir?.devoirDate)) : 'N/A'} </p>
          </div>
        </div>
        
      </div>
       
      <div className="flex justify-between items-center mb-4 text-xs lg:text-sm">
        <span className="font-semibold flex fex-row gap-5 items-center"><p>20 points</p> 
      {devoir?.devoirFile?  <a href={devoir?.devoirFile} download="poly2013.pdf" className="text-sm font-light text-gray-600 dark:text-gray-400 flex flex-col items-center"><CloudDownload />Telecharger</a>:''}

        </span>
        
        <span className="text-sm text-gray-500 px-2">Date limite : {devoir?.limiteDate ? formatter.format(new Date(devoir?.limiteDate)) : 'aucun date de limite'}</span>
      </div>
      
      <p className="mb-4 test-xs lg:text-sm px-3">{devoir?.description}</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex flex-row justify-between px-1">
        <h2 className="font-semibold mb-2">Votre devoir</h2>
        <h2 className="font-semibold mb-2 text-red-500">
          {new Date(devoir?.limiteDate) < new Date() ? 'Manquant' : ''}
        </h2>
      </div>
      <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
        <div className="flex items-center space-x-3">
        {filePreview && (
              <div className="mt-4">
                <p>L'image importer :</p>
                <Image
                  src={filePreview}
                  alt="File Preview"
                  className="rounded-lg shadow-lg"
                  width={200}
                  height={200}
                />
              </div>
            )}
            {!filePreview && file ? (
              <div className="mt-4">
                <p>fichier selectionne: {file.name || file.split('/').pop()}</p>
                
              </div>
            ):<></>}
{!filePreview && !file ?
          <div>
            <label
              htmlFor="file"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              File
            </label>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-gray-500 dark:text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                Importer un fichier
              </h2>
              <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                les fichiers Supportee : images, document.
              </p>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>:<></>}
        </div>
      </div>
      <button
        onClick={()=>{
          dvSm?
          handleDownload()
          :handleUpload()

        }
        }
        className="mt-3 w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition duration-200"
        disabled={uploading}
        
      >
        {uploading ? 'Uploading...' : 'Remise'}
      </button >
      {uploadResponse && (
        <p className={`mt-2 text-sm text-gray-600 `} >{uploadResponse}</p>
      )}
    </div>

      </div>
      <div className="border-t pt-4 mb-4">
      <div className=" flex flex-row justify-between px-3">  <h2 className="text-sm font-semibold mb-2">commentaire ajouté au devoir</h2>
      <button onClick={()=>{setInputHidden(false)}}><MessageCirclePlus /></button></div>
        





<div className="flex flex-col">

{ Array.isArray(devoir?.comments) ? devoir?.comments?.map((item) => (
item?.sousComment==false?  <div className="flex flex-col">
  <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
  {item?.student!=null&&item?.student?.profil || item?.teacher!=null&&item?.teacher?.profil ?<img className="w-10 h-10 rounded-full cover" src={item?.student==null?item?.teacher?.profil:item?.student?.profil} alt="avatar"/>:
          <div className="w-10 h-10 min-w-10 min-h-10  bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">
            {item?.student==null?item?.teacher?.fullName?.charAt(0).toUpperCase():item?.student?.fullName?.charAt(0).toUpperCase()}
          </div>
    }
  <div className="flex-1">
    <div className="bg-gray-100 p-3 rounded-lg shadow">
      <h3 className="font-bold text-sm mb-1">{item?.student==null?item?.teacher?.fullName:item?.student?.fullName}</h3>
      <p className="text-xs lg text-sm" >
      {item?.message}
      </p>
    </div>
    <div className="flex items-center justify-between space-x-2 mt-2 text-sm text-gray-500">
    <div className='flex gap-3'> <span>{item?.creationDate ? formatter.format(new Date(item?.creationDate)) : 'N/A'}</span>
      
      <button className="font-semibold" onClick={()=>{setReplay(item?.student==null?item?.teacher?.fullName:item?.student?.fullName);setparentCmt(item?.commentID),setInputHidden(false)}}>Repondre</button></div> 
      
    </div>
  </div>
    </div>
<div className=" pl-5">
    { Array.isArray(item?.replies) ? item?.replies?.map((item1) => (
  item1?.sousComment?<div className="flex items-start space-x-3 p-4 bg-transparent rounded-lg ml-10" >
  {item1?.student!=null&&item1?.student?.profil || item1?.teacher!=null&&item1?.teacher?.profil ?<img className="w-10 h-10 rounded-full cover" src={item?.student==null?item?.teacher?.profil:item?.student?.profil} alt="avatar"/>:
          <div className="w-10 h-10 min-w-10 min-h-10  bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">
            {item1?.student==null?item1?.teacher?.fullName?.charAt(0).toUpperCase():item1?.student?.fullName?.charAt(0).toUpperCase()}
          </div>
    }
  <div className="flex-1">
    <div className="bg-gray-100 p-3 rounded-lg shadow ">
      <h3 className="font-bold text-sm mb-1">{item1?.student==null?item1?.teacher?.fullName:item1?.student?.fullName}</h3>
      <p className="text-xs lg text-sm flex flex-row flex-wrap" >
      <p className='font-bold text-md italic text-blue-900 pr-2'>{item1.replayto}</p>  <p>{item1?.message}</p>
      </p>
    </div>
    <div className="flex items-center justify-between space-x-2 mt-2 text-sm text-gray-500">
    <div className='flex gap-3'> <span>{item1?.creationDate ? formatter.format(new Date(item1?.creationDate)) : 'N/A'}</span>
    
      <button className="font-semibold" onClick={()=>{setReplay(item1?.student==null?item1?.teacher?.fullName:item1?.student?.fullName);setparentCmt(item?.commentID),setInputHidden(false)}}>Repondre</button></div> 
      
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
          <div className={`w-fit rounded-lg pl-3 pr-3 bg-green-400 ${!replay?`hidden`:``}`}>  <input type="text" className='bg-transparent' readOnly value={replay} /><button on onClick={()=>{setReplay(null);setparentCmt("null")}}>X</button></div>
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
      </div>
    
    </div>
  )
}
