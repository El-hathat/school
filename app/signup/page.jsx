'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import logo from '../../public/images/logo2.png';
import { ArrowLeftCircle, Calendar, CircleUserRound, Contact, Mail, MapPin, Phone, UserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';

function page() {
  const [studentData, setStudentData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    birthDate: '',
    tel: '',
    guardianTel: '',
    address: '',
    genre: 'Garcon',
    email: '',
    profil: null, // For profile photo
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setStudentData({ ...studentData, profil: e.target.files[0] });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data to handle image upload
    const formData = new FormData();
    Object.keys(studentData).forEach((key) => {
      formData.append(key, studentData[key]);
    });

    try {
      await axios.post('http://localhost:8080/student/registrer', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Étudiant ajouté avec succès');
      useRouter().push("/")
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'étudiant :', error);
    }
  };

  return (
    <div className='w-full absolute lg:bg-no-repeat lg:bg-cover' style={{backgroundImage: 'url(https://img.freepik.com/photos-gratuite/abstrait-bleu-art-enfume_53876-110800.jpg)'}}>
      <section className="dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="flex">
            <a href="/signin" className='lg:hidden'><ArrowLeftCircle color='#ff8367' size='40px'/></a>
            <div className="flex justify-center mx-auto">
            
              <Image className="w-24 h-8 lg:h-full lg:w-full" src={logo} alt="logo"/>
            </div>
            </div>
            <div className="relative flex items-center mt-8">
            <UserRound className="absolute left-3" color='#cccccc'/>
              <input type="text" name="fullName" value={studentData.fullName} onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11" placeholder="Nom Complet" />
            </div>

            <div className="relative flex items-center mt-8">
            <UserRound className="absolute left-3" color='#cccccc'/>
              <input type="text" name="fatherName" value={studentData.fatherName} onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11" placeholder="Nom complet du père" />
            </div>

            <div className="relative flex items-center mt-8">
            <UserRound className="absolute left-3" color='#cccccc'/>
              <input type="text" name="motherName" value={studentData.motherName} onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11" placeholder="Nom complet de la mère" />
            </div>

            <div className="relative flex items-center mt-8">
              <Calendar className="absolute left-3" color='#cccccc'/>
              <input type="date" name="birthDate" value={studentData.birthDate} onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11" />
            </div>

            <div className="relative flex items-center mt-8">
              <Phone className="absolute left-3" color='#cccccc'/>
              <input type="tel" name="tel" value={studentData.tel} onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11" placeholder="Téléphone" />
            </div>

            <div className="relative flex items-center mt-8">
              <Phone className="absolute left-3" color='#cccccc'/>
              <input type="tel" name="guardianTel" value={studentData.guardianTel} onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11" placeholder="Téléphone du père" />
            </div>

            <div className="relative flex items-center mt-8">
              <MapPin className="absolute left-3" color='#cccccc'/>
              <input type="text" name="address" value={studentData.address} onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11" placeholder="Adresse" />
            </div>

            <div className="relative flex items-center mt-8">
            <Contact className="absolute left-3" color='#cccccc'/>
              <select name="genre" value={studentData.genre} onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11">
                <option value="Garcon">Garçon</option>
                <option value="Fille">Fille</option>
              </select>
            </div>
            <label className="absolute left-11 text-white mt-3">Photo de profil</label>
            <div className="relative flex items-center mt-8">
            <CircleUserRound className="absolute left-3" color='#cccccc'/>
              <input type="file" onChange={handleFileChange} className="block w-full py-3 bg-white border-2 border-dashed rounded-lg px-11" />
              
            </div>

            <div className="relative flex items-center mt-6">
            <Mail className="absolute left-3" color='#cccccc'/>
              <input type="email" name="email" value={studentData.email} onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11" placeholder="Email" />
            </div>

            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white bg-blue-500 rounded-lg">
              S'nscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default page;
