import React from 'react'
import { SocialIcon } from 'react-social-icons';


function footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <SocialIcon className='linkin' url="https://linkedin.com/in/bamideletalabi" /> 
      <SocialIcon url="https://github.com/Bamidele100/react-portfolio.git" />
      </div>
      <p>&copy; 2023 Bamidele</p>
    </div>
  )
}

export default footer
