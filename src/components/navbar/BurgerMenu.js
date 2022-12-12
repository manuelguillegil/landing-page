import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import '../../styles/burger-menu.scss'
import { burgerSettings } from './utils/burgerSettings'

export const BurgerButton = ({ navbarOpen, setNavbarOpen }) => {
  useEffect(() => {
    const root = document.documentElement;
    burgerSettings?.forEach(settingItem => {
      root?.style.setProperty(
        settingItem.variableName,
        navbarOpen ? settingItem.burgerOpen : settingItem.burgerClosed
      );
    })
  }, [navbarOpen]);

  return (
    <div className={navbarOpen ? "burger-btn" : "burger-btn burger-btn-active"} onClick={() => setNavbarOpen(!navbarOpen)}>
      <span className="burger-icon">&nbsp;</span>
    </div>
  )
}
  
export const BurgerMenu = ({navigation, currentPage, newPageSelected, navbarOpen, setNavbarOpen }) => {
  const handleSelectPage = (navItem) => {
    setNavbarOpen(!navbarOpen);
    newPageSelected(navItem.name);
  }

  return (
    <div className="burger-menu">
      {navigation.map((navItem) => (
        <li key={navItem.name} className="link-item">
          <Link 
            onClick={() => {handleSelectPage(navItem)}}
            to={navItem.href}
            className={
              navItem.name === currentPage ? "active" : ""
            }>
            {navItem.name}
          </Link>
        </li>
      ))}
    </div>
  )
}