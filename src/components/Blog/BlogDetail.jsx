import React, { Component } from "react";
import { connect } from "react-redux";
import { getBlogById } from "./../../actions";
import PageTop from "../shared/PageTop";
class BlogDetail extends Component {
  componentDidMount() {
    this.props.getBlogById(this.props.match.params.id);
  }
  render() {
    
    const { blog } = this.props;
    return (
      <div>
        <PageTop title="" color="green" image="undraw_files_6b3d.svg" />
        <div className="container blogDetail">
          <div className="blogDetail__row">
            {blog.data ? (
              <div className="blogDetail__content">
                <h1>{blog.data.title}</h1>
                <p className="blogDetail__content--info">
                  {" "}
                  <img
                    className=""
                    src={`${process.env.PUBLIC_URL}/images/blogger.svg`}
                    alt=""
                  />{" "}
                  / by{" "}
                  {blog.data.ownerId
                    ? blog.data.ownerId.username
                    : "Moahmmed rawhani"}{" "}
                  / {blog.data.createdAt}{" "}
                </p>
                <img src={`${blog.data.image}`} alt="blog"/>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.data ? blog.data.content : ""
                  }}
                />
              </div>
            ) : (
              "dzbLoadingz"
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blog: state.blog
});

const mapDispatchToProps = {
  getBlogById
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
