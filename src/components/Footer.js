import React from 'react';
import LinkItem from './LinkItem'
import '../styles/footer.scss'

const Footer = ({newPageSelected, currentPage}) => {
  return (
  <footer className="footer">
    <LinkItem type={'footer'} currentPage={currentPage} newPageSelected={newPageSelected}/>
    <p className="footer-text">© 2021 bluepoint2</p>
  </footer>
  );
}
export default Footer;