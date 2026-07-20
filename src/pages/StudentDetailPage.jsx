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
    <div className="detail-card">
      <div style={{ textAlign: 'center' }}>
        <img src={student.avatar} alt={`${student.firstName} ${student.lastName}`} style={{ width: '140px', height: '140px', borderRadius: '50%', marginBottom: '1.2rem' }} />
        <h2 style={{ marginBottom: '0.8rem', fontSize: '1.6rem' }}>{student.firstName} {student.lastName}</h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '1.05rem' }}>{student.track} Track</p>
      </div>
      <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '14px', marginBottom: '1.5rem' }}>
        <p style={{ marginBottom: '0.8rem' }}><strong>📧 Email:</strong> {student.email}</p>
        <p style={{ marginBottom: '0.8rem' }}><strong>📊 Score:</strong> {student.score}/100</p>
        <p style={{ marginBottom: '0.8rem' }}><strong>🎯 Status:</strong> <span style={{ display: 'inline-block', background: student.isActive ? '#dcfce7' : '#e2e8f0', color: student.isActive ? '#166534' : '#475569', padding: '0.3rem 0.8rem', borderRadius: '999px', fontSize: '0.9rem', fontWeight: '700' }}>{student.isActive ? 'Active' : 'Inactive'}</span></p>
      </div>
      <Link to="/" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>← Back to Roster</Link>
    </div>
  )
}

export default StudentDetailPage
