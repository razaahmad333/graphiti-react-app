import React, { Component } from "react";
import "./style.css";
export default class WannaHelp extends Component {
  render() {
    return (
      <div>
        <div className="card-panel hoverable" id="WannaHelp">
          <div className="heading">
            Want to {"  "}
            <span>Help Us</span>?
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            aut provident ex consequatur nam at repellendus, libero natus
          </p>
          <div className="center">
            <div className="btn hoverable" id="applyNow">
              Apply Now
            </div>
          </div>
        </div>
      </div>
    );
  }
}
