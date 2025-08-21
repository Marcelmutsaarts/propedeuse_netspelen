import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { volleyStarsLevels } from '../data/volleyData'
import useStore from '../store/useStore'
import YouTubeEmbed from '../components/YouTubeEmbed'
import { 
  ArrowLeft, Star, BookOpen, Play, Users, Ruler, 
  Target, CheckCircle, AlertCircle, StickyNote, Save, ExternalLink,
  ChevronDown, ChevronRight, Lightbulb, Zap, Dumbbell, Clock,
  MapPin, List, HelpCircle
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
    getVideoUrl,
    setVideoUrl
  } = useStore()
  
  const [activeTab, setActiveTab] = useState('overview')
  const [note, setNote] = useState(getNote(levelId) || '')
  const [showNoteSaved, setShowNoteSaved] = useState(false)
  const [videoInput, setVideoInput] = useState(getVideoUrl(levelId) || '')
  const [videoSaved, setVideoSaved] = useState(false)
  const [expandedSections, setExpandedSections] = useState({})

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
  
  const handleSaveVideo = () => {
    setVideoUrl(levelId, videoInput)
    setVideoSaved(true)
    setTimeout(() => setVideoSaved(false), 2000)
  }

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const CollapsibleSection = ({ id, title, icon: Icon, children, defaultOpen = false }) => {
    const isExpanded = expandedSections[id] ?? defaultOpen
    
    return (
      <div className="border rounded-lg">
        <button
          onClick={() => toggleSection(id)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Icon size={20} className="text-orange-600" />
            <h3 className="font-semibold text-left">{title}</h3>
          </div>
          {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </button>
        {isExpanded && (
          <div className="px-6 pb-6 border-t border-gray-100">
            {children}
          </div>
        )}
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Overzicht', icon: BookOpen },
    { id: 'methodology', label: 'Methodiek', icon: Lightbulb },
    { id: 'exercises', label: 'Oefeningen', icon: Dumbbell },
    { id: 'video', label: "Video", icon: Play },
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
            <div>
              <h1 className="text-2xl font-bold">{level.name}</h1>
              <p className="text-gray-600">{level.ageGroup} • {level.mainGoal}</p>
            </div>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
            <p className="text-gray-800">{level.fieldDepth} × {level.fieldWidth}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <CheckCircle size={16} />
              <span className="font-semibold">Bal</span>
            </div>
            <p className="text-gray-800">{level.ballWeight}</p>
          </div>
        </div>
        
        {level.entryRequirement && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <HelpCircle size={16} />
              Entreevoorwaarde
            </h3>
            <p className="text-blue-700 text-sm">{level.entryRequirement}</p>
          </div>
        )}

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
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  <Zap size={16} />
                  Kerntechniek
                </h3>
                <p className="text-orange-700">{level.keyTechnique}</p>
              </div>
              
              <CollapsibleSection
                id="rules"
                title="Spelregels & Hoofddoel"
                icon={BookOpen}
                defaultOpen={true}
              >
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">Hoofddoel</h4>
                    <p className="text-gray-700 bg-green-50 p-3 rounded-lg">{level.mainGoal}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Spelregels</h4>
                    <ul className="space-y-2">
                      {level.rules.map((rule, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {level.scoring && (
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-700">Een punt wordt gescoord als:</h4>
                      <ul className="space-y-2">
                        {level.scoring.map((score, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Target size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{score}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {level.bonusScoring && (
                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800">🌟 Bonuspunt</h4>
                      <p className="text-yellow-700 text-sm">{level.bonusScoring}</p>
                    </div>
                  )}
                </div>
              </CollapsibleSection>

              <CollapsibleSection
                id="didactic"
                title="Didactische Tips"
                icon={Lightbulb}
              >
                <div className="mt-4">
                  <ul className="space-y-3">
                    {level.didacticTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Lightbulb size={20} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CollapsibleSection>
            </div>
          )}

          {activeTab === 'methodology' && (
            <div className="space-y-6">
              <CollapsibleSection
                id="methodical-build"
                title="Methodische Opbouw"
                icon={Zap}
                defaultOpen={true}
              >
                <div className="space-y-4 mt-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800">Uitgangspunt</h4>
                    <p className="text-blue-700">{level.methodicalBuild.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Stappenplan</h4>
                    <ol className="space-y-3">
                      {level.methodicalBuild.steps.map((step, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-800">Focus van dit niveau</h4>
                    <p className="text-orange-700">{level.methodicalBuild.focus}</p>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection
                id="common-mistakes"
                title="Veel Voorkomende Fouten & Tips"
                icon={AlertCircle}
              >
                <div className="space-y-6 mt-4">
                  {level.commonMistakes.map((mistake, index) => (
                    <div key={index} className="border-l-4 border-red-400 pl-4">
                      <h4 className="font-semibold text-red-700 mb-1">❌ {mistake.mistake}</h4>
                      <p className="text-gray-600 mb-3 text-sm italic">{mistake.description}</p>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">💡 Oplossingen:</h5>
                        <ul className="space-y-1">
                          {mistake.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleSection>
            </div>
          )}

          {activeTab === 'exercises' && (
            <div className="space-y-4">
              {level.exercises.map((exercise, index) => (
                <CollapsibleSection
                  key={index}
                  id={`exercise-${index}`}
                  title={exercise.name}
                  icon={Dumbbell}
                >
                  <div className="space-y-4 mt-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <Target size={16} className="text-blue-600" />
                          Doel
                        </h5>
                        <p className="text-gray-700 bg-blue-50 p-3 rounded-lg text-sm">{exercise.goal}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <MapPin size={16} className="text-green-600" />
                          Opstelling
                        </h5>
                        <p className="text-gray-700 bg-green-50 p-3 rounded-lg text-sm">{exercise.setup}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold mb-2">Uitvoering</h5>
                      <p className="text-gray-700">{exercise.description}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 flex items-center gap-2">
                        <List size={16} />
                        Materiaal
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exercise.material.map((item, itemIndex) => (
                          <span key={itemIndex} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">Variaties</h5>
                      <ul className="space-y-1">
                        {exercise.variations.map((variation, varIndex) => (
                          <li key={varIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-orange-600 mt-1">•</span>
                            <span className="text-gray-700">{variation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>
              ))}
            </div>
          )}

          {activeTab === 'video' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  YouTube Video URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={videoInput}
                    onChange={(e) => setVideoInput(e.target.value)}
                    className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Plak hier een YouTube URL (bijv. https://www.youtube.com/watch?v=...)"
                  />
                  <button
                    onClick={handleSaveVideo}
                    className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2"
                  >
                    <Save size={18} />
                    Opslaan
                  </button>
                </div>
                {videoSaved && (
                  <p className="text-green-600 text-sm mt-2">✓ Video URL opgeslagen</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Ondersteunt YouTube URLs in verschillende formaten (youtube.com/watch, youtu.be, youtube.com/embed)
                </p>
              </div>
              
              {getVideoUrl(levelId) && (
                <div className="mt-6">
                  <h4 className="font-semibold mb-3 text-gray-700">Video voor {level.name}</h4>
                  <YouTubeEmbed url={getVideoUrl(levelId)} title={`Video voor ${level.name}`} />
                  <div className="mt-2">
                    <a
                      href={getVideoUrl(levelId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      Video openen in YouTube
                    </a>
                  </div>
                </div>
              )}
              
              {!getVideoUrl(levelId) && (
                <div className="bg-gray-50 rounded-lg p-8 text-center mt-6">
                  <Play size={48} className="text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Nog geen video toegevoegd voor dit level</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Voeg een YouTube URL toe om een video te bekijken
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Persoonlijke notities voor {level.name}
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
    </div>
  )
}

export default LevelDetail