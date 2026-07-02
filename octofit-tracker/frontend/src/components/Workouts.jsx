import { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');
  const apiUrl = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
    : 'http://localhost:8000/api/workouts/';

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Unable to load workouts');
        }
        const payload = await response.json();
        const records = Array.isArray(payload) ? payload : payload.results || [];
        setWorkouts(records);
      } catch (err) {
        setError(err.message);
      }
    };

    loadWorkouts();
  }, [apiUrl]);

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Workouts</h2>
        {error ? <p className="text-danger">{error}</p> : null}
        <ul className="list-group">
          {workouts.map((workout) => (
            <li key={workout._id || workout.id} className="list-group-item">
              <strong>{workout.name}</strong> — {workout.type} · {workout.durationMinutes} min
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Workouts;
