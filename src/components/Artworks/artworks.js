import React from "react";
import DCategory from "./DropdownCategory/category";
import PostCard from "./PostCard/postCard";
import "./style.css";
import posts from "./posts";
import PaginationSection from "./PaginationSection/paginationSection";
import LiveContest from "../Homepage/LiveContest/liveContest";
import WannaHelp from "../Homepage/WannaHelp/wannaHelp";
import GetMerch from "../Homepage/GetMerch/getMerch";
class ArtWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postGroup1: posts.slice(0, Math.floor(posts.length / 3)),
      postGroup2: posts.slice(
        Math.floor(posts.length / 3),
        Math.floor((2 * posts.length) / 3)
      ),
      postGroup3: posts.slice(
        Math.floor((2 * posts.length) / 3),
        Math.floor((3 * posts.length) / 3) + 1
      ),
    };
  }
  render() {
    return (
      <div className="container">
        <DCategory />
        <div className="row">
          <div className="col s12 l6 xl4">
            <div className="row">
              {this.state.postGroup1.map((post, index) => (
                <div className="col s12" key={index}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>
          <div className="col s12 l6 xl4">
            <div className="row">
              {this.state.postGroup2.map((post, index) => (
                <div className="col s12" key={index}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>
          <div className="col s12 l6 xl4">
            <div className="row">
              {this.state.postGroup3.map((post, index) => (
                <div className="col s12" key={index}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <PaginationSection />
        <div className="row">
          <div className="col s12 l6 xl4">
            <LiveContest />
          </div>
          <div className="col s12 l6 xl4">
            <WannaHelp />
          </div>
          <div className="col s12 l6 xl4">
            <GetMerch />
          </div>
        </div>
      </div>
    );
  }
}

export default ArtWork;
