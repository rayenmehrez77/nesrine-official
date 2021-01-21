import React, { useState } from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import { ReactComponent as MessagingLogo } from "../../assets/messaging.svg";
import "./ContactPage.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { db } from "../../firebase/firebase.utils";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

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
          <form className="contact-page__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              className="contact-page__name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              className="contact-page__email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              cols="30"
              rows="10"
              value={message}
              placeholder="Your message"
              className="contact-page__message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <MessagingLogo title="contact img" className="contact-page__image" />
      </div>
    </div>
  );
}

export default Contact;
