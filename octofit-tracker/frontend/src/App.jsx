import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
];

function Home() {
  return (
    <main className="app-shell">
      <section className="hero-card card shadow-sm">
        <div className="card-body p-4 p-md-5">
          <p className="text-uppercase fw-semibold text-primary mb-3">OctoFit Tracker</p>
          <h1 className="display-5 fw-bold mb-3">Train smarter, lead stronger.</h1>
          <p className="lead text-muted mb-4">
            A modern multi-tier app for logging workouts, building teams, and tracking progress.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <a className="btn btn-primary btn-lg" href="http://localhost:8000/api/health" target="_blank" rel="noreferrer">
              Check API health
            </a>
          </div>
          <p className="text-muted small mt-3">
            Define VITE_CODESPACE_NAME in .env.local to use a Codespaces API URL such as https://{name}-8000.app.github.dev/api/.
          </p>
        </div>
      </section>

      <section id="features" className="row g-4 mt-2">
        <article className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h2 className="h5">Activity tracking</h2>
              <p className="text-muted mb-0">Capture workouts and monitor performance over time.</p>
            </div>
          </div>
        </article>
        <article className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h2 className="h5">Team management</h2>
              <p className="text-muted mb-0">Create squads, assign goals, and keep everyone aligned.</p>
            </div>
          </div>
        </article>
        <article className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h2 className="h5">Leaderboards</h2>
              <p className="text-muted mb-0">Bring friendly competition into every training cycle.</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="container py-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-white rounded shadow-sm mb-4">
        <div className="container-fluid">
          <span className="navbar-brand fw-semibold">OctoFit Tracker</span>
          <div className="navbar-nav flex-row flex-wrap gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App
