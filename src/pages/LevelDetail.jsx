import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { volleyStarsLevels } from '../data/volleyData'
import useStore from '../store/useStore'
import YouTubeEmbed from '../components/YouTubeEmbed'
import AddVideoModal from '../components/AddVideoModal'
import { 
  ArrowLeft, Star, BookOpen, Play, Users, Ruler, 
  Target, CheckCircle, AlertCircle, StickyNote, Save, Plus, Trash2
} from 'lucide-react'

function LevelDetail() {
  const { levelId } = useParams()
  const navigate = useNavigate()
  const level = volleyStarsLevels.find(l => l.id === levelId)
  
  const { 
    isFavorite, 
    addFavorite, 
    removeFavorite, 
    getNote, 
    saveNote,
    getCustomVideos,
    addCustomVideo,
    removeCustomVideo,
    userRole
  } = useStore()
  
  const [activeTab, setActiveTab] = useState('rules')
  const [note, setNote] = useState(getNote(levelId) || '')
  const [showNoteSaved, setShowNoteSaved] = useState(false)
  const [showAddVideoModal, setShowAddVideoModal] = useState(false)
  
  const customVideos = getCustomVideos(levelId)

  if (!level) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Level niet gevonden</p>
        <button
          onClick={() => navigate('/volley-stars')}
          className="mt-4 text-orange-600 hover:underline"
        >
          Terug naar overzicht
        </button>
      </div>
    )
  }

  const toggleFavorite = () => {
    if (isFavorite(levelId)) {
      removeFavorite(levelId)
    } else {
      addFavorite(levelId)
    }
  }

  const handleSaveNote = () => {
    saveNote(levelId, note)
    setShowNoteSaved(true)
    setTimeout(() => setShowNoteSaved(false), 2000)
  }
  
  const handleAddVideo = (videoData) => {
    addCustomVideo(levelId, videoData)
  }

  const tabs = [
    { id: 'rules', label: 'Spelregels', icon: BookOpen },
    { id: 'didactic', label: 'Didactiek', icon: AlertCircle },
    { id: 'videos', label: "Video's", icon: Play },
    { id: 'notes', label: 'Notities', icon: StickyNote }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/volley-stars')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <span className="text-4xl">{level.icon}</span>
            <h1 className="text-2xl font-bold">{level.name}</h1>
          </div>
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded-lg transition-colors ${
              isFavorite(levelId) 
                ? 'bg-yellow-100 text-yellow-600' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <Star size={24} fill={isFavorite(levelId) ? 'currentColor' : 'none'} />
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Users size={16} />
              <span className="font-semibold">Team</span>
            </div>
            <p className="text-gray-800">{level.teamSize}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Ruler size={16} />
              <span className="font-semibold">Net</span>
            </div>
            <p className="text-gray-800">{level.netHeight}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Target size={16} />
              <span className="font-semibold">Veld</span>
            </div>
            <p className="text-gray-800">{level.courtSize}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <CheckCircle size={16} />
              <span className="font-semibold">Focus</span>
            </div>
            <p className="text-gray-800">{level.keyTechnique}</p>
          </div>
        </div>

        <div className="border-b mb-6">
          <div className="flex gap-4 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-b-2 border-orange-500 text-orange-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="min-h-[300px]">
          {activeTab === 'rules' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Hoofddoel</h3>
                <p className="text-gray-700">{level.mainGoal}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Spelregels</h3>
                <ul className="space-y-2">
                  {level.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'didactic' && (
            <div className="space-y-4">
              <h3 className="font-semibold mb-2">Didactische tips</h3>
              <ul className="space-y-3">
                {level.didacticTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="space-y-4">
              {userRole === 'teacher' && (
                <button
                  onClick={() => setShowAddVideoModal(true)}
                  className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-orange-300 hover:text-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus size={20} />
                  Video toevoegen
                </button>
              )}
              
              {level.videos.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3 text-gray-700">Officiële video's</h4>
                  <div className="space-y-3">
                    {level.videos.map((video, index) => (
                      <div key={index}>
                        <YouTubeEmbed url={video.url} title={video.title} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {customVideos.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3 text-gray-700 flex items-center gap-2">
                    Toegevoegde video's
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                      {customVideos.length}
                    </span>
                  </h4>
                  <div className="space-y-3">
                    {customVideos.map((video) => (
                      <div key={video.id} className="relative">
                        <YouTubeEmbed url={video.url} title={video.title} />
                        {userRole === 'teacher' && (
                          <button
                            onClick={() => removeCustomVideo(levelId, video.id)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                            title="Video verwijderen"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {level.videos.length === 0 && customVideos.length === 0 && (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <Play size={48} className="text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Nog geen video's beschikbaar voor dit level</p>
                  {userRole === 'teacher' && (
                    <p className="text-sm text-gray-500 mt-2">
                      Klik op "Video toevoegen" om YouTube video's toe te voegen
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Persoonlijke notities
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full p-3 border rounded-lg resize-none h-40 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Schrijf hier je aantekeningen over dit level..."
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSaveNote}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2"
                >
                  <Save size={18} />
                  Opslaan
                </button>
                {showNoteSaved && (
                  <span className="text-green-600 text-sm">✓ Notitie opgeslagen</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <AddVideoModal
        isOpen={showAddVideoModal}
        onClose={() => setShowAddVideoModal(false)}
        onAdd={handleAddVideo}
      />
    </div>
  )
}

export default LevelDetail