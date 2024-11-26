'use client'
import React from 'react';

import PayPalButton from '../paypal/payPalButton';
import apis from '@/app/utils/apis';
import { useRouter } from 'next/navigation';
const CheckoutPage = ({params :{id}}) => {
  const createAndClickLink = () => {
    const link = document.createElement('a'); // Crée un élément <a>
    link.href = '/dashbord/factures'; // Définit l'URL
    
    // Ajoutez le lien au document si nécessaire
    document.body.appendChild(link); 
  
    // Simulez un clic sur le lien
    link.click();
  
    // Supprimez le lien si vous ne voulez pas qu'il reste dans le DOM
    document.body.removeChild(link);
  };
  

  const handleSuccess = (order) => {

    console.log('Payment successful!', order);
    apis.payerFacture(id).then(res=>console.log("payer avec succes",res))
    createAndClickLink();
    
  };

  return (
  
  
<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-lg font-semibold text-gray-900 md:text-3xl">
      Un avenir brillant commence ici !
Offrez à votre enfant les meilleures opportunités avec NLSchool.
Finalisez votre paiement dès maintenant et accompagnez-le sur le chemin de la réussite ! 🎓
      </h2>

    

      <div className="mt-4 md:mt-8">
      <h2 className='my-8'>Choisis la methode de paiment que vous voulez : </h2>
    
      <PayPalButton amount="0.10" onSuccess={handleSuccess} />
    
      </div>
    </div>
  </div>

  <img
    alt=""
    src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full object-cover sm:h-full"
  />
</section>
  );
};

export default CheckoutPage;
