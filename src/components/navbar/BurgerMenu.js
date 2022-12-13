import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import '../../styles/burger-menu.scss'
  
export const BurgerMenu = ({navigation, currentPage, newPageSelected, navbarOpen, setNavbarOpen }) => {
  useEffect(() => {
    const root = document.documentElement;
      root?.style.setProperty(
        '--burger-menu-transform',
        navbarOpen ? 'translateX(0)' : 'translateX(-100%)'
      );
  }, [navbarOpen]);

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
export default BurgerMenu;
