import EnrollForm from '../components/EnrollForm'
import StudentList from '../components/StudentList'

const HomePage = ({ students, tracks, onEnroll, loading, error, refreshRoster }) => {
  return (
    <div className="app-shell">
      <EnrollForm tracks={tracks} onEnroll={onEnroll} />
      {loading && <div className="status loading">Loading roster…</div>}
      {error && <div className="status error">{error}</div>}
      {!loading && !error && (
        <div style={{ marginTop: '1.5rem' }}>
          <StudentList students={students} title="Student Roster">
            <div className="list-footer">End of roster — {students.length} total students</div>
          </StudentList>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <button onClick={refreshRoster} className="btn btn-secondary">↻ Refresh Roster</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
