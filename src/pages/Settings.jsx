import { useState } from 'react'
import useStore from '../store/useStore'
import { 
  Download, Upload, Settings as SettingsIcon, 
  Save, AlertCircle, CheckCircle, Trash2, FileJson
} from 'lucide-react'

function Settings() {
  const store = useStore()
  const [importStatus, setImportStatus] = useState(null)
  const [showConfirmClear, setShowConfirmClear] = useState(false)

  const exportData = () => {
    const dataToExport = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      data: {
        favorites: store.favorites,
        notes: store.notes,
        quizScores: store.quizScores,
        assignments: store.assignments,
        userRole: store.userRole
      }
    }

    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { 
      type: 'application/json' 
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `volleybal-app-backup-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    setImportStatus({ type: 'success', message: 'Data succesvol geëxporteerd!' })
    setTimeout(() => setImportStatus(null), 3000)
  }

  const importData = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result)
        
        if (!imported.version || !imported.data) {
          throw new Error('Ongeldig bestandsformaat')
        }

        // Import the data into the store
        if (imported.data.favorites) {
          imported.data.favorites.forEach(fav => {
            if (!store.favorites.includes(fav)) {
              store.addFavorite(fav)
            }
          })
        }

        if (imported.data.notes) {
          Object.entries(imported.data.notes).forEach(([key, value]) => {
            store.saveNote(key, value)
          })
        }

        if (imported.data.quizScores) {
          Object.entries(imported.data.quizScores).forEach(([key, value]) => {
            const currentScore = store.getQuizScore(key)
            if (!currentScore || value.score > currentScore.score) {
              store.saveQuizScore(key, value.score)
            }
          })
        }

        if (imported.data.assignments) {
          imported.data.assignments.forEach(assignment => {
            const exists = store.assignments.find(a => 
              a.title === assignment.title && 
              a.createdAt === assignment.createdAt
            )
            if (!exists) {
              store.addAssignment(assignment)
            }
          })
        }

        if (imported.data.userRole) {
          store.setUserRole(imported.data.userRole)
        }

        setImportStatus({ 
          type: 'success', 
          message: `Data succesvol geïmporteerd van ${new Date(imported.exportDate).toLocaleDateString('nl-NL')}` 
        })
      } catch (error) {
        setImportStatus({ 
          type: 'error', 
          message: 'Fout bij importeren: ' + error.message 
        })
      }
    }

    reader.readAsText(file)
    event.target.value = null // Reset file input
  }

  const clearAllData = () => {
    store.clearAllData()
    setShowConfirmClear(false)
    setImportStatus({ 
      type: 'success', 
      message: 'Alle data is gewist' 
    })
    setTimeout(() => setImportStatus(null), 3000)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <SettingsIcon size={24} className="text-gray-700" />
          <h1 className="text-2xl font-bold">Instellingen</h1>
        </div>
        <p className="text-gray-600">
          Beheer je app-data en persoonlijke instellingen
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Data Beheer</h2>
        
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <Download className="text-blue-600 mt-1" size={20} />
              <div className="flex-1">
                <h3 className="font-medium mb-1">Exporteer Data</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Download al je favorieten, notities, quiz scores en opdrachten als JSON bestand
                </p>
                <button
                  onClick={exportData}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <FileJson size={18} />
                  Exporteer naar bestand
                </button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <Upload className="text-green-600 mt-1" size={20} />
              <div className="flex-1">
                <h3 className="font-medium mb-1">Importeer Data</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Laad een eerder geëxporteerd JSON bestand om je data te herstellen
                </p>
                <label className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center gap-2 cursor-pointer">
                  <FileJson size={18} />
                  Selecteer bestand
                  <input
                    type="file"
                    accept=".json"
                    onChange={importData}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <Trash2 className="text-red-600 mt-1" size={20} />
              <div className="flex-1">
                <h3 className="font-medium mb-1 text-red-900">Wis Alle Data</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Verwijder permanent alle opgeslagen data uit de app
                </p>
                {!showConfirmClear ? (
                  <button
                    onClick={() => setShowConfirmClear(true)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Wis alle data
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={clearAllData}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Bevestig wissen
                    </button>
                    <button
                      onClick={() => setShowConfirmClear(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Annuleren
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {importStatus && (
          <div className={`mt-4 p-4 rounded-lg flex items-start gap-2 ${
            importStatus.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {importStatus.type === 'success' ? (
              <CheckCircle size={20} className="mt-0.5" />
            ) : (
              <AlertCircle size={20} className="mt-0.5" />
            )}
            <span>{importStatus.message}</span>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">App Informatie</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Versie: 1.0.0</p>
          <p>Ontwikkeld voor: ALO studenten en docenten</p>
          <p>Methodieken: Volley Stars & Smashball</p>
          <p>Offline beschikbaar: ✓</p>
        </div>
      </div>
    </div>
  )
}

export default Settings