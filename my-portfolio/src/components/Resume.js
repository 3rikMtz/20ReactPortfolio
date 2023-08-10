import React from 'react';
import resumeFile from '../resume.pdf'; // Update this path to your actual resume file

const Resume = () => {
  const proficiencies = [
    'JavaScript',
    'React.js',
    'HTML & CSS',
    'SQL',
    'NoSQL',
    'Webpack',
    'Express',
    'MERN',
    'PWA',
    // ... Add more proficiencies
  ];

  const styles = {
    section: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      backgroundColor: '#759fbcff',
      padding: '20px',
      color: '#463730ff',
    },
    h2: {
      textAlign: 'center',
      borderBottom: `2px solid #463730ff`,
      paddingBottom: '10px',
      marginBottom: '20px',
    },
    resumeDownloadLink: {
      display: 'block',
      textAlign: 'center',
      textDecoration: 'none',
      color: '#90c3c8ff',
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '20px',
      transition: 'color 0.3s',
    },
    h3: {
      color: '#1f5673ff',
    },
    ul: {
      listStyleType: 'none',
      paddingLeft: '0',
    },
    li: {
      marginBottom: '10px',
      color: '#b9b8d3ff',
      fontWeight: 'bold',
    },
  };

  return (
    <section id="resume" style={styles.section}>
      <h2 style={styles.h2}>Resume</h2>
      <a
        href={resumeFile}
        download="Your-Name-Resume.pdf"
        className="resume-download-link"
        style={styles.resumeDownloadLink}
        onMouseOver={e => (e.currentTarget.style.color = '#463730ff')}
        onMouseOut={e => (e.currentTarget.style.color = '#90c3c8ff')}
      >
        Download My Resume
      </a>
      <div className="proficiencies">
        <h3 style={styles.h3}>Proficiencies</h3>
        <ul style={styles.ul}>
          {proficiencies.map((proficiency, index) => (
            <li key={index} style={styles.li}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
