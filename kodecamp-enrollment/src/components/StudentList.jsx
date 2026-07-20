import StudentCard from './StudentCard'

const StudentList = ({ students, title = 'All Students', children }) => {
  if (!students || students.length === 0) {
    return (
      <div className="student-list">
        <h2>{title}</h2>
        <p>No students to display yet</p>
        {children}
      </div>
    )
  }
  return (
    <div className="student-list">
      <h2>{title}</h2>
      <div className="cards-grid">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
      {children}
    </div>
  )
}
export default StudentList
