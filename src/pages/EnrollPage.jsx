import { useNavigate } from 'react-router-dom'
import EnrollForm from '../components/EnrollForm'

const EnrollPage = ({ tracks, onEnroll }) => {
  const navigate = useNavigate()

  function handleEnrollAndRedirect(student) {
    onEnroll(student)
    navigate('/')
  }

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0f172a' }}>➕ Enroll New Student</h2>
      <div className="enroll-form">
        <EnrollForm tracks={tracks} onEnroll={handleEnrollAndRedirect} />
      </div>
    </div>
  )
}

export default EnrollPage
