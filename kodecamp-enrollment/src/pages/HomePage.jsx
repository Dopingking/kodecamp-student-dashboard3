import EnrollForm from '../components/EnrollForm'
import StudentList from '../components/StudentList'

const HomePage = ({ students, tracks, onEnroll, loading, error, refreshRoster }) => {
  return (
    <div>
      <EnrollForm tracks={tracks} onEnroll={onEnroll} />
      {loading && <p>Loading roster...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <StudentList students={students} title="Student Roster">
          <div className="list-footer">End of roster — {students.length} total students</div>
        </StudentList>
      )}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button onClick={refreshRoster} className="btn btn-secondary">Refresh Roster</button>
      </div>
    </div>
  )
}

export default HomePage
