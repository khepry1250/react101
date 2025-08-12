import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Personal Website',
      description: 'A React-based personal website with theme switching and responsive design.',
      link: 'https://github.com/yourusername/personal-website'
    },
    {
      title: 'Weather App',
      description: 'A weather application built with React that shows current weather and forecasts.',
      link: 'https://github.com/yourusername/weather-app'
    },
    {
      title: 'Task Manager',
      description: 'A full-stack task management application with React frontend and Node.js backend.',
      link: 'https://github.com/yourusername/task-manager'
    }
  ];

  return (
    <div className="flex-container">
      <h2>My Projects</h2>
        <div>
            <ProjectCard {...projects[0]} />
        </div>
        
        <div>
            <ProjectCard {...projects[1]} />
        </div>

        <div>
            <ProjectCard {...projects[2]} />
        </div>
    </div>
  );
}
