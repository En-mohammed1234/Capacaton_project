import React, { useState } from 'react';

const SettingsMenu = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Settings Menu</h2>

      <div style={styles.setting}>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Enable Dark Mode
        </label>
      </div>

      <div style={styles.setting}>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          Receive Notifications
        </label>
      </div>

      <div style={styles.setting}>
        <label>Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={styles.select}
        >
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
          <option value="French">French</option>
        </select>
      </div>

      <div style={styles.summary}>
        <h4>Current Settings:</h4>
        <p>Dark Mode: {darkMode ? 'On' : 'Off'}</p>
        <p>Notifications: {notifications ? 'On' : 'Off'}</p>
        <p>Language: {language}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  setting: {
    marginBottom: '15px',
  },
  select: {
    marginLeft: '10px',
    padding: '5px',
  },
  summary: {
    marginTop: '30px',
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
  },
};

export default SettingsMenu;
