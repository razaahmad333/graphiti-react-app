import React from "react";
import "./style.css";
import M from "materialize-css";
import SignIn from "../SignInModel/signin";
import Login from "../LoginModal/login";
import Sidebar from "../Sidebar/sidebar";
import graphitiLogo from "../../images/WebsiteTextLogo2.png";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
// import DropdownContent from "../DropdownContent/dropdownContent";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarInstance: undefined,
      userAuthenticated: false,
      currentUrlPathname: window.location.pathname,
    };
    this.showingUnderLine = this.showingUnderLine.bind(this);
  }
  componentDidMount() {
    this.updateHighlight(window.location.pathname);
    const dropdownProfileNav = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropdownProfileNav, {
      container: document.querySelector("#navDropdownContainer"),
    });
  }
  showingUnderLine(e) {
    const exploreLinks = document.querySelectorAll(".explore-links");

    for (let elem of exploreLinks[0].children) {
      elem.children[0].children[0].className = "";
    }
    e.target.className = "active";
    this.setState({
      currentUrlPathname: ReactDOM.findDOMNode(e.target).parentNode.parentNode
        .pathname,
    });
  }

  updateHighlight(urlpathname) {
    const exploreLinks = document.querySelectorAll(".explore-links");

    for (let elem of exploreLinks[0].children) {
      elem.children[0].children[0].className =
        elem.pathname === urlpathname ? "active" : "";
    }
  }
  render() {
    return (
      <div>
        <div>
          <div className="row nav-bar">
            <div
              className="hamburgur col s2 sidenav-trigger"
              data-target="mobile-demo"
            >
              <i className="material-icons">menu</i>
            </div>
            <div className="col s2">
              <Link
                to="/"
                className="modal-trigger"
                onClick={() => {
                  this.updateHighlight("/");
                  this.setState({ currentUrlPathname: "/" });
                }}
              >
                <div className="brand-name">
                  <img src={graphitiLogo} className="logoimg" alt="" />
                </div>
              </Link>
            </div>
            <div className="col s7 hide-on-med-and-down">
              <div className="explore-links">
                <Link to="/">
                  <div className="home ">
                    {" "}
                    <span className="active" onClick={this.showingUnderLine}>
                      {" "}
                      Home
                    </span>
                  </div>
                </Link>
                <Link to="/artworks">
                  <div className="art-work">
                    {" "}
                    <span onClick={this.showingUnderLine}> ArtWorks</span>
                  </div>
                </Link>
                <Link to="/blogs">
                  {" "}
                  <div className="blogs">
                    {" "}
                    <span onClick={this.showingUnderLine}>Blogs </span>{" "}
                  </div>
                </Link>
                <Link to="/contests">
                  <div className="contests">
                    <span onClick={this.showingUnderLine}>Contests</span>
                  </div>
                </Link>{" "}
                <Link to="/forums">
                  <div className="forum">
                    <span onClick={this.showingUnderLine}>Forum</span>
                  </div>
                </Link>{" "}
              </div>
            </div>
            <div className="col s3 hide-on-med-and-down">
              {!this.state.userAuthenticated ? (
                <div className="account-links">
                  <a href="#loginModal" className="modal-trigger">
                    <div className="login">Login</div>
                  </a>
                  <a href="#signUpModal" className="modal-trigger">
                    <div className="signup btn">Sign Up</div>
                  </a>
                </div>
              ) : (
                <div id="accountBtns">
                  <div className="switch">
                    <label>
                      <input type="checkbox" className="leverPlatform" />
                      <span className="lever"></span>
                    </label>
                  </div>
                  <div
                    className="profileLink dropdown-trigger"
                    data-target="dropdownp2"
                    id="dropdownProfileNav"
                  ></div>
                </div>
              )}
            </div>
          </div>
          <Sidebar
            updateHighlight={(urlpathname) => {
              this.updateHighlight(urlpathname);
            }}
            currentUrlPathname={this.state.currentUrlPathname}
            userAuthenticated={!this.state.userAuthenticated}
            getSidebarInstance={(instance) => {
              this.setState({ sidebarInstance: instance });
            }}
          />
          <SignIn
            toCloseSidebar={() => {
              this.state.sidebarInstance.close();
            }}
            getSignInInstance={(instance) => {
              this.setState({ signInInstance: instance });
            }}
          />
          <Login
            toCloseSidebar={() => {
              this.state.sidebarInstance.close();
              this.state.signInInstance.close();
            }}
          />
        </div>
      </div>
    );
  }
}

export default Navigation;
