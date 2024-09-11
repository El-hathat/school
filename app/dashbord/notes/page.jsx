import React from 'react'

const subjects = [
  { name: 'EDUCATION PHYSIQUE', grades: [16.5, 14, 14.5, null, null] },
  { name: 'HISTOIRE GEOGRAPHIE', grades: [10, 10, 10, 11, null] },
  { name: 'INFORMATIQUE', grades: [12, 14, 12, 12, null] },
  { name: 'INSTRUCTION ISLAMIQUE', grades: [15, 15.5, null, 16.5, null] },
  { name: 'LANGUE ARABE', grades: [11, 4, null, 12.5, null] },
  { name: 'LANGUE FRANCAISE', grades: [16, 18, 11, 18, 14.5] },
  { name: 'MATHEMATIQUES', grades: [16, 17, 18, null, null] },
  { name: 'PHYSIQUE CHIMIE', grades: [15.5, 16, 18.5, 15.5, null] },
  { name: 'SC. DE LA VIE ET DE LA TERRE', grades: [20, 12, null, 20, null] },
]

export default function page() {
  return (
    <div className="  p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">Suivi des notes</h1>
      <div className="flex mb-4 ">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Année Scolaire</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>2014/2015</option>
            <option>2015/2016</option>
            <option>2016/2017</option>
            <option>2017/2018</option>
            <option>2018/2019</option>
            <option>2019/2020</option>
            <option>2020/2021</option>
          </select>
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Session</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>Premier semestre</option>
            <option>Deuxième semestre</option>
          </select>
        </div>
      </div>
      <div className="bg-white shadow  sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Moyenne Note</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">LYCEE COLLEGIAL BOUHOUDA - 2° Année Secondaire Collégial Général</p>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">2ASCG-4 - 36 élèves</p>
        </div>
        <div className="border-t border-gray-200 overflow-x-scroll">
          <table className=" divide-y divide-gray-200 ">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matière</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premier contrôle</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deuxième contrôle</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Troisième contrôle</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quatrième contrôle</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activités intégrées</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs lg:text-md font-medium text-gray-900">{subject.name}</td>
                  {subject.grades.map((grade, gradeIndex) => (
                    <td key={gradeIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {grade !== null ? grade : '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}