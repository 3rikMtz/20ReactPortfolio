import React from 'react';
import resumeFile from '../resume.pdf'; // Update this path to your actual resume file

const Resume = () => {
  const proficiencies = [
    'JavaScript',
    'React.js',
    'HTML & CSS',
    'Node.js',
    // ... Add more proficiencies
  ];

  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href={resumeFile} download="Your-Name-Resume.pdf" className="resume-download-link">
        Download My Resume
      </a>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
