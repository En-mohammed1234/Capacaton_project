import React, { useState, useEffect } from 'react';

const LocalStorageForm = () => {
  const [username, setUsername] = useState('');
  const [savedName, setSavedName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      setSavedName(storedName);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('username', username);
    setSavedName(username);
    setUsername('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>التخزين المحلي - Local Storage</h2>
      <input
        type="text"
        placeholder="ادخل اسمك"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSave} style={styles.button}>
        حفظ الاسم
      </button>
      {savedName && (
        <p style={styles.result}>
          الاسم المحفوظ: <strong>{savedName}</strong>
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    padding: '10px',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    color: '#555',
  },
};

export default LocalStorageForm;
