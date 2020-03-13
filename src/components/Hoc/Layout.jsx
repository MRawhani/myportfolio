import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../shared/Header";

class Layout extends Component {
 componentDidMount(){
   console.log(process.env);
   
 }
  render() {
    return (
      <div className='site-cover'>
        <Header />
        <div className="">{this.props.children}</div>
        <img
          className="top-cover-img"
          src={`${process.env.PUBLIC_URL}/images/side_top.svg`}
          alt=""
        />
        <img
          className="bottom-cover-img"
          src={`${process.env.PUBLIC_URL}/images/side_bottom.svg`}
          alt=""
        />
       <footer style={{
         textAlign:'center',
         padding:'10px',
        
        
       }}>&copy; <strong>mohammedrawhani@gmail.com</strong></footer>
      </div>
    );
  }
}
export default connect(null)(Layout);
