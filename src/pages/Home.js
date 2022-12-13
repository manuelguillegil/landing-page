import React from 'react'
import Header from '../components/Header'
import InfoSection from '../components/InfoSection'
import ContactUs from '../components/ContactUs'
import { RiWechatLine } from "react-icons/ri";
import { ImQuotesRight } from "react-icons/im";
import '../styles/fonts.scss'
import '../styles/home.scss'

function Home() {
  return (
    <div className="home-page">
      <Header />
      <div className="home-page-info-sections">
        <InfoSection 
        title="Better communication starts with NAVI" 
        description="NAVI allows patients to navigate their healthcare 
        appointments and communicate with their care 
        providers from any mobile device."
        icon={<RiWechatLine />} />
        <InfoSection 
        title="" 
        description="Navigating your healthcare should be as 
        easy as one tap or swipe on your mobile device."
        isStyleAlt="true"
        icon={<ImQuotesRight />} />
        <div className="home-contact-us-section">
          <ContactUs />
          <p className="home-contact-us-address section-subtitle">5440 W. 110th St, Suite 300 Overland Park, KS 66211</p>
        </div>
      </div>
    </div>
  )
}
export default Home