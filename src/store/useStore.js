import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      notes: {},
      quizScores: {},
      assignments: [],
      userRole: 'student',
      customVideos: {},
      
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
      
      addAssignment: (assignment) => set((state) => ({
        assignments: [
          ...state.assignments,
          {
            ...assignment,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            status: 'active'
          }
        ]
      })),
      
      getActiveAssignments: () => 
        get().assignments.filter(a => a.status === 'active'),
      
      setUserRole: (role) => set({ userRole: role }),
      
      addCustomVideo: (levelId, video) => set((state) => ({
        customVideos: {
          ...state.customVideos,
          [levelId]: [...(state.customVideos[levelId] || []), { ...video, id: Date.now().toString() }]
        }
      })),
      
      removeCustomVideo: (levelId, videoId) => set((state) => ({
        customVideos: {
          ...state.customVideos,
          [levelId]: (state.customVideos[levelId] || []).filter(v => v.id !== videoId)
        }
      })),
      
      getCustomVideos: (levelId) => get().customVideos[levelId] || [],
      
      clearAllData: () => set({
        favorites: [],
        notes: {},
        quizScores: {},
        assignments: [],
        customVideos: {}
      })
    }),
    {
      name: 'volleybal-app-storage',
      partialize: (state) => ({
        favorites: state.favorites,
        notes: state.notes,
        quizScores: state.quizScores,
        assignments: state.assignments,
        userRole: state.userRole,
        customVideos: state.customVideos
      })
    }
  )
)

export default useStore