import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      notes: {},
      quizScores: {},
      videoUrls: {},
      
      addFavorite: (itemId) => set((state) => ({
        favorites: [...new Set([...state.favorites, itemId])]
      })),
      
      removeFavorite: (itemId) => set((state) => ({
        favorites: state.favorites.filter(id => id !== itemId)
      })),
      
      isFavorite: (itemId) => get().favorites.includes(itemId),
      
      saveNote: (itemId, note) => set((state) => ({
        notes: { ...state.notes, [itemId]: note }
      })),
      
      getNote: (itemId) => get().notes[itemId] || '',
      
      saveQuizScore: (quizId, score) => set((state) => ({
        quizScores: {
          ...state.quizScores,
          [quizId]: {
            score,
            date: new Date().toISOString(),
            attempts: (state.quizScores[quizId]?.attempts || 0) + 1
          }
        }
      })),
      
      getQuizScore: (quizId) => get().quizScores[quizId],
      
      setVideoUrl: (levelId, url) => set((state) => ({
        videoUrls: {
          ...state.videoUrls,
          [levelId]: url
        }
      })),
      
      getVideoUrl: (levelId) => get().videoUrls[levelId] || '',
      
      clearAllData: () => set({
        favorites: [],
        notes: {},
        quizScores: {},
        videoUrls: {}
      })
    }),
    {
      name: 'volleybal-app-storage',
      partialize: (state) => ({
        favorites: state.favorites,
        notes: state.notes,
        quizScores: state.quizScores,
        videoUrls: state.videoUrls
      })
    }
  )
)

export default useStore