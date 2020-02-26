import React, { Component } from "react";
import { connect } from "react-redux";

import { getBlogs } from "./../../actions";
import PageTop from "../shared/PageTop";
import BlogBlock from "../shared/BlogBlock";

class Blog extends Component {
 
      componentDidMount() {
        this.props.getBlogs(100);
      }
  renderBlogs = blogs => {
    return blogs.map((blog, i) => (
        <div className="">
            <BlogBlock page={true} key={i} blog={blog} />
        </div>
    ));
  };
  render() {
    return (
      <div className="page">
        <PageTop title="Blogs" color="blue" image='blogging2.svg'/>
        <div className="articles container">
          {!this.props.blogs.data || this.props.blogs.data.length === 0 ? (
            <h1>Loadin..</h1>
          ) : (
            <div className="">
              {this.renderBlogs(this.props.blogs.data)}
            </div>
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
