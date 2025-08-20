import { Link } from 'react-router-dom'
import useStore from '../store/useStore'
import { volleyStarsLevels } from '../data/volleyData'
import { Star, ArrowRight, Trash2, StickyNote } from 'lucide-react'

function Favorites() {
  const { favorites, removeFavorite, getNote } = useStore()

  const getFavoriteItem = (id) => {
    const level = volleyStarsLevels.find(l => l.id === id)
    if (level) {
      return {
        id: level.id,
        name: level.name,
        icon: level.icon,
        description: level.mainGoal,
        link: `/volley-stars/${level.id}`,
        type: 'level'
      }
    }
    
    return null
  }

  const favoriteItems = favorites.map(getFavoriteItem).filter(Boolean)

  if (favoriteItems.length === 0) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Favorieten</h1>
          <p className="text-gray-600">
            Hier verschijnen je favoriete levels en methodieken
          </p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-8 text-center">
          <Star size={48} className="text-yellow-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Nog geen favorieten</h2>
          <p className="text-gray-600 mb-4">
            Markeer levels of methodieken als favoriet met het ster-icoon om ze hier snel terug te vinden
          </p>
          <Link
            to="/volley-stars"
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Bekijk Volley Stars levels
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Favorieten</h1>
        <p className="text-gray-600">
          Je hebt {favoriteItems.length} {favoriteItems.length === 1 ? 'favoriet' : 'favorieten'} opgeslagen
        </p>
      </div>

      <div className="grid gap-4">
        {favoriteItems.map((item) => {
          const note = getNote(item.id)
          
          return (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <span className="text-sm text-gray-500 capitalize">{item.type}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => removeFavorite(item.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Verwijder uit favorieten"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              <p className="text-gray-600 mb-4">{item.description}</p>

              {note && (
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex items-start gap-2">
                    <StickyNote size={16} className="text-gray-500 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-700 mb-1">Notitie:</p>
                      <p className="text-sm text-gray-600">{note}</p>
                    </div>
                  </div>
                </div>
              )}

              <Link
                to={item.link}
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
              >
                Bekijk details
                <ArrowRight size={18} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Favorites