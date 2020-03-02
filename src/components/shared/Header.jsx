import React, { Component } from "react";
import MyButton from "./MyButton";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      menuList: [
        { value: "Home", linkTo: "/", active: true },
        { value: "Portfolio", linkTo: "/portfolio", active: false },
        { value: "Blog", linkTo: "/blog", active: false },
        
       // { value: "Login", linkTo: "/login", active: false }
      ],
      mobileMenuClicked: false
    };
  }
  menuButtonClick = e => {
    
  
    this.setState({
      mobileMenuClicked: !this.state.mobileMenuClicked
    })
    
  };
  renderMenu = mobile => {
    return (
      <nav className={`navbar__${mobile ? "mobile--" : ""}items`}>
        <ul className={`navbar__${mobile ? "mobile--" : ""}items--list`}>
          {this.state.menuList.map((item, i) => (
            <li
              key={i}
              className={`navbar__${mobile ? "mobile--" : ""}items--list--item`}
              onClick={this.menuButtonClickFalse}
            >
              <Link
                to={item.linkTo}
                className={`navbar__${
                  mobile ? "mobile--" : ""
                }items--list--item--link`}
              >
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };


  menuButtonClickFalse = e => {

  
    this.setState({
      mobileMenuClicked: false
    })
  };
  onClick =()=>{
    console.log('gg');
    
  }
  render() {
    
    return (
      <React.Fragment>
        <header className="container navbar" style={{
            paddingBottom:`${this.state.mobileMenuClicked ? '25rem' : '1.9rem'} `
        }}
       
        >
          <Link to="/" className="navbar__logo">
          <img
                          className=""
                          src={`${process.env.PUBLIC_URL}/images/logo3.png`}
                          alt=""
                        />
          </Link>
          {this.renderMenu(false)}
          <div className="navbar__btn">
            {" "}
            <MyButton
              value="My Resume"
              buttonType="blue"
              utilClass="no-margin-bottom"
              
            />
          </div>
         <div  
          >
         <div
         
            onClick={this.menuButtonClick}
            className={` navbar__menu-toggle ${
              this.state.mobileMenuClicked
                ? "navbar__menu-toggle--menu-icon--close-x"
                : ""
            }`}
          >
            <div className="navbar__menu-toggle--middle"></div>
          </div>
          {/* /////////////////////////////////////// */}
          <div
          // tabIndex="0"
          // onBlur={()=>this.menuButtonClick()} 
            className={`${
              this.state.mobileMenuClicked ? "modal--is-visible" : ""
            } modal `}
          >
            <div className="modal--inner"  >{this.renderMenu(true)}</div>
            <div className="modal--close">X</div>
          </div>
         </div>
        </header>
      </React.Fragment>
    );
  }
}
