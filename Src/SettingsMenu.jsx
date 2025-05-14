import React from 'react';

const SettingsMenu = () => {
  return (
    <div style={styles.menuContainer}>
      <h2 style={styles.menuTitle}>Settings Menu</h2>
      <ul style={styles.menuList}>
        <li style={styles.menuItem}>Profile</li>
        <li style={styles.menuItem}>Notifications</li>
        <li style={styles.menuItem}>Privacy</li>
        <li style={styles.menuItem}>Language</li>
        <li style={styles.menuItem}>Dark Mode</li>
        <li style={styles.menuItem}>Log Out</li>
      </ul>
    </div>
  );
};

const styles = {
  menuContainer: {
    maxWidth: '300px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f0f4f8',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  menuTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  menuList: {
    listStyle: 'none',
    padding: 0,
  },
  menuItem: {
    padding: '12px 10px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    textAlign: 'center',
    color: '#444',
  },
};

export default SettingsMenu;
