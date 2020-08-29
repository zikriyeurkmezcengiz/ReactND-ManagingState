import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Game from "./Game";
import Score from "./Score";

class App extends Component {
  state = {
    answeredQuestion: 0,
    correctQuestion: 0,
  };
  handleAnswer = (answerIsCorrect) => {
    if (answerIsCorrect) {
      this.setState((currentState) => ({
        correctQuestion: currentState.correctQuestion + 1,
      }));
    }

    this.setState((currState) => ({
      answeredQuestion: currState.answeredQuestion + 1,
    }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game handleAnswer={this.handleAnswer} />
        <Score
          correctQuestion={this.state.correctQuestion}
          answeredQuestion={this.state.answeredQuestion}
        />
      </div>
    );
  }
}

export default App;
