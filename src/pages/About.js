import React from 'react';
import ContactUs from '../components/ContactUs'
import '../styles/fonts.scss'
import '../styles/about.scss'
  
function About() {
  const staticImage = 'https://static.wixstatic.com/media/c86aa8_6a3853ed9b254a31a3ddeb3b1bc399ef~mv2.jpg/v1/fill/w_752,h_189,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Profile%20background-Liderman.jpg';
  return (
    <div className="about-page">
      <h3 className="about-title section-title">Every care center needs NAVI</h3>
      <div className="about-image-wrapper">
        <img className="about-image" src={staticImage} alt="about" />
      </div>
      <ContactUs />
    </div>
  );
};
  
export default About;