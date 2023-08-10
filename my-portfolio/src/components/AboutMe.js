import React from 'react';
import profileImage from '../profile.jpg'; // Adjust the path according to your folder structure

const AboutMe = () => {
  const styles = {
    section: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      backgroundColor: '#759fbcff',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      color: '#463730ff',
    },
    profileImage: {
      width: '150px',
      height: '150px',
      borderRadius: '75px',
      marginRight: '20px',
      border: `3px solid #1f5673ff`,
    },
    bio: {
      flex: 1,
    },
    h2: {
      color: '#1f5673ff',
      borderBottom: `2px solid #463730ff`,
      paddingBottom: '10px',
      marginBottom: '10px',
    },
    p: {
      fontSize: '16px',
      lineHeight: '1.5',
      color: '#b9b8d3ff',
    },
  };

  return (
    <section id="about-me" style={styles.section}>
      <img src={profileImage} alt="Your Name" className="profile-image" style={styles.profileImage} />
      <div className="bio" style={styles.bio}>
        <h2 style={styles.h2}>About Me</h2>
        <p style={styles.p}>
          I'm a passionate web developer with experience in creating modern,
          responsive web applications. I specialize in React, JavaScript, and
          other cutting-edge technologies. In my free time, I enjoy contributing
          to open-source projects and exploring new programming paradigms.
        </p>
        {/* You can continue adding more details about yourself here */}
      </div>
    </section>
  );
};

export default AboutMe;
