import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./ContactPage.scss";

function ContactPage() {
  return (
    <div className="contact-page">
      <NavigationComponent link="Contact" />
      <h1>Contact Page</h1>
    </div>
  );
}

export default ContactPage;
