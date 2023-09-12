import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import Heading from "./Heading";

const Contact = () => {
  const form = useRef();
  const [popup , setPopup] = useState(false)

  const [mailAction , setMailAction] = useState({isSending:false , isError:false , isSuccess:false})


  const sendEmail = (e) => {
    e.preventDefault(); 
    setMailAction({...mailAction,isSending:true})
    setPopup(true)

    emailjs.sendForm(
        "service_ckui3z8",
        "template_yxe5bhz",
        form.current,
        "gNBupfL8jlwrxqBIf"
      )
      .then(
        (result) => {
         setMailAction({...mailAction, isSuccess:true , isError:false , isSending:false})
        },
        (error) => {
          setMailAction({...mailAction, isSuccess:false , isError:true , isSending:false})
        }
      );
  };

  return (
    <div className="contact-cn" id="Contact">
      <Heading
        heading={"Your Feedback"}
        comment={"// Shaping the Future with Your Input"}
      />
    {  popup?<section className="contact-popup">
      {mailAction.isSending ?<p>Sending...</p>:<p></p>}
      {mailAction.isError ? <p>Something went wrong</p>:<p></p>}
      {mailAction.isSuccess ? <p>Great.. Will contact back soon</p>:<p></p>}
      </section>:<></>}

      <section className="contact-s">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Name" required />
          <input type="email" name="from_email" placeholder="Email" required />
          <textarea
            name="html_message"
            placeholder="Message"
            required
          ></textarea>
          <input type="submit" value="Send" className="input-btn" />
        </form>
      </section>
    </div>
  );
};

export default Contact;
