import React from 'react';
import '../styles/header.scss'
import '../styles/fonts.scss'

const Header = () => {
  return (
  <div className="header">
    <div className="header-copy">
    <h1 className="header-title">We're the company that's changing the way you navigate your healthcare.</h1>
    <p className="header-subtitle">Innovative solutions that create a comfortable, intuitive patient experience.</p>
    </div>
  </div>
  );
}
export default Header;