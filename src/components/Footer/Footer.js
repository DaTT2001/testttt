import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Your Company</p>
    </footer>
  );
};

export default Footer;
