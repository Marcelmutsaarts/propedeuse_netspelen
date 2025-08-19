import { useState } from 'react'
import { X, Plus, Link } from 'lucide-react'

function AddVideoModal({ isOpen, onClose, onAdd }) {
  const [videoData, setVideoData] = useState({
    title: '',
    url: '',
    duration: ''
  })
  const [error, setError] = useState('')

  const validateYouTubeUrl = (url) => {
    const patterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([^?]+)/
    ]
    
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) {
        return true
      }
    }
    
    if (url.length === 11 && !url.includes('/')) {
      return true
    }
    
    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!videoData.title.trim()) {
      setError('Voer een titel in')
      return
    }

    if (!videoData.url.trim()) {
      setError('Voer een YouTube URL in')
      return
    }

    if (!validateYouTubeUrl(videoData.url)) {
      setError('Ongeldige YouTube URL')
      return
    }

    onAdd(videoData)
    setVideoData({ title: '', url: '', duration: '' })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Video toevoegen</h2>
          <button
            onClick={onClose}
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
              value={videoData.title}
              onChange={(e) => setVideoData({ ...videoData, title: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Bijv. Onderhandse service techniek"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              YouTube URL *
            </label>
            <div className="relative">
              <input
                type="text"
                value={videoData.url}
                onChange={(e) => setVideoData({ ...videoData, url: e.target.value })}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="https://www.youtube.com/watch?v=..."
              />
              <Link size={18} className="absolute left-3 top-3 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Ondersteunt YouTube links, youtu.be links en video ID's
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duur (optioneel)
            </label>
            <input
              type="text"
              value={videoData.duration}
              onChange={(e) => setVideoData({ ...videoData, duration: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Bijv. 5:30"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={18} />
              Toevoegen
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Annuleren
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddVideoModal