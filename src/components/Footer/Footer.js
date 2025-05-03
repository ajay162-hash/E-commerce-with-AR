import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="contact" id="contact">
      <div className="main-content">
        <div class="contact-content">
          <Link to="/"> Home </Link>
          <Link
            to="/"
          >
            About
          </Link>
          <Link to="/"> FAQ </Link>
          <Link to="/"> Services </Link>
        </div>

        <div className="contact-content">
          <Link to="/"> Shipping & Returns </Link>
          <Link to="/"> Store Policy </Link>
          <Link to="/"> Payment Method </Link>
        </div>

        <div className="contact-content">
          <Link to="/"> Feedback </Link>
          <Link to="/" target="_blank">
            Contact
          </Link>
          
        </div>

        <div className="contact-content">
          <Link
            to="https://github.com/ajay162-hash"
            target="_blank"
          >
            GitHub profile
          </Link>
        </div>
      </div>

      <div class="action">
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <input type="submit" name="submit" value="Submit" required></input>
        
        </form>
      </div>
    </div>
  );
}

export default Footer;
