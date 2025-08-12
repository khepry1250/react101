export default function Home() {
  return (
    <div className="container">
      <div className="about-section">
        <img 
          src="../src/images/Media.jpg"
          alt="Your Name" 
          className="profile-image"
        />
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate developer who loves creating web applications.
            I specialize in React and modern web technologies. When I'm not coding,
            you can find me exploring new technologies or contributing to open-source projects.
          </p>
          <div>
            <h3>Skills</h3>
            <ul className="skills-list">
              <li>React</li>
              <li>JavaScript/TypeScript</li>
              <li>HTML/CSS</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
