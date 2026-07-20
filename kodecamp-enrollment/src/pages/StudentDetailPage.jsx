import { Link, useParams } from 'react-router-dom'

const StudentDetailPage = ({ students }) => {
  const { id } = useParams()
  const student = students.find(s => s.id === id)

  if (!student) {
    return (
      <div>
        <h2>Student not found</h2>
        <p>The requested student does not exist.</p>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>{student.firstName} {student.lastName}</h2>
      <img src={student.avatar} alt={`${student.firstName} ${student.lastName}`} />
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Track:</strong> {student.track}</p>
      <p><strong>Score:</strong> {student.score}</p>
      <p><strong>Status:</strong> {student.isActive ? 'Active' : 'Inactive'}</p>
      <Link to="/">Back to Roster</Link>
    </div>
  )
}

export default StudentDetailPage
