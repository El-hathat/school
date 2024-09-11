import React from 'react'


export default function page() {
  // Exemple de données de factures (à remplacer par vos vraies données)
  const factures = [
    { id: '9', mois: 'Septombre 2022', dateLimite: '2023-01-15', montant: 500, etat: 'payée' },
    { id: '10', mois: 'Octobre 2022', dateLimite: '2023-02-15', montant: 500, etat: 'payée' },
    { id: '11', mois: 'Novembre 2022', dateLimite: '2023-03-15', montant: 500, etat: 'en attente' },
    { id: '12', mois: 'Decembre 2022', dateLimite: '2023-04-15', montant: 500, etat: 'en retard' },
    { id: '1', mois: 'Janvier 2023', dateLimite: '2023-01-15', montant: 500, etat: 'payée' },
    { id: '2', mois: 'Février 2023', dateLimite: '2023-02-15', montant: 500, etat: 'payée' },
    { id: '3', mois: 'Mars 2023', dateLimite: '2023-03-15', montant: 500, etat: 'en attente' },
    { id: '4', mois: 'Avril 2023', dateLimite: '2023-04-15', montant: 500, etat: 'en retard' }, 
     { id: '5', mois: 'Mai 2023', dateLimite: '2023-01-15', montant: 500, etat: 'payée' },
    { id: '6', mois: 'Juin 2023', dateLimite: '2023-02-15', montant: 500, etat: 'payée' },
    { id: '7', mois: 'Septombre 2023', dateLimite: '2023-03-15', montant: 500, etat: 'en attente' },
    { id: '8', mois: 'Octobre 2023', dateLimite: '2023-04-15', montant: 500, etat: 'en retard' },
  ]

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR')
  }

  // Fonction pour obtenir la classe CSS du badge selon l'état
  const getBadgeClass = (etat) => {
    switch (etat) {
      case 'payée':
        return 'bg-green-500'
      case 'en attente':
        return 'bg-yellow-500'
      case 'en retard':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="w-full  mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Factures d'études</h2>
      </div>
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 font-semibold text-sm text-gray-700 border-b">Mois</th>
                <th className="py-2 px-4 font-semibold text-sm text-gray-700 border-b">Date limite</th>
                <th className="py-2 px-4 font-semibold text-sm text-gray-700 border-b">Montant</th>
                <th className="py-2 px-4 font-semibold text-sm text-gray-700 border-b">État</th>
              </tr>
            </thead>
            <tbody>
              {factures.map((facture) => (
                <tr key={facture.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{facture.mois}</td>
                  <td className="py-2 px-4 border-b">{formatDate(facture.dateLimite)}</td>
                  <td className="py-2 px-4 border-b">{facture.montant.toFixed(2)} DH</td>
                  <td className="py-2 px-4 border-b">
                    <span className={`px-2 py-1 text-xs text-nowrap font-semibold rounded-full text-white ${getBadgeClass(facture.etat)}`}>
                      {facture.etat}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}