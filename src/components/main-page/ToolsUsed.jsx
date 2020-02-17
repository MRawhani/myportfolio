import React, { Component } from "react";
import Headline from "../shared/Headline";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
 

 
export default class ToolsUsed extends Component {
  constructor() {
    super();
    this.state = {
      tools: [
        { name: "React", percentage: 80, color: "#FF9597" },
        { name: "NodeJs", percentage: 70, color: "#4DDDBA" },
        { name: "Mongoose", percentage: 65, color: "#8693F2" },
        { name: "MongoDb", percentage: 50, color: "#FF9597" },
        { name: "Html5", percentage: 95, color: "#4DDDBA" },
        { name: "Css3", percentage: 95, color: "#8693F2" },
        { name: "Git", percentage: 80, color: "#02CC9C" },
        { name: "Redux", percentage: 75, color: "#3548CB" },
        { name: "Material Ui", percentage: 55, color: "#FF9597" },
        { name: "Bootstrap", percentage: 80, color: "#4DDDBA" },
        { name: "Jquery", percentage: 50, color: "#3548CB" },
        { name: "Aws", percentage: 30, color: "#8693F2" },
        { name: "Aws", percentage: 30, color: "#3548CB" }
      ]
    };
  }
  renderTools = () => {
    return this.state.tools.map((tool, i) => (
     
     <div style={{width:'125px',marginBottom:'12px'}}>
        <CircularProgressbar
        value={tool.percentage}
        text={`${tool.name}`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,
       
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',
       
          // Text size
          textSize: '12px',
       
          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,
       
          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',
       
          // Colors
          pathColor: `${tool.color}`,
          textColor: '#f88',
          trailColor: '#d6d6d6',
          backgroundColor: `${tool.color}`
        })}
      />
     </div>
      
    ));
  };
  render() {
    return (
      <div className="tools">
        <Headline
          headline="Tools "
          coloredHeadline="I use"
          lineColor="line-green"
        />
        <div className="toolsCircles">{this.renderTools()}</div>
      </div>
    );
  }
}
