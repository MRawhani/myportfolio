import React, { Component } from "react";
import { connect } from "react-redux";

import { getTools } from "./../../actions";
import Headline from "../shared/Headline";

import Flip from "react-reveal/Flip";

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

  renderToolsIuse = tools => {
    return tools.map((tool, i) => (
      <Flip key={i}  bottom>
        <div className="tools__Wrapper">
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
      </Flip>
    ));
  };
  render() {
    const { tools } = this.props;
    return (
      <div className="tools">
        <Headline
          headline="My "
          coloredHeadline="Skills"
          lineColor="line-green"
          position="center"
        />
        {!tools.data || tools.data.length === 0 ? (
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
