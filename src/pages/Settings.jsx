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
        videoUrls: store.videoUrls
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

        if (imported.data.videoUrls) {
          Object.entries(imported.data.videoUrls).forEach(([key, value]) => {
            store.setVideoUrl(key, value)
          })
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
    event.target.value = ''
    setTimeout(() => setImportStatus(null), 3000)
  }

  const clearAllData = () => {
    store.clearAllData()
    setShowConfirmClear(false)
    setImportStatus({ type: 'success', message: 'Alle data is gewist!' })
    setTimeout(() => setImportStatus(null), 3000)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <SettingsIcon size={28} />
          Instellingen
        </h1>
      </div>

      {/* Status Messages */}
      {importStatus && (
        <div className={`rounded-lg p-4 flex items-center gap-3 ${
          importStatus.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {importStatus.type === 'success' ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span>{importStatus.message}</span>
        </div>
      )}

      {/* Data Export/Import */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Data Beheer</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Exporteer Data</h3>
            <p className="text-sm text-gray-600 mb-3">
              Download al je favorieten, notities, quiz scores en video URLs als backup.
            </p>
            <button
              onClick={exportData}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Download size={18} />
              Exporteer Data
            </button>
          </div>

          <div>
            <h3 className="font-medium mb-2">Importeer Data</h3>
            <p className="text-sm text-gray-600 mb-3">
              Upload een eerder geëxporteerd backup bestand.
            </p>
            <label className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition-colors w-fit">
              <Upload size={18} />
              Importeer Data
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

      {/* Clear Data */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Data Wissen</h2>
        <p className="text-sm text-gray-600 mb-4">
          Verwijder alle opgeslagen data. Dit kan niet ongedaan gemaakt worden.
        </p>
        
        {!showConfirmClear ? (
          <button
            onClick={() => setShowConfirmClear(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Trash2 size={18} />
            Alle Data Wissen
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={clearAllData}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <CheckCircle size={18} />
              Ja, Wis Alles
            </button>
            <button
              onClick={() => setShowConfirmClear(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              Annuleren
            </button>
          </div>
        )}
      </div>

      {/* App Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">App Informatie</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Versie: 1.0.0</p>
          <p>Ontwikkeld voor: ALO studenten en docenten</p>
          <p>Methodieken: Volley Stars</p>
          <p>Offline beschikbaar: ✓</p>
        </div>
      </div>
    </div>
  )
}

export default Settings