import { Link } from 'react-router-dom'
import { ArrowRight, Users, Target, BookOpen, Award } from 'lucide-react'

function Home() {
  const features = [
    {
      icon: Users,
      title: 'Volley Stars',
      description: '5 levels van Catch tot Ultimate voor 6-12 jaar',
      link: '/volley-stars',
      color: 'bg-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Quiz',
      description: 'Test je kennis over spelregels en technieken',
      link: '/quiz',
      color: 'bg-green-500'
    },
    {
      icon: Award,
      title: 'Opdrachten',
      description: 'Bekijk en maak lesopdrachten',
      link: '/opdrachten',
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welkom bij VolleyApp
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Jouw digitale assistent voor de Volley Stars methodiek
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <p className="text-sm">✓ Offline beschikbaar</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <p className="text-sm">✓ Video tutorials</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <p className="text-sm">✓ Interactieve quizzen</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Link
              key={feature.title}
              to={feature.link}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 flex items-start space-x-4 group"
            >
              <div className={`${feature.color} text-white p-3 rounded-lg`}>
                <Icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <ArrowRight className="text-gray-400 group-hover:text-orange-600 transition-colors" />
            </Link>
          )
        })}
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">💡 Tip van de dag</h2>
        <p className="text-gray-700">
          Begin met Level 1 (Catch) om de basisprincipes te leren. 
          Elke level bouwt voort op de vorige, dus zorg dat je de fundamenten goed beheerst!
        </p>
      </div>
    </div>
  )
}

export default Home