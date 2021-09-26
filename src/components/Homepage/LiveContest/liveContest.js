import React, { Component } from "react";
import "./style.css";
import trophyIcon from "../../../images/TrophyIcon.svg";
export default class LiveContest extends Component {
  render() {
    return (
      <div>
        <div className="card-panel hoverable" id="liveContest">
          <div className="heading">
            {"Live   "} <span>Contest!</span>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            nesciunt vitae qui blanditiis, repudiandae reiciendis
            perspiciatis.nesciunt vita
          </p>
          <img src={trophyIcon} alt="this is photoso" />
        </div>
      </div>
    );
  }
}
