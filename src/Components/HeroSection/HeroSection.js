import React from "react";
import "../../App";
import { Button } from "../Button/Button";
import "./HeroSection.css";

function HeroSection(props) {
  return (
    <>
      <div className="hero-container">
        <video className="video" src={props.videosrc} autoPlay loop muted />
        <img src={props.imgsrc} alt={props.imgalt} />
        <h1>{props.herotitle}</h1>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            buttonLink={props.btnlink}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
