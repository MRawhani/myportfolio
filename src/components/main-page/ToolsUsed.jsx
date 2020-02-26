import React, { Component } from "react";
import { connect } from "react-redux";

import { getTools } from "./../../actions";
import Headline from "../shared/Headline";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

class ToolsUsed extends Component {
  constructor() {
    super();
    this.state = {
      tools: []
    };
  }
  componentDidMount() {
    this.props.getTools();
  }
  renderTools = () => {
   
    return this.props.tools.map((tool, i) => (
      <div key={i} style={{ width: "125px", marginBottom: "12px" }}>
        <CircularProgressbar
          value={tool.percentage}
          text={`${tool.name}`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",

            // Text size
            textSize: "12px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `${tool.color}`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: `${tool.color}`
          })}
        />
      </div>
    ));
  };
  renderToolsIuse = (tools) => {
   
    return tools.map((tool, i) => (
      <div key={i} className="tools__Wrapper">
        <img src={`${tool.image}`} alt="react tool" />
        <h1 className="tools__Wrapper__title">{tool.name}</h1>
        <div
          style={{
            height: "3px",
            width: `${tool.percentage}%`,
            background: `${tool.color}`,
            alignSelf: "flex-start"
          }}
        ></div>
      </div>
    ));
  };
  render() {
    const { tools } = this.props;
    return (
      <div className="tools">
        <Headline
          headline="Tools "
          coloredHeadline="I use"
          lineColor="line-green"
          position="center"
        />
        {tools.data.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <div className="toolsCircles">{this.renderToolsIuse(tools.data)}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.tools
});

const mapDispatchToProps = {
  getTools
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolsUsed);
