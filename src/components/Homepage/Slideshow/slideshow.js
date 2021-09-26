import React, { Component } from "react";
import caro1 from "../../../images/caro1.jpg";
import caro2 from "../../../images/caro2.jpg";
import caro3 from "../../../images/caro3.jpg";
import caro4 from "../../../images/caro4.png";
import M from "materialize-css";
class Slideshow extends Component {
  componentDidMount() {
    const carousel = document.querySelector("#carousel1");
    const instance = M.Carousel.init(carousel, {
      fullWidth: true,
      indicators: true,
    });
    let count = 0;

    setInterval(() => {
      count++;
      instance.set(count % 4);
    }, 3000);
  }
  render() {
    return (
      <div>
        <div className="carousel carousel-slider center" id="carousel1">
          <div className="carousel-item white-text" href="#one!">
            <img src={caro1} alt="graphic ArtWorks" />
          </div>
          <div className="carousel-item white-text" href="#two!">
            <img src={caro2} alt="graphic ArtWorks" />
          </div>
          <div className="carousel-item white-text" href="#three!">
            <img src={caro3} alt="graphic ArtWorks" />
          </div>
          <div className="carousel-item white-text" href="#four!">
            <img src={caro4} alt="graphic design" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
