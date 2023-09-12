import React from 'react'
import {LiaCopyright} from 'react-icons/lia';
const Footer = () => {

    const date = new Date();
    const yearNow = date.getFullYear();

  return (
    <div className='footer'>
      <p>Thank you for visiting my website.</p>
      <div className='copyright-div'><span><LiaCopyright/></span><p>{yearNow} Shivangi Singh</p></div>
    </div>
  )
}

export default Footer