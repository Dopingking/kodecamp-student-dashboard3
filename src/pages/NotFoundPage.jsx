import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 2rem', background: 'white', borderRadius: '18px', boxShadow: '0 10px 28px rgba(15, 23, 42, 0.08)' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#dc2626' }}>404</h2>
      <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#0f172a' }}>Page Not Found</h3>
      <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '1.05rem' }}>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">← Go Home</Link>
    </div>
  )
}

export default NotFoundPage
