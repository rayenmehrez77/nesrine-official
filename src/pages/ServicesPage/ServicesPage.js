import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./ServicesPage.scss";
import { IoMdContacts, IoMdPersonAdd } from "react-icons/io";
import { IoTicket } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";

import { MdLanguage, MdLocationOn, MdDateRange } from "react-icons/md";
import ConferenceComponent from "../../Components/ConferenceComponent/ConferenceComponent";

function ServicesPage() {
  return (
    <div className="services-page">
      <NavigationComponent link="Services" />
      <div className="services-page__content">
        <h1>Conference Business مخك ياقف 🚀 </h1>
        <div className="services-page__conference">
          <ConferenceComponent
            title1="Online"
            title2="3 hours "
            title3="1 - 100 participant(s)"
            Icon1={MdLocationOn}
            Icon2={BiTimeFive}
            Icon3={IoMdPersonAdd}
          />
          <ConferenceComponent
            title1="100 tickets"
            title2="Date: 13/02/2021"
            title3="Price: 99TND per person"
            Icon1={IoTicket}
            Icon2={MdDateRange}
            Icon3={FaMoneyBillAlt}
          />
          <ConferenceComponent
            title1="Public event"
            title2="French"
            Icon1={IoMdContacts}
            Icon2={MdLanguage}
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
