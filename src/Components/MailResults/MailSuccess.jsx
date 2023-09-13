import React from 'react'
import successEmoji from '../../assets/Success-emoji.svg'

const MailSuccess = ({successOnClick}) => {
  return (
    <div className='mail-res'>
      <img src={successEmoji}></img>
      <h3>Thank you for your Feedback</h3>
      <p>I'll be in touch shortly.</p>
      <button onClick={()=>successOnClick()}>Ok</button>
    </div>
  )
}

export default MailSuccess