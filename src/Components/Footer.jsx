import React from 'react'
import {LiaCopyright} from 'react-icons/lia';
const Footer = () => {

    const date = new Date();
    const yearNow = date.getFullYear();

  return (
    <div className='footer'>
      <p>Thank you for visiting my portfolio, and I look forward to the opportunity to work with you.</p>
      <span><LiaCopyright/></span>   <p>{yearNow} Shivangi Singh</p>
    </div>
  )
}

export default Footer