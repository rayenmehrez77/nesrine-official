import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./ServicesPage.scss";
import { IoMdContacts, IoMdPersonAdd } from "react-icons/io";

import { BiTimeFive } from "react-icons/bi";
import { MdLanguage, MdLocationOn } from "react-icons/md";

function ServicesPage() {
  return (
    <div className="services-page">
      <NavigationComponent link="Services" />
      <div className="services-page__content">
        <h1>Conference Business مخك ياقف 🚀 </h1>
        <div className="services-page__conference">
          <div className="services-page__conference-left">
            <div className="services-page__conference-row">
              <MdLocationOn className="services-page__icon" />
              <span>Online</span>
            </div>
            <div className="services-page__conference-row">
              <BiTimeFive className="services-page__icon" />
              <span>3 hours</span>
            </div>
            <div className="services-page__conference-row">
              <IoMdPersonAdd className="services-page__icon" />
              <span>1 - 100 participant(s)</span>
            </div>
          </div>
          <div className="services-page__conference-right">
            <div className="services-page__conference-row">
              <IoMdContacts className="services-page__icon" />
              <span>public event</span>
            </div>
            <div className="services-page__conference-row">
              <MdLanguage className="services-page__icon" />
              <span>French</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
