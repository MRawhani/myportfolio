import React, { Component } from "react";

export default class BlogIndex extends Component {
  render() {
    return (
      <div
        className="blog"
        style={{
          background: `url(${process.env.PUBLIC_URL}/images/home-bg.jpg) no-repeat `,
          backgroundSize: "cover",
          backgroundPosition: "right"
        }}
      >
        <div className="blog__overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="blog__heading">
                <h1>Fresh Blogs</h1>
                <span className="blog__subheading">
                  Programming, travelling...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
