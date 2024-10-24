'use client'
import apis from '@/app/utils/apis'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

export default function ForgotPasswordPage() {
  const router = useRouter();
  const cne = useRef(null);
  const email = useRef(null);
  const tel = useRef(null);

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Start loading state

    const cneValue = cne?.current?.value;
    const telValue = tel?.current?.value;
    const emailValue = email?.current?.value?.toLowerCase();

    try {
      const res = await apis.forgotMyPassword(cneValue, telValue, emailValue);
      
      if (res?.data === true) {
        setMessage({
          type: 'success',
          text: `Nous avons envoyé le nouveau mot de passe à cette boîte mail : ${emailValue}`,
        });
        
        setTimeout(() => {
          router.push('/signin');
        }, 3000);
      } else {
        setMessage({
          type: 'error',
          text: 'Les données que vous avez entrées sont incorrectes. Réessayez à nouveau.',
        });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Une erreur s\'est produite lors de la récupération du mot de passe. Veuillez réessayer plus tard.',
      });
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className='w-full h-[100%] absolute lg:bg-no-repeat lg:bg-cover flex justify-center items-center'
         style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/abstrait-bleu-art-enfume_53876-110800.jpg)' }}>
      <div className="container w-full h-screen lg:w-1/2 mx-auto p-6 bg-white rounded-lg shadow-md bg-opacity-30">
        <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">J'ai oublié le mot de passe</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cne" className="block text-sm font-bold text-white mb-1">
              Code d'élève
            </label>
            <input
              type="text"
              ref={cne}
              placeholder="Code d'élève"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="tel" className="block text-sm font-bold text-white mb-1">
              Numéro de téléphone
            </label>
            <input
              type="tel"
              ref={tel}
              placeholder="06xxxxxxxx"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-white mb-1">
              Email
            </label>
            <input
              type="email"
              ref={email}
              placeholder="xxxxxx@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'En cours...' : 'Récupérer'}
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-md bg-white rounded-md px-3 ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
}
