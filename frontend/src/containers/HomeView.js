import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/HomeView.css";

export default class HomeView extends Component {
  _getPlayerName = event => {
    event.preventDefault();
    this.setState({ enterName: false });
    this.props.player(event.target[0].value);
  };
  _handleStartGame = () => {
    if (this.props.enterName) {
      return (
        <form className="form" onSubmit={this._getPlayerName}>
          <label className="username-label">
            What is your name, oh great deleter?
          </label>
          <input
            autoComplete="off"
            type="username"
            className="username"
            id="username"
          />
          <button type="submit" className="form-button" id="button">
            Submit
          </button>
        </form>
      );
    } else {
      return (
        <form className="form" onSubmit={this._getPlayerName}>
          <button type="button" className="form-button" id="button">
            <Link to="/fight"> START </Link>
          </button>
        </form>
      );
    }
  };

  render() {
    return (
      <div className="HomeView">
        <div className="homeTitle">
          <h1>ROBO-FIGHT 4</h1>
          <h3>Redo This</h3>
        </div>
        {this._handleStartGame()}
        <div className="instructions-container">
          <p>Do you hate robots? Are you ready for REVENGE? Enter a username and press start.
          Kick bot by choosing an attack method of choice. Remember ALL ROBOTS MUST DIE! Are you ready?</p>
        </div>
      </div>
    );
  }
}
