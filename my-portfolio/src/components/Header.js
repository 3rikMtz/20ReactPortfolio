import React from 'react';
import Navigation from './Navigation';
import logo from '../images/3rik-logo.png'; // Updated path to your actual logo file

const Header = () => {
  const headerStyle = {
    backgroundColor: '#1f5673ff',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Helvetica, Arial, sans-serif',
    color: '#b9b8d3ff',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center', // Aligns items vertically in the center
    justifyContent: 'center', // Aligns items horizontally in the center
  };

  const logoStyle = {
    width: '100px', // You can adjust the width to get the desired size, maintaining the original proportions
  };

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img src={logo} alt="3rik Logo" style={logoStyle} />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
