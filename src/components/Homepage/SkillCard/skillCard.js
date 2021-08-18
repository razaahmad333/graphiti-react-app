import React, { Component } from "react";
import "./style.css";
class SkillCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div
          className={"skillCard  hoverable card " + this.props.headColorClass}
          id="crda"
        >
          <div className="card-content activator">{this.props.skillName}</div>
          <div className="card-reveal" id="crdar">
            <span className="card-title">
              {this.props.skillName}{" "}
              <i className="material-icons right">close</i>
            </span>
            <p>{this.props.skillDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillCard;
