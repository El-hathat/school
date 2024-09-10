'use client'
import { useState } from 'react'

export default function Password() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    e.preventDefault()
    // Here you would typically call an API to change the password
    // This is just a simple validation example
    if (newPassword !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.')
    } else if (newPassword.length < 8) {
      setError('Le nouveau mot de passe doit contenir au moins 8 caractères.')
    } else {
      setError('')
      alert('Mot de passe changé avec succès!')
    }
  }

  return (
    <div className="w-full mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Changer le mot de passe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
            Mot de passe :
          </label>
          <input
            type="password"
            id="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
            Nouveau mot de passe :
          </label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
            Confirmer le mot de passe :
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Changer
        </button>
      </form>
      {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
      <p className="mt-4 text-red-600 text-sm">
        Un mot de passe fort est nécessaire. Les mots de passe forts se composent de 8 à 256 caractères et doivent combiner au moins trois des éléments suivants : lettres majuscules, lettres minuscules, chiffres et symboles.
      </p>
    </div>
  )
}