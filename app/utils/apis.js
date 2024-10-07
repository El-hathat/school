import axios from 'axios';

const Url='http://localhost:8082'
// Making a GET request
const axiosCli=axios.create({
  baseURL:Url,
  
})
//##########################################################
const getStudent=()=>axiosCli.get('/student/s123456789')
const getCours=()=>axiosCli.get("/classes/1/matieres")
const getCoursDetails=(idCour)=>axiosCli.get("/cours/"+idCour)
const getDevoirsByMatiere=(matiere)=>axiosCli.get("/devoir/"+matiere)
const getSoumissionsByStudent=(student,matiere)=>axiosCli.get("/devoir/devoirSoumis/"+student+"/"+matiere)

export default{
  getStudent,
  getCours,
  getCoursDetails,
  getDevoirsByMatiere,
  getSoumissionsByStudent

}

