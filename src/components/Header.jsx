import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <header style={{
      color: 'white',
      padding: '1rem 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img
            src="../../../public/Media.jpg"
            alt="Profile"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid white'
            }}
          />
          <div>
            <h1 style={{ margin: 0 }}>Curuti Claudiu-Alexandru</h1>
            <p style={{ 
              margin: '0.2rem 0 0 0',
              fontSize: '0.9rem',
              opacity: '0.9'
            }}>
              Software Engineer Intern
            </p>
          </div>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
