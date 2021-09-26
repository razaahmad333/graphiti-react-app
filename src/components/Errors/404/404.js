import { Link } from "react-router-dom";
import "./style.css";
function E404() {
  return (
    <div class="containers">
      <div class="errorname">404</div>
      <div class="errordetail">Page Not Found :(</div>
      <div class="errordetail">Work In Progress......</div>
      <div class="directionToHome">
        Take me back to : <Link to="/"> www.graphiti.in</Link>
      </div>
    </div>
  );
}

export default E404;
