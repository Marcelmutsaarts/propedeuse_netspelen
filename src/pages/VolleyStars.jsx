import { Link } from 'react-router-dom'
import { volleyStarsLevels } from '../data/volleyData'
import { ArrowRight, Users, Ruler, Target, Clock, BookOpen, Dumbbell } from 'lucide-react'

function VolleyStars() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Volley Stars Methodiek</h1>
        <p className="text-gray-600 mb-4">
          De Volley Stars methodiek bestaat uit 5 progressieve levels die kinderen van 6-12 jaar 
          stap voor stap introduceren in volleybal. Elk level heeft eigen spelregels, technieken en didactische aanpak.
        </p>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Progressie:</strong> Van vangen & gooien (Level 1) naar volledig volleybal (Level 5)
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {volleyStarsLevels.map((level) => (
          <Link
            key={level.id}
            to={`/volley-stars/${level.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{level.icon}</span>
                  <div>
                    <h2 className="text-xl font-semibold group-hover:text-orange-600 transition-colors">
                      {level.name}
                    </h2>
                    <p className="text-sm text-gray-500">{level.ageGroup}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={16} />
                    <span>{level.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Ruler size={16} />
                    <span>{level.netHeight}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Target size={16} />
                    <span>{level.courtSize}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-gray-700">
                    <strong>Hoofddoel:</strong> {level.mainGoal}
                  </p>
                  <p className="text-gray-600">
                    <strong>Kerntechniek:</strong> {level.keyTechnique}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <BookOpen size={12} />
                    <span>{level.commonMistakes.length} fouten & tips</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Dumbbell size={12} />
                    <span>{level.exercises.length} oefeningen</span>
                  </div>
                </div>
              </div>
              
              <ArrowRight className="text-gray-400 group-hover:text-orange-600 transition-colors mt-2" />
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">🎯 Didactische tip</h3>
        <p>
          Start altijd met een level dat net onder het huidige niveau van de groep ligt. 
          Dit zorgt voor succeservaringen en bouwt vertrouwen op voordat je naar een hoger level gaat.
        </p>
      </div>
    </div>
  )
}

export default VolleyStars