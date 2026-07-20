const Header = ({ title, studentCount, averageScore }) => {
  const avgDisplay = averageScore.toFixed(1)
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <span className="stats">{`${studentCount} Students Enrolled | Class Average: ${avgDisplay}%`}</span>
    </header>
  )
}
export default Header
