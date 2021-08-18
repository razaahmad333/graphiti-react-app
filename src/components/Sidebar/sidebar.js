import React from "react";
import M from "materialize-css";
import "./style.css";
import graphitiLogo from "../../images/WebsiteTextLogo2.png";
import { Link, useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
import DropdownContent from "../DropdownContent/dropdownContent";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.highlightBackground = this.highlightBackground.bind(this);
  }
  componentDidMount() {
    const sidenav = document.querySelector("#mobile-demo");
    const instance = M.Sidenav.init(sidenav, {});
    this.props.getSidebarInstance(instance);
    this.updateHighlightBackground(window.location.pathname);
    this.updateHighlightBackground(this.props.currentUrlPathname);
  }

  updateHighlightBackground(urlpathname) {
    const sidenav = document.querySelector("#mobile-demo");
    for (let i = 1; i < 6; i++) {
      const elem = sidenav.children[i];
      elem.children[0].className =
        elem.children[0].pathname === urlpathname ? "active" : "";
    }
  }

  highlightBackground(e) {
    const sidenav = document.querySelector("#mobile-demo");
    for (let i = 1; i < 6; i++) {
      const elem = sidenav.children[i];
      elem.children[0].className = "";
    }
    this.props.updateHighlight(
      ReactDOM.findDOMNode(e.target).parentNode.pathname
    );
    ReactDOM.findDOMNode(e.target).parentNode.className = "active";
  }
  render() {
    const g = document.querySelector("#mobile-demo")
      ? this.updateHighlightBackground(this.props.currentUrlPathname)
      : "";
    return (
      <div>
        {" "}
        <ul className="sidenav" id="mobile-demo">
          <li>
            <img src={graphitiLogo} alt="" />
          </li>
          <li>
            <Link to="/" className="active" onClick={this.highlightBackground}>
              <div className="home navlinktext">Home</div>
            </Link>
          </li>
          <li>
            <Link to="/artworks" onClick={this.highlightBackground}>
              <div className="art-work navlinktext">ArtWorks</div>
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={this.highlightBackground}>
              <div className="blogs navlinktext">Blogs</div>
            </Link>
          </li>
          <li>
            <Link to="/contests" onClick={this.highlightBackground}>
              <div className="contests navlinktext">Contests</div>
            </Link>
          </li>
          <li>
            <Link to="/forums" onClick={this.highlightBackground}>
              <div className="forum navlinktext">Forum</div>
            </Link>
          </li>
          <div className="divider"></div>
          {this.props.userAuthenticated ? (
            <div className="loginBtns">
              <li>
                <a
                  href="#loginModal"
                  className="modal-trigger loginModalOpener"
                >
                  <div className="login navlinktext">Login</div>
                </a>
              </li>
              <li>
                <a
                  href="#signUpModal"
                  className="modal-trigger signUpModalOpener"
                >
                  <div className="signup navlinktext">Sign Up</div>
                </a>
              </li>
            </div>
          ) : (
            <div className="accountBtn">
              <li>
                <div className="switch">
                  <label>
                    <input type="checkbox" className="leverPlatform" />
                    <span className="lever"></span>
                  </label>
                </div>
              </li>
              <li>
                <div
                  data-target="dropdownp1"
                  className="profileInSidenav dropdown-trigger"
                >
                  <div className="profileLink"></div>
                  <div className="usernameP">Ahmad Raza</div>
                </div>
              </li>
            </div>
          )}
        </ul>
        <DropdownContent />
      </div>
    );
  }
}

export default Sidebar;
