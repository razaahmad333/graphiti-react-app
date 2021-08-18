import React from "react";
import AlreadyEnded from "./AlreadyEnded/alreadyEnded";
import LiveRightNow from "./LiveRightNow/liveRightNow";
import UpcomingEvent from "./UpcomingEvent/upcomingEvent";
class Contest extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="container">
          <h2 class="center">Contest</h2>
          <div className="row">
            <div className="col s12 l8">
              <LiveRightNow />
              <AlreadyEnded />
            </div>
            <div className="col s12 l4">
              <UpcomingEvent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contest;
