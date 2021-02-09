import React, { useState } from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import { ReactComponent as MessagingLogo } from "../../assets/messaging.svg";
import "./ContactPage.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { db } from "../../firebase/firebase.utils";
import FormInput from "../../Components/FormInput/FormInput";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      submitted: false,
    };
  }

  handleSubmit = (e) => {
    const { name, email, phone, message } = this.state;

    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        phone: phone,
      })
      .catch((error) => {
        alert(error.message);
      });

    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    const { name, email, phone, message, submitted } = this.state;

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
            <form className="contact-page__form" onSubmit={this.handleSubmit}>
              <FormInput
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                handleChange={this.handleChange}
                required
              />
              <FormInput
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
                required
              />
              <FormInput
                name="phone"
                type="number"
                placeholder="Your phone number"
                value={phone}
                onChange={this.handleChange}
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                value={message}
                placeholder="Write your message here..."
                className="contact-page__message"
                onChange={this.handleChange}
                required
              ></textarea>
              <button
                type="submit"
                onClick={() => this.setState({ submitted: true })}
              >
                Submit
              </button>
              {submitted ? (
                <span
                  style={{
                    color: "green",
                    fontSize: "1.6rem",
                    marginTop: "1rem",
                  }}
                >
                  Thanks for Submitting 👍 ❤
                </span>
              ) : null}
            </form>
          </div>
          <MessagingLogo title="contact img" className="contact-page__image" />
        </div>
      </div>
    );
  }
}

export default Contact;
