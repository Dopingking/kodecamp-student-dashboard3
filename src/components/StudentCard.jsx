import { Link } from 'react-router-dom'

function getGrade(score) {
  if (score >= 90) return 'A'
  if (score >= 80) return 'B'
  if (score >= 70) return 'C'
  if (score >= 60) return 'D'
  return 'F'
}

const StudentCard = ({ student }) => {
  const { firstName, lastName, email, track, score, isActive, avatar } = student
  const grade = getGrade(score)
  const cardClass = isActive ? 'student-card' : 'student-card inactive'
  const badgeClass = isActive ? 'badge active-badge' : 'badge inactive-badge'

  return (
    <div className={cardClass}>
      <img src={avatar} alt={`${firstName} ${lastName}`} />
      <h3 className="card-name">
        <Link to={`/students/${student.id}`}>{`${firstName} ${lastName}`}</Link>
      </h3>
      <div className="detail">{`${track} · ${email}`}</div>
      <div className="detail">{`Score: ${score} (Grade: ${grade})`}</div>
      <span className={badgeClass}>{isActive ? 'Active' : 'Inactive'}</span>
      <Link to={`/students/${student.id}`} className="card-view-link">View Details →</Link>
    </div>
  )
}
export default StudentCard
