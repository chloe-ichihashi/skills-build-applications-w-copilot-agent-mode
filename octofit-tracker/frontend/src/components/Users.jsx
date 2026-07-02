import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const apiUrl = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
    : 'http://localhost:8000/api/users/';

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Unable to load users');
        }
        const payload = await response.json();
        const records = Array.isArray(payload) ? payload : payload.results || [];
        setUsers(records);
      } catch (err) {
        setError(err.message);
      }
    };

    loadUsers();
  }, [apiUrl]);

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Users</h2>
        {error ? <p className="text-danger">{error}</p> : null}
        <ul className="list-group">
          {users.map((user) => (
            <li key={user._id || user.id} className="list-group-item">
              <strong>{user.username}</strong> — {user.profile?.fullName || 'No name provided'}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Users;
