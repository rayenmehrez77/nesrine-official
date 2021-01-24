import React from "react";
import image from "../../assets/images/nesrine.png";
import imgbg from "../../assets/images/circles.svg";
import "./Intro.scss";
import { db } from "../../firebase/firebase.utils";

class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    db.collection("newsletter")
      .add({
        email: this.state.email,
      })
      .then(() => {
        alert("Thanks for subscribing ❤👍 ");
      })
      .catch((error) => {
        console.log(error.message);
      });

    this.setState({
      email: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="intro">
        <div className="intro__desc">
          <h1>Welcome,</h1>
          <h3>DISCOVER YOUR PURPOSE</h3>
          <h4>And start the journey with me</h4>
          <div className="intro__newsletter">
            <h6>Get my weekly tips 👇</h6>
            <form className="intro__form" onSubmit={this.handleSubmit}>
              <input
                name="email"
                type="email"
                placeholder="Enter your email "
                value={this.state.email}
                onChange={this.handleChange}
              />
              <button type="submit">Subscribe now</button>
            </form>
          </div>
        </div>
        <div className="intro__imgBox">
          <img src={image} alt="nesrine bedhief" className="intro__imgBox-1" />
          <img src={imgbg} alt="bg" className="intro__imgBox-2" />
        </div>
      </div>
    );
  }
}

export default Intro;
