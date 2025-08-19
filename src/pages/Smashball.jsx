import { useState } from 'react'
import { smashballInfo } from '../data/volleyData'
import useStore from '../store/useStore'
import YouTubeEmbed from '../components/YouTubeEmbed'
import { 
  Star, Users, Ruler, Target, Zap, BookOpen, 
  Play, AlertCircle, TrendingUp, StickyNote, Save
} from 'lucide-react'

function Smashball() {
  const { 
    isFavorite, 
    addFavorite, 
    removeFavorite, 
    getNote, 
    saveNote 
  } = useStore()
  
  const [activeTab, setActiveTab] = useState('overview')
  const [note, setNote] = useState(getNote('smashball') || '')
  const [showNoteSaved, setShowNoteSaved] = useState(false)

  const toggleFavorite = () => {
    if (isFavorite('smashball')) {
      removeFavorite('smashball')
    } else {
      addFavorite('smashball')
    }
  }

  const handleSaveNote = () => {
    saveNote('smashball', note)
    setShowNoteSaved(true)
    setTimeout(() => setShowNoteSaved(false), 2000)
  }

  const tabs = [
    { id: 'overview', label: 'Overzicht', icon: BookOpen },
    { id: 'rules', label: 'Spelregels', icon: Zap },
    { id: 'didactic', label: 'Didactiek', icon: AlertCircle },
    { id: 'progression', label: 'Progressie', icon: TrendingUp },
    { id: 'videos', label: "Video's", icon: Play },
    { id: 'notes', label: 'Notities', icon: StickyNote }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-6 text-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{smashballInfo.icon}</span>
            <div>
              <h1 className="text-3xl font-bold">{smashballInfo.name}</h1>
              <p className="text-white/90 mt-1">{smashballInfo.ageGroup}</p>
            </div>
          </div>
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded-lg transition-colors ${
              isFavorite('smashball') 
                ? 'bg-white/30 text-yellow-300' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Star size={24} fill={isFavorite('smashball') ? 'currentColor' : 'none'} />
          </button>
        </div>
        
        <p className="text-lg mb-4">{smashballInfo.mainGoal}</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Users size={16} />
              <span className="font-semibold">Team</span>
            </div>
            <p>{smashballInfo.teamSize}</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Ruler size={16} />
              <span className="font-semibold">Net</span>
            </div>
            <p>{smashballInfo.netHeight}</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Target size={16} />
              <span className="font-semibold">Veld</span>
            </div>
            <p>{smashballInfo.courtSize}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
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
                      ? 'border-b-2 border-red-500 text-red-600'
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

        <div className="min-h-[400px]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Kernkenmerken</h3>
                <ul className="space-y-2">
                  {smashballInfo.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Zap size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-red-800">
                  <strong>Let op:</strong> Smashball draait om spektaculaire acties en plezier. 
                  De smash staat centraal, maar veiligheid en techniek blijven belangrijk!
                </p>
              </div>
            </div>
          )}

          {activeTab === 'rules' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Officiële spelregels</h3>
              <ul className="space-y-2">
                {smashballInfo.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'didactic' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Didactische aanpak</h3>
              <ul className="space-y-3">
                {smashballInfo.didacticTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'progression' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-3">Progressiepad</h3>
              <div className="space-y-3">
                {smashballInfo.progressionPath.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-lg flex items-center justify-center font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="space-y-4">
              {smashballInfo.videos.length > 0 ? (
                smashballInfo.videos.map((video, index) => (
                  <div key={index}>
                    <YouTubeEmbed url={video.url} title={video.title} />
                  </div>
                ))
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <Play size={48} className="text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Nog geen video's beschikbaar</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Persoonlijke notities over Smashball
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full p-3 border rounded-lg resize-none h-40 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Schrijf hier je aantekeningen over Smashball..."
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSaveNote}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
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
    </div>
  )
}

export default Smashball