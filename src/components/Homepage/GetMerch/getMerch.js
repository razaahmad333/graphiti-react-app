import React, { Component } from "react";
import "./style.css";

class GetMerch extends Component {
  render() {
    return (
      <div>
        <div className="card-panel hoverable" id="getMerch">
          <div className="heading">
            Get
            <span>Merch!</span>
          </div>

          <div className="row merchPhotos">
            <div className="col s6">
              <div className="card-panel merch1 hoverable"></div>
            </div>
            <div className="col s6">
              <div className="card-panel merch2 hoverable"></div>
            </div>
          </div>
          <div className="row merchPhotos">
            <div className="col s6">
              <div className="card-panel merch2 hoverable"></div>
            </div>
            <div className="col s6">
              <div className="card-panel merch1 hoverable"></div>
            </div>
          </div>
          <div className="center">
            <div className="btn hoverable applyNow">Buy Now</div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetMerch;
