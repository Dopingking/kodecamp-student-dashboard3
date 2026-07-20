import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>404 — Page Not Found</h2>
      <p>Sorry, we couldn't find that page.</p>
      <Link to="/">Return Home</Link>
    </div>
  )
}

export default NotFoundPage
