import React, { Component } from "react";
import canvas from "../../images/canvas.png";
import like from "../../images/like.png";
import "./style.css";
export default class AccountPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="coverPhoto">
          <div>
            <h1>Ahmad Raza</h1>
            <p>Member Since 12th April 2020</p>
          </div>
          <div>
            <div className="profilePicture"></div>
          </div>

          <div className="details">
            <div className="artworks">
              <img src={canvas} />
              <span>ArtWorks: 0</span>
            </div>
            <div className="likes">
              <img src={like} />
              <span>Likes: 0</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 l8">
              <div className="myuploads">
                <div className="headers">My Uploads</div>
                <div className="row">
                  <div className="col s12 m6 l4">
                    <div className="card-panel upload1"></div>
                  </div>
                  <div className="col s12 m6 l4">
                    <div className="card-panel upload2"></div>
                  </div>
                  <div className="col s12 m6 l4">
                    <div className="card-panel upload3"></div>
                  </div>
                  <div className="col s12 m6 l4">
                    <div className="card-panel upload4"></div>
                  </div>
                  <div className="col s12 m6 l4">
                    <div className="card-panel upload5"></div>
                  </div>
                  <div className="col s12 m6 l4">
                    <div className="card-panel upload6"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 l4">
              <div className="row">
                <div className="col s12">
                  <div className="mybio card-panel">
                    <div className="headers">My Bio</div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore esse harum molestiae quos pariatur reiciendis ex.
                      Non reiciendis qui, ut quas dolores, inventore aliquam
                      deleniti suscipit provident veniam earum quod.
                    </p>
                  </div>
                </div>
                <div className="col s12">
                  <div className="mysaves card-panel">
                    <div className="headers">My Saves</div>
                    <div className="panels">
                      <div className="card-panels p1"></div>
                      <div className="card-panels p2"></div>
                      <div className="card-panels p3"></div>
                      <div className="card-panels p4"></div>
                      <div className="card-panels p5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
