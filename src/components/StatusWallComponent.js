import React, { Component } from 'react';
import './CSS/StatusWallComponent.css';

class StatusWallComponent extends Component {
  render() {
    return (

        <div className="wallContainer">
          <CreateStatus />
          <Status />
          <Status />
          <Status />
        </div>

    );
  }
}



class Status extends Component {
  render() {
    return (
        <div className="statusContainer">
          <div className="userInfoCard">
            <img className="userImage" src="https://i.imgur.com/LBy4WcJ.jpg" />
            <div className="userNameTime">
              <h4>Robert Beck</h4>
              <p>15:12</p>
            </div>
          </div>
          <div className="statusText">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
    );
  }
}


class CreateStatus extends Component {
  render() {
    return (
      <div className="createStatusContainer">
        <div className="optionCreate"><p>Status</p></div>
        <textarea className="textAreaStatus" placeholder="What's up?"/>
        <div className="postButtonContainer">
          <button className="settingsButton">Settings</button>
          <button className="postButton">Post</button>
        </div>
      </div>
    );
  }
}

export default StatusWallComponent;