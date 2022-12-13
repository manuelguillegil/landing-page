import React, { useEffect } from "react"
import '../../styles/burger-button.scss'
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
export default BurgerButton;
