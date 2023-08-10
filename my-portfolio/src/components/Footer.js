import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#463730ff',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontFamily: 'Helvetica, Arial, sans-serif',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#90c3c8ff',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  };

  const hoverStyle = {
    color: '#b9b8d3ff',
  };

  return (
    <footer style={footerStyle}>
      <a
        href="https://github.com/3rikMtz"
        style={linkStyle}
        onMouseOver={e => (e.currentTarget.style.color = hoverStyle.color)}
        onMouseOut={e => (e.currentTarget.style.color = linkStyle.color)}
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/3rik/"
        style={linkStyle}
        onMouseOver={e => (e.currentTarget.style.color = hoverStyle.color)}
        onMouseOut={e => (e.currentTarget.style.color = linkStyle.color)}
      >
        LinkedIn
      </a>
      {/* Add another platform link here */}
    </footer>
  );
};

export default Footer;
