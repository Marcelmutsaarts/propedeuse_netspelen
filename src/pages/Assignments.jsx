import { useState } from 'react'
import useStore from '../store/useStore'
import { 
  Plus, Calendar, Link, FileText, User, 
  CheckCircle, Clock, Trash2, Edit2, Save, X
} from 'lucide-react'

function Assignments() {
  const { 
    assignments, 
    addAssignment, 
    getActiveAssignments, 
    userRole, 
    setUserRole 
  } = useStore()
  
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    level: '',
    deadline: '',
    link: '',
    teacher: ''
  })

  const activeAssignments = getActiveAssignments()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title && formData.description) {
      addAssignment(formData)
      setFormData({
        title: '',
        description: '',
        level: '',
        deadline: '',
        link: '',
        teacher: ''
      })
      setShowAddForm(false)
    }
  }

  const toggleRole = () => {
    setUserRole(userRole === 'student' ? 'teacher' : 'student')
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Opdrachten</h1>
            <p className="text-gray-600">
              {userRole === 'teacher' 
                ? 'Beheer en plaats lesopdrachten voor studenten' 
                : 'Bekijk actieve lesopdrachten van je docenten'}
            </p>
          </div>
          
          <button
            onClick={toggleRole}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
          >
            <User size={16} className="inline mr-1" />
            {userRole === 'student' ? 'Student modus' : 'Docent modus'}
          </button>
        </div>

        {userRole === 'teacher' && (
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2"
          >
            <Plus size={18} />
            Nieuwe opdracht
          </button>
        )}
      </div>

      {showAddForm && userRole === 'teacher' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Nieuwe opdracht toevoegen</h2>
            <button
              onClick={() => setShowAddForm(false)}
              className="p-1 hover:bg-gray-100 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Titel *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Bijv. Oefening Level 2 technieken"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Beschrijving *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent h-24 resize-none"
                placeholder="Beschrijf de opdracht..."
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Level/Methodiek
                </label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData({...formData, level: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Selecteer...</option>
                  <option value="level1">Level 1: Catch</option>
                  <option value="level2">Level 2: Bounce</option>
                  <option value="level3">Level 3: Pass</option>
                  <option value="level4">Level 4: Smash</option>
                  <option value="level5">Level 5: Ultimate</option>
                  <option value="smashball">Smashball</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deadline
                </label>
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link naar materiaal (optioneel)
              </label>
              <input
                type="url"
                value={formData.link}
                onChange={(e) => setFormData({...formData, link: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Docent naam
              </label>
              <input
                type="text"
                value={formData.teacher}
                onChange={(e) => setFormData({...formData, teacher: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Jouw naam"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2"
              >
                <Save size={18} />
                Opdracht toevoegen
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Annuleren
              </button>
            </div>
          </form>
        </div>
      )}

      {activeAssignments.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <FileText size={48} className="text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Geen actieve opdrachten</h2>
          <p className="text-gray-600">
            {userRole === 'teacher' 
              ? 'Voeg je eerste opdracht toe met de knop hierboven'
              : 'Er zijn momenteel geen opdrachten beschikbaar'}
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {activeAssignments.map((assignment) => (
            <div key={assignment.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{assignment.title}</h3>
                  {assignment.teacher && (
                    <p className="text-sm text-gray-600 mb-2">
                      Docent: {assignment.teacher}
                    </p>
                  )}
                </div>
                
                {assignment.level && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                    {assignment.level}
                  </span>
                )}
              </div>

              <p className="text-gray-700 mb-4">{assignment.description}</p>

              <div className="flex flex-wrap gap-3 text-sm">
                {assignment.deadline && (
                  <div className="flex items-center gap-1 text-gray-600">
                    <Calendar size={16} />
                    <span>Deadline: {new Date(assignment.deadline).toLocaleDateString('nl-NL')}</span>
                  </div>
                )}
                
                {assignment.link && (
                  <a
                    href={assignment.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <Link size={16} />
                    <span>Bekijk materiaal</span>
                  </a>
                )}

                <div className="flex items-center gap-1 text-gray-500">
                  <Clock size={16} />
                  <span>
                    Toegevoegd: {new Date(assignment.createdAt).toLocaleDateString('nl-NL')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {userRole === 'teacher' && activeAssignments.length > 0 && (
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> In toekomstige versies kunnen studenten hun voortgang 
            markeren en feedback ontvangen op ingeleverde opdrachten.
          </p>
        </div>
      )}
    </div>
  )
}

export default Assignments