import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
};

export default Project;
