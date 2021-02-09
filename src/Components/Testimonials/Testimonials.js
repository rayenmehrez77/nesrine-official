import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img from "../../assets/images/wakar.png";
import "./Testimonials.scss";

const Testimonials = () => {
  const people = [
    {
      author: "Wakar AICHE 🇩🇿 ",
      quote:
        "I really appreciate what you do my dear sister ❤ It was so nice to meet you 😍🙈 and learn from you 🌹 You're amazing 🤩 You're an amazing Coach 🙆",
      image: img,
    },
    {
      author: "Floulen",
      quote: "dsfsdfsdfaerart",
      image: img,
    },
    {
      author: "Someone",
      quote: "zataztaztazt.",
      image: img,
    },
  ];

  const [index, setIndex] = useState(0);
  const { quote, author, image } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const nextPeople = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPeople = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <section id="testimonials" className="testimonials">
      <h1 className="testimonials__title">
        <span>T</span>
        estimonials
      </h1>
      <article className="testimonials__container">
        <div className="img-container">
          <img src={image} alt={author} />
        </div>
        <footer>
          <h4>{author}</h4>
          <p>{quote}</p>
        </footer>
        <div className="testimonials__buttons">
          <button className="prev-btn" onClick={prevPeople}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPeople}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
