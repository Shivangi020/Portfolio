import React from "react";
import Heading from "./Heading";

const Contact = () => {
  return (
    <div className="contact-cn" id="Contact">
      <Heading
        heading={"Connect Today"}
        comment={"// Let's Build Web Together"}
      />
      <section className="contact-s">
        <form className="contact-form">
          <input type="text" name="from_name" placeholder="Name"/>
          <input type="email" name="from_email" placeholder="Your Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="html_message" placeholder="Message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </section>
    </div>
  );
};

export default Contact;
