import React from 'react';
import profileImage from '../profile.jpg'; // Adjust the path according to your folder structure

const AboutMe = () => {
  return (
    <section id="about-me">
      <img src={profileImage} alt="Your Name" className="profile-image" />
      <div className="bio">
        <h2>About Me</h2>
        <p>
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
