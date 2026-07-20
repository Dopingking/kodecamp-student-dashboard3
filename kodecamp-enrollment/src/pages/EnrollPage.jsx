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
      <h2>Enroll Student</h2>
      <EnrollForm tracks={tracks} onEnroll={handleEnrollAndRedirect} />
    </div>
  )
}

export default EnrollPage
