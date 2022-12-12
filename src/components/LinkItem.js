import React from 'react';
import { Link } from "react-router-dom";
import { routerLinks } from '../commons/routerLinks'
import '../styles/link-item.scss'

const LinkItem = ({newPageSelected, currentPage, type = 'navbar', navigation = routerLinks}) => {
  navigation.map(navItem => {
    if(navItem.href === window.location.pathname) {
      navItem.current = true;
      newPageSelected(navItem.name)
    }
    return navItem;
  })

  return (
    <div className="link-items top-fade-in">
        {navigation.map((navItem) => (
        <li key={navItem.name} className={
          type === 'navbar' ? "link-item" : "link-item-alt"
        }>
            <Link 
              onClick={() => {newPageSelected(navItem.name)}}
              to={navItem.href}
              className={
                navItem.name === currentPage ? "active" : ""
              }>
              {navItem.name}
            </Link>
        </li>
        ))}
    </div>
  );
}
export default LinkItem;