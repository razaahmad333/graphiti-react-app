import React from "react";
import "./style.css";
import M from "materialize-css";
import fbLogo from "../../images/fb.png";
import googleLogo from "../../images/google.png";
class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const modal = document.querySelector("#loginModal");
    const instance = M.Modal.init(modal, {
      onOpenEnd: () => {
        this.props.toCloseSidebar();
      },
    });
  }

  render() {
    return (
      <div id="loginModal" className="modal">
        <div className="login-panel">
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
                type="email"
                className="browser-default"
                name="email"
                placeholder="enter your email"
              />
            </div>
            <div className="col s12">
              <input
                className="browser-default"
                type="password"
                name="password"
                placeholder="enter your password"
              />
            </div>

            <div className="col s12">
              <div className="actionBtn">LOGIN</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
