import React from "react";
import TextBlock from "../shared/TextBlock";
import MyButton from "./../shared/MyButton";
import ToolsUsed from "./ToolsUsed";

import Fade from "react-reveal/Fade";
export default function About() {
  return (
    <div className="container about">
      <div className="row">
        <Fade left>
          <div className="col-1 about__left">
            <img
              className="about__left--img svg-group__img"
              src={`${process.env.PUBLIC_URL}/images/about.svg`}
              alt=""
            />
            {/* <div className="border-fancy"></div> */}
          </div>
        </Fade>
        <Fade right>
          <div className="col-1 about__right">
            <TextBlock
              headline="About"
              coloredHeadline="Me"
              lineColor="orange-line"
              sub="I value honesty, obtaining agreed-results and details-focused oreintation"
              desc="Energetic hardworking and results-oriented web developer with considerable training and experience in Web site development in all stages of design, coding, and manipulating of Web applications, creating and maintaining functional, attractive, and responsive websites. Clear understanding of modern technologies and best design practices. Experienced with Html, Css, React, NodeJs and databases. Great attention to details and focus on raising UX scores and customer retention."
            />
            <MyButton buttonType="green" value="Get My CV" />
          </div>
        </Fade>
      </div>

      <ToolsUsed />
    </div>
  );
}
