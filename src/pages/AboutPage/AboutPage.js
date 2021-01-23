import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./AboutPage.scss";
import ReactPlayer from "react-player";
import img from "../../assets/aboutpage-img.png";
import jci from "../../assets/JCI.png";
import erada from "../../assets/american.png";
import enib from "../../assets/enib.png";
import education from "../../assets/mortarboard.svg";
import logic from "../../assets/logical-thinking.svg";

function AboutPage() {
  return (
    <div className="about-page">
      <NavigationComponent link="About" />
      <div className="about-page__info">
        <img src={img} alt="nesrine bedhief" />
        <div className="about-page__content">
          <h4>My Intro</h4>
          <h2>About me</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt id
            natus consectetur ex sit eveniet. Dolorum molestiae veritatis sunt
            aperiam.
          </p>
          <ul>
            <li>
              <span> Name: </span>
              <span>Nesrine Bedhief</span>
            </li>
            <li>
              <span>Date of Birth: </span>
              <span>April 05 ,1998</span>
            </li>
            <li>
              <span>Lives: </span>
              <span> Ariana, Tunisia</span>
            </li>
            <li>
              <span>Email:</span>
              <span>bedhiefnoussa@gmail.com</span>
            </li>
            <li>
              <span>Phone:</span>
              <span>+21654121304</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="about-page__education">
        <h3>
          <span>E</span>ducation and <span> E</span>xperience
        </h3>
        <div className="about-page__education-info">
          <img
            src={education}
            alt="erada"
            className="about-page__education-info-svg"
          />
          <h6>
            Studies at{" "}
            <a
              target="_blank"
              href="https://www.facebook.com/search/top?q=erada%20american%20training"
            >
              ‎Institut Preparatoire Des Etudes d'Ingenieurs De Bizerte
            </a>
          </h6>
        </div>
        <div className="about-page__education-info">
          <img src={education} alt="erada" />
          <h6>
            futur ingénieur at{" "}
            <a
              target="_blank"
              href="https://www.facebook.com/search/top?q=erada%20american%20training"
            >
              ‎ Étape préparatoire
            </a>
          </h6>
        </div>
        <div className="about-page__education-info">
          <img src={enib} alt="enib" className="about-page__education-info" />
          <h6>
            Studied at ENIB -{" "}
            <a target="_blank" href="facebook.com/JuniorENIB/">
              ‎Ecole Nationale d’Ingénieurs de Bizerte
            </a>
          </h6>
        </div>
        <div className="about-page__education-info">
          <img src={erada} alt="erada" />
          <h6>
            Coach at{" "}
            <a
              target="_blank"
              href="https://www.facebook.com/search/top?q=erada%20american%20training"
            >
              ‎ Erada American Center For Training
            </a>
          </h6>
        </div>
        <div className="about-page__education-info">
          <img src={enib} alt="enib" />
          <h6>
            HR and Training Manager and Audit and Quality Assistant at Junior{" "}
            <a target="_blank" href="facebook.com/JuniorENIB/">
              ‎ Entreprise ENIB
            </a>
          </h6>
        </div>
        <div className="about-page__education-info">
          <img src={logic} alt="logic" />
          <h6>Trainer at Soft Skills Trainer</h6>
        </div>
        <div className="about-page__education-info">
          <img src={jci} alt="jci" />
          <h6>
            Vice president de la formations et development at{" "}
            <a target="_blank" href="https://www.facebook.com/jci.khaznadar/">
              JCI Khaznadar
            </a>
          </h6>
        </div>
      </div>
      <h1 className="about-page__details">More details 👇</h1>
      <div className="about-page__player-wrapper">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=qfjfx0XnxgA&t=2s"
          className="about-page__react-player"
          playing
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default AboutPage;
