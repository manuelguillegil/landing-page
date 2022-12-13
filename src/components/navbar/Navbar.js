import React, { useState } from "react"
import LinkItem from '../LinkItem'
import BurgerMenu  from './BurgerMenu'
import BurgerButton  from './BurgerButton'
import { routerLinks } from '../../commons/routerLinks'
import '../../styles/navbar.scss'

const Navbar = ({newPageSelected, currentPage}) => {
  const bluePointImage = 'https://static.wixstatic.com/media/c86aa8_b9d1a19b6fa148129b39180b7518a3ef~mv2.png/v1/fill/w_210,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bluepoint2-Logo-Solid-DrkBlue.png';
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
  <nav className="navbar">
    <div className="burger-section">
      <BurgerButton navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <BurgerMenu 
        navigation={routerLinks} 
        newPageSelected={newPageSelected} 
        currentPage={currentPage}
        navbarOpen={navbarOpen} 
        setNavbarOpen={setNavbarOpen} />
    </div>

    <div className="navbar-logo">
        <img src={bluePointImage} alt="bluepoint2-Logo-Solid-DrkBlue.png"/>
    </div>
    <div className="navbar-items">
      <LinkItem 
        newPageSelected={newPageSelected} 
        currentPage={currentPage} 
        navigation={routerLinks} />
    </div>
  </nav>
  );
}
export default Navbar;