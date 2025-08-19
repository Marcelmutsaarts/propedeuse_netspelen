import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import VolleyStars from './pages/VolleyStars'
import LevelDetail from './pages/LevelDetail'
import Smashball from './pages/Smashball'
import Quiz from './pages/Quiz'
import Assignments from './pages/Assignments'
import Favorites from './pages/Favorites'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="volley-stars" element={<VolleyStars />} />
        <Route path="volley-stars/:levelId" element={<LevelDetail />} />
        <Route path="smashball" element={<Smashball />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="opdrachten" element={<Assignments />} />
        <Route path="favorieten" element={<Favorites />} />
        <Route path="instellingen" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App