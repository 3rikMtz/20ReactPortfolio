import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const navStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '400px', // Adjust as needed
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#90c3c8ff',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  };

  const activeStyle = {
    color: '#b9b8d3ff',
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/about" style={linkStyle} activeStyle={activeStyle}>About Me</NavLink>
      <NavLink to="/portfolio" style={linkStyle} activeStyle={activeStyle}>Portfolio</NavLink>
      <NavLink to="/contact" style={linkStyle} activeStyle={activeStyle}>Contact</NavLink>
      <NavLink to="/resume" style={linkStyle} activeStyle={activeStyle}>Resume</NavLink>
    </nav>
  );
};

export default Navigation;
