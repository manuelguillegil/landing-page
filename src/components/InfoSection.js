import React from 'react';
import '../styles/info-section.scss'
import '../styles/fonts.scss'

const InfoSection = ({icon, title, description, isStyleAlt = false}) => {
  return (
  <div className={isStyleAlt ? 'info-section-alt' : 'info-section'}>
    <div className="info-section-icon">{ icon }</div> 
    <h3 className="info-section-title section-title">{ title }</h3>
    <p className="info-section-description section-subtitle">{ description }</p>
  </div>
  );
}
export default InfoSection;