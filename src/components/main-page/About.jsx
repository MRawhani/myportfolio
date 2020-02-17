import React from "react";
import TextBlock from "../shared/TextBlock";
import MyButton from "./../shared/MyButton";
import ToolsUsed from "./ToolsUsed";
export default function About() {
  return (
    <div className="container about">
      <div className="row">
        <div className="col-1 about__left">
          <img
            className="about__left--img svg-group__img"
            src={`${process.env.PUBLIC_URL}/images/about.svg`}
            alt=""
          />
   
        </div>
        <div className="col-1 about__right">
          <TextBlock
            headline="About"
            coloredHeadline="me"
            lineColor="orange-line"
            sub="A passionate results oreinted Software Engineer"
            desc="A passionate results 
            oreinted Software Engineer A passionate results
             oreinted Software EngineerA passionate results
              oreinted Software EngineerA passionate results
               oreinted Software EngineerA passionate results
               oreinted Software EngineerA passionate results
                oreinted Software EngineerA passionate results
                 oreinted Software EngineerA passionate results
                oreited Software Engineer"
          />
          <MyButton buttonType="green" value="Get My CV" />
        </div>
      </div>
   
        <ToolsUsed />
    </div>
  );
}
