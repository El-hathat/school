import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useRouter } from 'next/navigation';
import sessionWork from './sessionWork';
const Url='http://localhost:8080'
//const Url='https://nlschool-backend-1.onrender.com'
// Making a GET request
const axiosCli=axios.create({
  baseURL:Url,
  
})


var authent // Assurez-vous que le token est stocké après l'authentification
var student
var classe

const tkn=()=> {
authent={  headers: {
  'Authorization': `Bearer ${sessionWork.getSessionValue("token")}`,
  'Content-Type': 'application/json' // Spécifie que les données sont envoyées en JSON
}}

//const route=useRouter()

  student=sessionWork.getSessionValue("token")?jwtDecode(sessionWork.getSessionValue("token"))?.sub:useRouter().push("/signin");
  classe=sessionWork.getSessionValue("token")?jwtDecode(sessionWork.getSessionValue("token"))?.classe:useRouter().push("signin");

}

const tojson=  {
  headers: {
      'Content-Type': 'application/json' // Spécifie que les données sont envoyées en JSON
  }
}
//##########################################################
const getStudent=()=>axiosCli.get(`/student/${student}`,authent)
const getCours=()=>axiosCli.get("/classes/1/matieres",authent)
const getCoursDetails=(idCour)=>axiosCli.get("/cours/"+idCour,authent)
const getDevoirsByMatiere=(matiere)=>axiosCli.get("/devoir/"+matiere,authent)
const getSoumissionsByStudent=(matiere)=>axiosCli.get("/devoir/devoirSoumis/"+student+"/"+matiere,authent)
const getDevoirByID=(id)=>axiosCli.get("/devoir/devoirById/"+id,authent)
const getFinaleNote=(year,semestre)=>axiosCli.get("/student/notefinale/"+student+"/"+year+"/"+semestre,authent)
const getStudentAsences=(month,year)=>axiosCli.get('/student/absences/'+month+'/'+year+'/'+student,authent)
const getStudentNotes=(schoolyear,semestre)=>axiosCli.get("/student/notes/"+schoolyear+"/"+semestre+"/"+classe+"/"+student,authent)
const getClassInfo=(year)=>axiosCli.get("/student/classinfo/"+student+"/"+year,authent)
const getBillsByEtat=(etat)=>axiosCli.get(`/student/getAllBills/${student}/${etat}`,authent)
const getScoreByStudent=()=>axiosCli.get(`/student/score/${student}`,authent)
const getStatistique=()=>axiosCli.get(`/student/statistique/${student}`,authent)
const getActualites=()=>axiosCli.get(`/student/actualites/${classe}`,authent)
const getACertificats=()=>axiosCli.get(`/student/certificats/${student}`,authent)
const getClasse=()=>axiosCli.get(`/classes/${student}`,authent)
const gettimeTable=()=>axiosCli.get(`/classes/timetable/${student}`,authent)
const getNofifications=()=>axiosCli.get(`/notifications/${student}`,authent)
const getNofificationsNotReading=()=>axiosCli.get(`/notifications/isreading/${student}`,authent)
const addLike=(id,like)=>axiosCli.get(`/comment/addLike/${id}/${like}`,authent)
const getSoumission=(dv)=>axiosCli.get(`/devoir/getSoumission/${student}/${dv}`,authent)
const setNotification=()=>axiosCli.get('/notifications/add/'+student,authent)
const delComment=(id)=>axiosCli.delete('/comment/delete/'+id,authent)
const forgotMyPassword=(cne,tel,gmail)=>axiosCli.get(`/student/forgotpwd/${cne}/${tel}/${gmail}`)
const addSoumission=(id,file)=>axiosCli.post('/devoir/upload/'+student+'/'+id,file,{  headers: {
  'Authorization': `Bearer ${sessionWork.getSessionValue("token")}`,
  'Content-Type': 'multipart/form-data', // Spécifie que les données sont envoyées en JSON
}})
const resetPassword=(email,oldPassword,newPassword)=>axiosCli.post('/student/passwordUpdate',
  {
    email:email,
    oldPassword:oldPassword,
    newPassword:newPassword

  },
  authent
);
const signin = (email, password) => {
  return axiosCli.post(
      '/api/v1/auth',
      {
          email: email,
          password: password
      },
    tojson
  );
};

const addComment=(dv,email,parent,data)=>axiosCli.post('/comment/add/'+dv+'/'+email+'/'+parent,data,authent);
const addComment2Cours=(cours,email,parent,data)=>axiosCli.post('/comment/addCoursComment/'+cours+'/'+email+'/'+parent,data,authent);






export default{
  getStudent,
  getCours,
  getCoursDetails,
  getDevoirsByMatiere,
  getSoumissionsByStudent,
  getDevoirByID,
  getStudentAsences,
  getStudentNotes,
  getFinaleNote,
  getClassInfo,
  getBillsByEtat,
  getScoreByStudent,
  getStatistique,
  getActualites,
  signin,
  getACertificats,
  getClasse,
  gettimeTable,
  getNofifications,
  setNotification,
  resetPassword,
  addComment,
  addLike,
  addSoumission,
  getSoumission,
  addComment2Cours,
  getNofificationsNotReading,
  forgotMyPassword,
  delComment,
  tkn

}

