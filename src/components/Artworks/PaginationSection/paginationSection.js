import React, { Component } from "react";
import "./style.css";
class PaginationSection extends Component {
  componentDidMount() {
    for (let li of Array.from(
      document.querySelectorAll(".pagination")[0].children
    ).slice(1, 6)) {
      li.onclick = () => {
        for (let l of Array.from(
          document.querySelectorAll(".pagination")[0].children
        ).slice(1, 6)) {
          l.className = "waves-effect";
        }
        li.className = "waves-effect active";
      };
    }
  }
  render() {
    return (
      <div>
        <div class="divider"></div>
        <div id="paginationSection">
          <ul class="pagination">
            <li class="chevrn">
              <a href="#!">
                <i class="material-icons">chevron_left</i>
              </a>
            </li>
            <li class="waves-effect">
              <a href="#!">1</a>
            </li>
            <li class="waves-effect active">
              <a href="#!">2</a>
            </li>
            <li class="waves-effect">
              <a href="#!">3</a>
            </li>
            <li class="waves-effect">
              <a href="#!">4</a>
            </li>
            <li class="waves-effect">
              <a href="#!">5</a>
            </li>
            <li class="waves-effect chevrn">
              <a href="#!">
                <i class="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>
        <div class="divider" id="bottomLine"></div>
      </div>
    );
  }
}

export default PaginationSection;
