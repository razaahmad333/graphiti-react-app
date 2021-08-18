import React, { Component } from "react";
import "./style.css";
import img1 from "../../../images/kurz.jpg";
import dp from "../../../images/imghai.jpg";
import heart from "../../../images/heart.png";
import bookmark from "../../../images/bookmark.png";
import share from "../../../images/share.png";
export default class PostCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="card postCard hoverable">
          <div className="card-content">
            <div className="card-image">
              <img
                className="hoverable postImage"
                id="postImage"
                src={this.props.post.post}
                alt=""
              />
            </div>
            <div className="userInfo">
              <div className="dp">
                <img src={this.props.post.dp} alt="" />
              </div>
              <div className="username">{this.props.post.name}</div>
            </div>
          </div>

          <div id="cardActionBorder" className="card-action">
            <div className="row">
              <div className="col s4">
                <a href="#">
                  <img src={heart} alt="" />
                </a>
              </div>
              <div className="col s4">
                <a href="#">
                  <img src={share} alt="" />
                </a>
              </div>
              <div className="col s4">
                <a href="#">
                  <img src={bookmark} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
