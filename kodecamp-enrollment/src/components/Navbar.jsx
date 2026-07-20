import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const linkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className={linkClass} end>Home</NavLink>
        <NavLink to="/enroll" className={linkClass}>Enroll</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
