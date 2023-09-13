import React from 'react'
import {GrSend} from 'react-icons/gr'

const MailSending = () => {
  return (
    <>
    <div className='send-icon'><GrSend/></div>
    <div className='mail-send-res'>
      <p>Sending</p>
      <div class="sending-loader"></div>
    </div>
  </>
  )
}

export default MailSending