import React, { Component } from "react";
import "./style.css";

class AlreadyEnded extends Component {
  endedEventComponent() {
    return (
      <div className="event1 card-panel hoverable">
        <div className="row">
          <div className="col s12 m8 l10">
            <div>3D Competetion</div>
            <div>Theme : Nature</div>
          </div>
          <div className="col s12 m4 l2">
            <div className="winnerBtn">Winner</div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="endedEvent">
          <div className="row">
            <div className="col s12">
              <div className="eventHeading">
                <div className="circle"></div>
                <div className="headText">Already Ended</div>
              </div>
            </div>
            <div className="col s12">{this.endedEventComponent()}</div>
            <div className="col s12">{this.endedEventComponent()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlreadyEnded;
