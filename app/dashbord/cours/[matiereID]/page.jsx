'use client'
import apis from '@/app/utils/apis';
import { Check, CloudDownload, MessageCircleMore } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { saveAs } from 'file-saver';
import { useRouter } from 'next/navigation';
import sessionWork from '@/app/utils/sessionWork';
import { jwtDecode } from 'jwt-decode';

function Page({ params: { matiereID } }) {
  const route = useRouter();
  const [msgChange, setMsgChange] = useState();
  const msg = useRef();
  const cmt = useRef();

  const handlechange = (e) => {
    setMsgChange(e.target.value);
  }
  const handleComment = (id) => {
    apis.tkn();

    // Vérifiez si cmt.current est bien défini
    if (msgChange) { // Vérifiez que la valeur n'est pas vide
    //  console.log("Valeur actuelle de l'input:", cmt.current.value); // Vérification

      const data = {
        commentID: null,
        message: msgChange,
        creationDate: new Date(),
        likeCount: 0,
        sousComment: false,
        replayto: '',
        student: null,
        teacher: null,
        replies: []
      };

      const email = jwtDecode(sessionWork.getSessionValue("token"))?.sub;

      apis.addComment2Cours(id, email, null, data)
        .then(res => {
          console.log("add comment2Cours", res);
          getCours(); // Mettre à jour la liste des cours et commentaires
          setMsgChange(""); // Réinitialiser l'input de commentaire
        })
        .catch(err => {
          console.error("Erreur lors de l'ajout du commentaire:", err);
        });
    } else {
      alert("votre commentaire est vide");
    }
  };

  const [cours, setCours] = useState([]);
  const [prof, setProf] = useState("");

  const getCours = () => {
    apis.getCours().then(res => {
      res?.data?.forEach(item => {
        if (item?.matID == matiereID) {
          setCours(item?.cours);
          setProf(item?.teacher);
        }
      });
    });
  };

  useEffect(() => {
    apis.tkn();
    getCours();
  }, []);

  const formatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const handleDownload = async (currentCour) => {
    try {
      const fileUrl = currentCour?.file;

      if (fileUrl) {
        const blob = await fetch(fileUrl).then(res => res.blob());
        saveAs(blob, fileUrl.split('/').pop());
      } else {
        console.log('Erreur: URL d\'image invalide');
      }
    } catch (error) {
      route.push(currentCour?.file);
    }
  };

  return (
    <div className="">
      <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1488998427799-e3362cec87c3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">{cours?.length} Cours</h2>
          </div>
        </div>
      </section>
      <div className='grid grid-cols-1 gap-6 m-0 lg:m-6'>
        {Array.isArray(cours) ? cours?.map((item, cle) => (
          <div className="w-full lg:px-8 px-3 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800" key={cle}>
            <div className="flex items-center justify-between">
              <div className="block">
                <div className="flex items-center px-5 gap-2">
                  {prof?.profil ?
                    <img className="object-cover ml-[-10%] w-10 h-10 mx-4 rounded-full sm:block" src={prof?.profil} alt="avatar" /> :
                    <div className="w-10 h-10 min-w-10 min-h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">
                      {prof?.fullName?.charAt(0).toUpperCase()}
                    </div>
                  }
                  <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex="0" role="link">{prof?.fullName}</a>
                </div>
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">{item?.pubDate ? formatter.format(new Date(item.pubDate)) : 'N/A'}</span>
              </div>
              <a href={item?.file} className="text-sm font-light text-gray-600 dark:text-gray-400 flex flex-col items-center" onClick={() => handleDownload(item)}>
                <CloudDownload />Télécharger
              </a>
            </div>
            <div className="flex flex-col-reverse lg:flex-row">
              <button className="flex flex-row gap-x-3 items-center lg:flex-col" onClick={() => handleDownload(item)}>
                <div className="p-5">
                  <img
                    alt=""
                    src='/images/pdf.png'
                    className="h-12 w-12 rounded-sm md:h-24 lg:h-40 md:w-36 lg:w-60 object-contain lg:rounded-lg "
                  />
                </div>
                <div>
                  <h5 className="font-bold uppercase text-gray-900">
                    {item?.matName}
                  </h5>
                </div>
              </button>
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
                <div className="">
                  {jwtDecode(sessionWork.getSessionValue("token"))?.profil ?
                    <img className="object-cover ml-[-10%] w-10 h-10 mx-4 rounded-full sm:block" src={jwtDecode(sessionWork.getSessionValue("token"))?.profil} alt="avatar" /> :
                    <div className="w-10 h-10 min-w-10 min-h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">
                      {jwtDecode(sessionWork.getSessionValue("token"))?.name?.charAt(0).toUpperCase()}
                    </div>
                  }
                </div>
                <div className="relative flex-grow">
                <input
          onChange={handlechange}
            type="text"
            value={msgChange}
            placeholder="Ajouter un commentaire au cours..."
            className="flex-grow p-2 border rounded-md w-full placeholder:text-[11px]"
          
          />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Envoyer le commentaire"
                    onClick={() => handleComment(item?.coursID)} // Appel à handleComment
                  >
                    <svg className="w-5 h-5 min-w-5 min-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                <a href={'/dashbord/cours/' + matiereID + '/' + item?.coursID} className="flex flex-row">
                  <MessageCircleMore />({item?.comments?.length})
                </a>
              </div>
            </div>
          </div>
        )) : <p>No data available</p>}
      </div>
    </div>
  );
}

export default Page;
