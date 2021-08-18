import React from "react";
import { Link } from "react-router-dom";

class DropdownContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <a href="#" data-target="dropdownp" className="dropdown-trigger"></a> */}
        {/* <a className="dropdown-trigger" href="#" data-target="dropdown1"></a> */}

        <ul id="dropdownp2" className="dropdown-content">
          <li>
            <Link to="/accountPage">My Account</Link>
          </li>
          <li>
            <a href="#!">Setting</a>
          </li>
          <li>
            <a href="#!">Log out</a>
          </li>
        </ul>

        <ul id="dropdownp1" className="dropdown-content">
          <li>
            <Link to="/accountPage">My Account</Link>
          </li>
          <li>
            <a href="#!">Setting</a>
          </li>
          <li>
            <a href="#!">Log out</a>
          </li>
        </ul>
        {/* <a className="dropdown-trigger" href="#" data-target="dropdown2"></a> */}
      </div>
    );
  }
}

export default DropdownContent;
