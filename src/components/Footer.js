import React from 'react';
import LinkItem from './LinkItem'
import '../styles/footer.scss'

const Footer = ({newPageSelected, currentPage}) => {
  return (
  <footer className="footer"> 
    <div className="footer-items">
      <LinkItem type={'footer'} currentPage={currentPage} newPageSelected={newPageSelected}/>
    </div>
    <p className="footer-text">© 2021 bluepoint2</p>
  </footer>
  );
}
export default Footer;