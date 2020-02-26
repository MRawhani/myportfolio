import React, { Component } from "react";
import { connect } from "react-redux";

import { getBlogs } from "./../../actions";
import TextBlock from "../shared/TextBlock";
import MyButton from "../shared/MyButton";
import BlogBlock from "../shared/BlogBlock";

class BlogLimit extends Component {
 
  componentDidMount() {
    this.props.getBlogs(2);
  }
  renderBlogs = (blogs) => {
    return blogs.map((blog,i)=>(
        <BlogBlock key={i} blog={blog}/>
    ));
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            {" "}
            <TextBlock
              headline="My "
              coloredHeadline="Blogs"
              lineColor="orange-line"
              sub="I Write, Think, and Do. "
              desc="A passionate results nate results oreited Software Engineer"
            />
            <MyButton buttonType="blue" value="See All Blogs" linkTo="/blog" />
          </div>
          <div className="col-3">
            {this.props.blogs.data.length === 0 ? (
              <h1>Loadin..</h1>
            ) : (
              <div className='blog__list'>{this.renderBlogs(this.props.blogs.data)}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs
});

const mapDispatchToProps = {
  getBlogs
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogLimit);
