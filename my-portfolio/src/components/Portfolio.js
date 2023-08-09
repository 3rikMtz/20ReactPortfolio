import React from 'react';
import Project from './Project';
import project1Image from '../images/project1.jpg'; // Import your project images
import project2Image from '../images/project2.jpg';
import project3Image from '../images/project3.jpg';
import project4Image from '../images/project4.jpg';
import projectsData from '../data/projects';

const Portfolio = () => {
  // Define your projects here
  const projects = [
    {
      title: 'BooBooBooks',
      image: project1Image,
      deployedLink: 'https://jonathanc0bosr.github.io/BooBooBooks/',
      githubLink: 'https://github.com/3rikMtz/BoobooBooks',
    },
    {
      title: 'Opticrew',
      image: project2Image,
      deployedLink: 'https://opticrew-fe0f9781ad3c.herokuapp.com/',
      githubLink: 'https://github.com/3rikMtz/OptiCrew',
    },
    {
      title: 'PWA Text Editor',
      image: project3Image,
      deployedLink: 'https://pwatexteditordiezynueve-8ff2a0397629.herokuapp.com/',
      githubLink: 'https://github.com/3rikMtz/19PWATextEditor',
    },
    {
      title: 'Note Tracker',
      image: project4Image,
      deployedLink: 'https://fathomless-oasis-98840-01301faee598.herokuapp.com/',
      githubLink: 'https://github.com/3rikMtz/11NoteTaker',
    },
    // ... Add more projects
  ];

  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
