import React, { useState } from 'react';

const SettingsScreen = () => {
  const [language, setLanguage] = useState('English');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const containerStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    padding: '16px',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 20px',
    borderBottom: '1px solid #ddd',
  };

  const labelStyle = {
    fontSize: '16px',
    color: '#333',
  };

  const toggleStyle = {
    fontSize: '14px',
    color: '#777',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>Settings</div>

      <div style={itemStyle}>
        <span style={labelStyle}>Language</span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={toggleStyle}
        >
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>

      <div style={itemStyle}>
        <span style={labelStyle}>Dark Mode</span>
        <span
          style={toggleStyle}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'On' : 'Off'}
        </span>
      </div>

      <div style={itemStyle}>
        <span style={labelStyle}>Notifications</span>
        <span
          style={toggleStyle}
          onClick={() => setNotifications(!notifications)}
        >
          {notifications ? 'On' : 'Off'}
        </span>
      </div>

      <div style={itemStyle}>
        <span style={labelStyle}>Account</span>
        <span style={toggleStyle}>Edit</span>
      </div>

      <div style={itemStyle}>
        <span style={labelStyle}>Log Out</span>
        <span style={toggleStyle}>→</span>
      </div>
    </div>
  );
};

export default SettingsScreen;
