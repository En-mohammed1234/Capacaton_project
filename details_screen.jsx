// DetailScreen.jsx
import React from 'react';

const DetailScreen = () => {
  const item = {
    title: "Sample Item",
    description: "This is a detailed description of the selected item. It includes all necessary information.",
    image: "https://via.placeholder.com/400x250"
  };

  return (
    <div style={styles.container}>
      <img src={item.image} alt="Item" style={styles.image} />
      <h1 style={styles.title}>{item.title}</h1>
      <p style={styles.description}>{item.description}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    fontFamily: 'Arial, sans-serif',
    maxWidth: 500,
    margin: '0 auto',
    backgroundColor: '#f9f9f9'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    color: '#333'
  },
  description: {
    fontSize: 16,
    color: '#555'
  }
};

export default DetailScreen;
