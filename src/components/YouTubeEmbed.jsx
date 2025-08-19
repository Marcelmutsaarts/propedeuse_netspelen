import { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'

function YouTubeEmbed({ url, title }) {
  const [showEmbed, setShowEmbed] = useState(false)
  
  // Extract video ID from various YouTube URL formats
  const getVideoId = (url) => {
    if (!url) return null
    
    // Handle different YouTube URL formats
    const patterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([^?]+)/
    ]
    
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) {
        return match[1]
      }
    }
    
    // If no pattern matches, assume it might be just the video ID
    if (url.length === 11 && !url.includes('/')) {
      return url
    }
    
    return null
  }
  
  const videoId = getVideoId(url)
  
  if (!videoId) {
    return (
      <div className="bg-gray-100 rounded-lg p-4 text-center">
        <p className="text-gray-600">Ongeldige YouTube URL</p>
      </div>
    )
  }
  
  const embedUrl = `https://www.youtube.com/embed/${videoId}`
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`
  
  if (!showEmbed) {
    return (
      <div className="relative group cursor-pointer" onClick={() => setShowEmbed(true)}>
        <div className="relative rounded-lg overflow-hidden bg-black">
          <img 
            src={thumbnailUrl} 
            alt={title}
            className="w-full aspect-video object-cover"
            onError={(e) => {
              e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
            <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
              <Play size={32} className="text-white ml-1" fill="white" />
            </div>
          </div>
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p className="text-white font-medium">{title}</p>
            </div>
          )}
        </div>
        <a 
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 bg-white rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          title="Open in YouTube"
        >
          <ExternalLink size={16} className="text-gray-700" />
        </a>
      </div>
    )
  }
  
  return (
    <div className="relative rounded-lg overflow-hidden bg-black">
      <div className="aspect-video">
        <iframe
          src={embedUrl}
          title={title || 'YouTube video'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default YouTubeEmbed