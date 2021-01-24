import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./ServicesPage.scss";
import { IoMdContacts, IoMdPersonAdd } from "react-icons/io";
import { IoTicket } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";

import { MdLanguage, MdLocationOn, MdDateRange } from "react-icons/md";
import ConferenceComponent from "../../Components/ConferenceComponent/ConferenceComponent";

import img from "../../assets/images/nesrine.png";

function ServicesPage() {
  return (
    <div className="services-page">
      <NavigationComponent link="Services" />
      <div className="services-page__content">
        <h1>Conference Business مخك ياقف 🚀 </h1>
        <div className="services-page__info">
          <h2>
            If you’re feeling completely overwhelmed, it's hardly
            surprising...🤷‍♂️
          </h2>
          <p>
            Perhaps advancing in your business feels more difficult right now?
            😥
          </p>
          <p>
            You’re frustrated and don’t understand why you’re not going in the
            direction you so want to.
          </p>
          <p>
            You are frustrated and do not understand why you are not going in
            the direction you want.
          </p>
          <p>do you want to know more and become productive?</p>
          <h3>🔥💰 Now is the right time 💰🔥 </h3>
        </div>
        <div className="services-page__details">
          <span> ✅ Are you ready ? 🎯</span>
          <span>✅ Do you want to know more and become productive? 🚀 🚀 </span>
          <span>✅ Do you want to discover the world of business? 💥💥</span>
          <span>
            ✅ Do you want to know the right strategies that allow you to follow
            the right path? 💥💥
          </span>
          <span>
            ✅ Are you a student and do not know which professional path to
            follow?
          </span>
          <span>
            ✅ Do you want to get out of your comfort zone and move on to doing
            what you love?
          </span>
          <span>
            {" "}
            ✅ Or are you just interested in the field of entrepreneurship and
            often looking for continuous improvement?
          </span>
        </div>
        <div className="services-page__business">
          <h2>
            {" "}
            Just imagine having the time, energy, motivation and answers you
            need to build your very best life and business? 🚀💰💥🔥🎯
          </h2>
          <span>How would that feel? Here is your chance. 👇👇 </span>
        </div>
        <div className="services-page__solution">
          <img src={img} alt="nesrine" />
          <h2>
            This is everything I wish I’d known about growing a successful
            business and will help you avoid the mistakes most entrepreneurs
            make when starting or scaling.
          </h2>
        </div>
        <div className="services-page__program">
          <h2>Conference program:</h2>
          <ul>
            <li>🟢 The mindset</li>
            <li> 🟢 What is entrepreneurship?</li>
            <li>🟢 Your business (with passion), KEY to your success</li>
            <li>
              🟢 How to translate your business today during and after Covid?
            </li>
            <li>🟢 Strategies for going online</li>
            <li>🟢 the keys to a successful business</li>
          </ul>
        </div>
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
            Icon1={IoTicket}
            Icon2={MdDateRange}
          />
          <ConferenceComponent
            title1="Public event"
            title2="French"
            Icon1={IoMdContacts}
            Icon2={MdLanguage}
          />
        </div>
      </div>
      <div className="services-page__reservation">
        <div className="services-page__reservation-left">
          <h2>Business مخك ياقف</h2>
          <h3> Price: 99TND per person </h3>
        </div>
        <a
          target="_blank"
          href="https://www.groupado.tn/fr/experience/OgQUK0IE/business-mkhk-yaqf"
        >
          Reserve now
        </a>
      </div>
    </div>
  );
}

export default ServicesPage;
