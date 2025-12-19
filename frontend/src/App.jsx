// src/App.jsx
import ProjectsSection from './ProjectsSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Kim A. Artista</h1>
        <p>IT Student</p>
      </header>

      <main>
        {/* Other sections: About, Skills, etc. */}
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;