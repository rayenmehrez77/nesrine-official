import React, { Component } from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import { ReactComponent as MessagingLogo } from "../../assets/messaging.svg";
import "./ContactPage.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="contact-page">
        <NavigationComponent link="Contact" />
        <div className="contact-page__info">
          <div className="contact-page__content">
            <h1>
              <span>L</span>et's get in Touch
            </h1>
            <div className="contact-page__tel">
              <FaPhoneAlt className="contact-page__tel-icon" />
              <h4>+ 21654121304</h4>
            </div>
            <div className="contact-page__email-text">
              <IoMail className="contact-page__email-text-icon" />
              <h4>bedhiefnoussa@gmail.com</h4>
            </div>
            <form className="contact-page__form">
              <input
                type="text"
                placeholder="Name"
                className="contact-page__name"
              />
              <input
                type="email"
                placeholder="Email"
                className="contact-page__email"
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Your message"
                className="contact-page__message"
              ></textarea>
              <button type="Submit">Submit</button>
            </form>
          </div>
          <MessagingLogo title="contact img" className="contact-page__image" />
        </div>
      </div>
    );
  }
}

export default Contact;
