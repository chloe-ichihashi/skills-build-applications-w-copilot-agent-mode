import './App.css'

function App() {
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
            <a className="btn btn-primary btn-lg" href="#features">
              Explore features
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="http://localhost:8000/api/health" target="_blank" rel="noreferrer">
              Check API health
            </a>
          </div>
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
  )
}

export default App
