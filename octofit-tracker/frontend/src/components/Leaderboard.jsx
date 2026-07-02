import { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState('');
  const apiUrl = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
    : 'http://localhost:8000/api/leaderboard/';

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Unable to load leaderboard');
        }
        const payload = await response.json();
        const records = Array.isArray(payload) ? payload : payload.results || [];
        setLeaderboard(records);
      } catch (err) {
        setError(err.message);
      }
    };

    loadLeaderboard();
  }, [apiUrl]);

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Leaderboard</h2>
        {error ? <p className="text-danger">{error}</p> : null}
        <ul className="list-group">
          {leaderboard.map((entry) => (
            <li key={entry._id || entry.id} className="list-group-item">
              <strong>#{entry.rank}</strong> — Score {entry.score}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Leaderboard;
