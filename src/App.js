import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Lamia Harbeg",
        bio:
          "I am a web developer who is proficient in both back-end and front-end frameworks. My passion lies in learning about the latest technologies.",
        imgSrc:
          "data:image/jpeg;base64,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",
        profession: "Full-stack JS Developer",
      },
      show: true,
      counter: 0,
    };
  }

  toggle = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }

  render() {
    console.log("App.js render");
    return (
      <>
        <div className="App">
          {this.state.show === true && (
            <Profile
              fullName={this.state.person.fullName}
              bio={this.state.person.bio}
              imgSrc={this.state.person.imgSrc}
              profession={this.state.person.profession}
            ></Profile>
          )}
          <button onClick={this.toggle}>Click to Hide/Show</button>
          <h3>
            The time since the component has mounted is {this.state.counter}{" "}
            seconds .
          </h3>
        </div>
      </>
    );
  }
}
export default App;
