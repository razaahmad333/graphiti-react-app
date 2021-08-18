import React, { Component } from "react";
import "./style.css";
class LiveRightNow extends Component {
  constructor(props) {
    super(props);
  }
  liveEventComponent() {
    return (
      <div className="event1 card-panel hoverable">
        <div className="row">
          <div className="col s12 m5">
            <div>3D Competetion</div>
            <div>Theme : Nature</div>
            <div className="timeCounter">Time Remaining : 02:00:03</div>
          </div>
          <div className="col s12 m4">Prize Money 750</div>
          <div className="col s12 m3">
            <div className="competeBtn">Compete</div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="liveEvent">
          <div className="row">
            <div className="col s12">
              <div className="eventHeading">
                <div className="circle"></div>
                <div className="headText">Live Right Now!</div>
              </div>
            </div>
            <div className="col s12">{this.liveEventComponent()}</div>
            <div className="col s12">{this.liveEventComponent()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveRightNow;
