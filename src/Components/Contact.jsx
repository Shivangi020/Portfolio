import React from "react";
import Heading from "./Heading";

const Contact = () => {
  return (
    <div className="contact-cn" id="Contact">
      <Heading
        heading={"Your Feedback"}
        comment={"// Shaping the Future with Your Input"}
      />
      <section className="contact-s">
        <form className="contact-form">
          <input type="text" name="from_name" placeholder="Name" required />
          <input type="email" name="from_email" placeholder="Email" required />
          <textarea name="html_message" placeholder="Feedback" required></textarea>
          <input type="submit" value="Send"  className="input-btn"/>
        </form>
      </section>
    </div>
  );
};

export default Contact;
