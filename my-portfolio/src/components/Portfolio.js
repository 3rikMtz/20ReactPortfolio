import React from 'react';
import Project from './Project';
import project1Image from '../images/project1.jpg';
import project2Image from '../images/project2.jpg';
import project3Image from '../images/project3.jpg';
import project4Image from '../images/project4.jpg';
import projectsData from '../data/projects';

const Portfolio = () => {
  const portfolioStyle = {
    backgroundColor: '#759fbcff',
    fontFamily: 'Helvetica, Arial, sans-serif',
    padding: '20px',
  };

  const headingStyle = {
    color: '#463730ff',
    textAlign: 'center',
  };

  const projectsStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };

  const buttonStyle = {
    textDecoration: 'none',
    padding: '10px 15px',
    backgroundColor: '#90c3c8ff',
    color: '#1f5673ff',
    borderRadius: '5px',
    margin: '5px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    display: 'inline-block',
  };

  const projects = [
    {
      title: 'BooBooBooks',
      image: project1Image,
      deployedLink: 'https://jonathanc0bosr.github.io/BooBooBooks/',
      githubLink: 'https://github.com/3rikMtz/BoobooBooks',
      deployedLinkStyle: buttonStyle,
      githubLinkStyle: { ...buttonStyle, backgroundColor: '#b9b8d3ff' }, // Different color for Github link
    },
    {
      title: 'Opticrew',
      image: project2Image,
      deployedLink: 'https://opticrew-fe0f9781ad3c.herokuapp.com/',
      githubLink: 'https://github.com/3rikMtz/OptiCrew',
      deployedLinkStyle: buttonStyle,
      githubLinkStyle: { ...buttonStyle, backgroundColor: '#b9b8d3ff' },
    },
    {
      title: 'PWA Text Editor',
      image: project3Image,
      deployedLink: 'https://pwatexteditordiezynueve-8ff2a0397629.herokuapp.com/',
      githubLink: 'https://github.com/3rikMtz/19PWATextEditor',
      deployedLinkStyle: buttonStyle,
      githubLinkStyle: { ...buttonStyle, backgroundColor: '#b9b8d3ff' },
    },
    {
      title: 'Note Tracker',
      image: project4Image,
      deployedLink: 'https://fathomless-oasis-98840-01301faee598.herokuapp.com/',
      githubLink: 'https://github.com/3rikMtz/11NoteTaker',
      deployedLinkStyle: buttonStyle,
      githubLinkStyle: { ...buttonStyle, backgroundColor: '#b9b8d3ff' },
    },
  ];

  return (
    <section id="portfolio" style={portfolioStyle}>
      <h2 style={headingStyle}>My Portfolio</h2>
      <div className="projects" style={projectsStyle}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
