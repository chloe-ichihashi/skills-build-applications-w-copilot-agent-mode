import { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');
  const apiUrl = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
    : 'http://localhost:8000/api/activities/';

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Unable to load activities');
        }
        const payload = await response.json();
        const records = Array.isArray(payload) ? payload : payload.results || [];
        setActivities(records);
      } catch (err) {
        setError(err.message);
      }
    };

    loadActivities();
  }, [apiUrl]);

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Activities</h2>
        {error ? <p className="text-danger">{error}</p> : null}
        <ul className="list-group">
          {activities.map((activity) => (
            <li key={activity._id || activity.id} className="list-group-item">
              <strong>{activity.type}</strong> — {activity.durationMinutes} min · {activity.calories} cal
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Activities;
