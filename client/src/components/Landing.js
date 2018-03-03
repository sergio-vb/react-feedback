import React from 'react';

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '37em',
    margin: '3em auto 0',
  },
  title: {
    color: 'rgb(0, 188, 212)'
  },
  text: {
    color: '#000',
    fontSize: '1.2em'
  }
}

const Landing = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Survey Analizer</h1>
      <p style={styles.text}>Collect feedback from your users by sending customized surveys, then collect the relevant statistics.</p>
    </div>
  );
};

export default Landing;
