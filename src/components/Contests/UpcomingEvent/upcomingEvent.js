import React, { Component } from "react";
import "./style.css";
class UpcomingEvent extends Component {
  constructor(props) {
    super(props);
  }
  upcomingEventComponent() {
    return (
      <div className="event1 card-panel hoverable">
        <div className="row">
          <div className="col s12">
            <div>Logo Design</div>
            <div className="timeCounter">Live in : 5 days</div>
          </div>
          <div className="col s12 center">
            <div className="Btn">Notify Me</div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="commingEvent">
        <div className="row">
          <div className="col s12">
            <div className="eventHeading">
              <div className="circle"></div>
              <div className="headText">Upcoming Events</div>
            </div>
          </div>
          <div className="col s12">
            <div className="row center">
              <div className="col s12 m6 l12">
                {this.upcomingEventComponent()}
              </div>
              <div className="col s12 m6 l12">
                {this.upcomingEventComponent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpcomingEvent;
