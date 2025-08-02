import { Link } from 'react-router-dom'; // ✅ this line is essential
import '@/components/layout/Header/Navbar.scss';

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        <nav className="nav-links" aria-label="Main Navigation">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume-memories">Resume</Link>
        </nav>
      </div>
    </header>
  );
}
