import './Footer.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <p className="footer-text">
          Made with <span className="heart">💖</span> by Katarina Bajnokova
        </p>
        <div className="footer-socials">
          <a
            href="https://github.com/KatarinaBajnokova"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/katarina-bajnokova/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
