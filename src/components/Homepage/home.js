import React from "react";
import "./style.css";
import GetMerch from "./GetMerch/getMerch";
import LiveContest from "./LiveContest/liveContest";
import SkillCard from "./SkillCard/skillCard";
import Slideshow from "./Slideshow/slideshow";
import WannaHelp from "./WannaHelp/wannaHelp";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Slideshow />
        <div className="container">
          <div className="row">
            <div className="col s12 l8">
              <div className="row">
                <div className="col s12 m6">
                  <SkillCard
                    skillName={"3D"}
                    headColorClass={"d3"}
                    skillDescription={"this is 3D description hello guyzz"}
                  />
                </div>
                <div className="col s12 m6">
                  <SkillCard
                    skillName={"2D"}
                    headColorClass={"d2"}
                    skillDescription={"this is 2D description hello guyzz"}
                  />
                </div>
                <div className="col s12 m6">
                  <SkillCard
                    skillName={"Video Editing"}
                    headColorClass={"ve"}
                    skillDescription={
                      "this is video editing description hello guyzz"
                    }
                  />
                </div>
                <div className="col s12 m6">
                  <SkillCard
                    skillName={"Animation"}
                    headColorClass={"ani"}
                    skillDescription={
                      "this is animation description hello guyzz"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col s12 l4">
              <div className="row">
                <div className="col s12 m6 l12">
                  <LiveContest />
                </div>
                <div className="col s12 m6 l12">
                  <WannaHelp />
                </div>
                <div className="col s12 m6 l12">
                  <GetMerch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
