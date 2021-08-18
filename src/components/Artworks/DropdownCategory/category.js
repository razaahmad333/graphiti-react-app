import React, { Component } from "react";
import "./style.css";
import M from "materialize-css";
export default class DCategory extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const dropdownSkill = document.querySelector("#dropdownSkill");
    const instance1 = M.Dropdown.init(dropdownSkill, {
      container: document.querySelector("#dropdownSkillContainer"),
    });
    const dropdownTime = document.querySelector("#dropdownTime");
    const instance2 = M.Dropdown.init(dropdownTime, {
      container: document.querySelector("#dropdownTimeContainer"),
    });
  }

  render() {
    return (
      <div>
        <div className="filterContainer">
          <div className="row">
            <div className="col s6">
              <a
                className="dropdown-trigger"
                href="#"
                data-target="dropdown1"
                id="dropdownSkill"
              >
                <div className="filters">
                  <span>Show All</span>
                  <i className="material-icons right">expand_more</i>
                </div>
              </a>
            </div>
            <div className="col s6">
              <a
                className="dropdown-trigger"
                href="#"
                data-target="dropdown2"
                id="dropdownTime"
              >
                <div className="filters">
                  <span>All Times</span>
                  <i className="material-icons right">expand_more</i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!" className="selected">
              Show All
            </a>
          </li>
          <li>
            <a href="#!">3D Renders</a>
          </li>
          <li>
            <a href="#!">2D Art&Ani</a>
          </li>
          <li>
            <a href="#!">PhotoEdits</a>
          </li>
        </ul>
        <ul id="dropdown2" className="dropdown-content">
          <li>
            <a href="#!" className="selected">
              All Times
            </a>
          </li>
          <li>
            <a href="#!">Latest</a>
          </li>
          <li>
            <a href="#!">Popular</a>
          </li>
          <li>
            <a href="#!">Trending</a>
          </li>
        </ul>
      </div>
    );
  }
}
