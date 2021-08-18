import React from "react";
import "./style.css";
import M from "materialize-css";
import fbLogo from "../../images/fb.png";
import googleLogo from "../../images/google.png";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const modal = document.querySelector("#signUpModal");
    const instance = M.Modal.init(modal, {
      onOpenEnd: () => {
        this.props.toCloseSidebar();
      },
    });

    this.props.getSignInInstance(instance);
  }
  render() {
    return (
      <div>
        <div id="signUpModal" className="modal">
          <div className="signup-panel">
            <div className="row">
              <div className="col s12">
                <div className="aBtn">
                  <div className="btncontent">
                    <div className="aicon">
                      <img src={googleLogo} alt="" />
                    </div>
                    <div className="aname">Google</div>
                  </div>
                </div>
              </div>
              <div className="col s12">
                <div className="aBtn">
                  <div className="btncontent">
                    <div className="aicon">
                      <img src={fbLogo} alt="" />
                    </div>
                    <div className="aname">Facebook</div>
                  </div>
                </div>
              </div>

              <div className="col s12 OR">OR</div>

              <div className="col s12">
                <input
                  className="browser-default"
                  type="text"
                  name="username"
                  id="susername"
                  placeholder="enter your username"
                />
              </div>
              <div className="col s12">
                <input
                  type="email"
                  className="browser-default"
                  name="email"
                  id="semail"
                  placeholder="enter your email"
                />
              </div>
              <div className="col s12">
                <input
                  className="browser-default"
                  type="password"
                  name="password"
                  id="spassword"
                  placeholder="enter your password"
                />
              </div>

              <div className="col s12">
                <div className="actionBtn" id="signupbtn">
                  SIGN UP
                </div>
              </div>
              <div className="col s12">
                <a
                  href="#loginModal"
                  className="modal-trigger loginModalOpener"
                >
                  <div className="actionBtn">Already Have An Account</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
