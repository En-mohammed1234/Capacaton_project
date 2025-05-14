import React, { useEffect, useState } from 'react';

const ApiIntegration = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User List from API</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={styles.list}>
          {users.map((user) => (
            <li key={user.id} style={styles.item}>
              <strong>{user.name}</strong><br />
              <span>{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    background: '#f2f2f2',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
  },
};

export default ApiIntegration;
