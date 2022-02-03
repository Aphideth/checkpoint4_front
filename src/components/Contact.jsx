import React from "react";
// import { Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hm0sf0r",
      "template_uvzpz4h",
      e.target,
      "user_MhZrmmz93nXD7Jt4gGkvJ"
    );
    alert("Thank you, for your message ! ");
    e.target.reset();
  };
  return (
    <div>
      <h2>Contact</h2>
      <form className="col-md-4 col-md-offset-4" onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="Email"></label>
          <input type="email" placeholder="email" required="required" />
        </div>
        <div className="form-group">
          <label htmlFor="Message"></label>
          <textarea
            type="text"
            name="message"
            placeholder="votre message"
            required="required"
          ></textarea>
        </div>
        <div>
          {/* <Button type="submit" value="Send" variant="dark">
            ENVOYER
          </Button> */}
          <input type="submit" value="Submit" required />
        </div>
      </form>
    </div>
  );
};

export default Contact;
