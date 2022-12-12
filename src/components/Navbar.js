import React from 'react';
import LinkItem from './LinkItem'
import '../styles/navbar.scss'

const Navbar = ({newPageSelected, currentPage}) => {
  const bluePointImage = 'https://static.wixstatic.com/media/c86aa8_b9d1a19b6fa148129b39180b7518a3ef~mv2.png/v1/fill/w_210,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bluepoint2-Logo-Solid-DrkBlue.png';

  return (
  <nav className="navbar">
    <div className="navbar-logo">
        <img src={bluePointImage} alt="bluepoint2-Logo-Solid-DrkBlue.png"/>
    </div>
    <LinkItem newPageSelected={newPageSelected} currentPage={currentPage}/>
  </nav>
  );
}
export default Navbar;