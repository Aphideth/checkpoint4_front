import React from "react";
import { Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <form className="col-md-4 col-md-offset-4">
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
          <Button type="submit" value="Send" variant="dark">
            ENVOYER
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
