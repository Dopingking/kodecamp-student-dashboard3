import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import StatusMessage from './components/StatusMessage'
import ClassButton from './components/ClassButton'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import StudentDetailPage from './pages/StudentDetailPage'
import EnrollPage from './pages/EnrollPage'
import NotFoundPage from './pages/NotFoundPage'

const TRACKS = ['Frontend', 'Backend', 'Mobile', 'Data']
const SEED_STUDENTS = [
  {
    id: 'seed-1',
    firstName: 'Amara',
    lastName: 'Johnson',
    email: 'amara@kodecamp.dev',
    track: 'Frontend',
    score: 92,
    isActive: true,
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 'seed-2',
    firstName: 'Chidi',
    lastName: 'Okafor',
    email: 'chidi@kodecamp.dev',
    track: 'Backend',
    score: 67,
    isActive: false,
    avatar: 'https://i.pravatar.cc/150?img=3'
  }
]

function getAverage(students) {
  if (students.length === 0) return 0
  return students.reduce((sum, s) => sum + s.score, 0) / students.length
}

function App() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchRoster() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch('https://randomuser.me/api/?results=6&nat=us,gb')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        const fetched = data.results.map((user, i) => ({
          id: user.login.uuid,
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email,
          avatar: user.picture.thumbnail,
          track: TRACKS[i % TRACKS.length],
          score: Math.floor(Math.random() * 61) + 40,
          isActive: true
        }))
        setStudents([...SEED_STUDENTS, ...fetched])
      } catch (err) {
        setError(err.message)
        setStudents(SEED_STUDENTS)
      } finally {
        setLoading(false)
      }
    }
    fetchRoster()
  }, [])

  function handleEnroll(newStudent) {
    setStudents(prev => [newStudent, ...prev])
  }

  async function refreshRoster() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('https://randomuser.me/api/?results=6&nat=us,gb')
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      const fetched = data.results.map((user, i) => ({
        id: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        avatar: user.picture.thumbnail,
        track: TRACKS[i % TRACKS.length],
        score: Math.floor(Math.random() * 61) + 40,
        isActive: true
      }))
      setStudents([...SEED_STUDENTS, ...fetched])
    } catch (err) {
      setError(err.message)
      setStudents(SEED_STUDENTS)
    } finally {
      setLoading(false)
    }
  }

  const average = getAverage(students)
  const total = students.length

  return (
    <div>
      <Header title="KodeCamp 6.0 — Enrollment Portal" studentCount={total} averageScore={average} />
      <Navbar />
      <div className="container">
        {loading && <StatusMessage type="loading" />}
        {error && <StatusMessage type="error" message={error} />}
        <Routes>
          <Route path="/" element={<HomePage students={students} tracks={TRACKS} onEnroll={handleEnroll} loading={loading} error={error} refreshRoster={refreshRoster} />} />
          <Route path="/students/:id" element={<StudentDetailPage students={students} />} />
          <Route path="/enroll" element={<EnrollPage tracks={TRACKS} onEnroll={handleEnroll} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
