import React, { Component } from "react";
import MyButton from "./MyButton";

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      menuList: ["Home", "Portfolio", "Blog", "CV", "Login"],
      mobileMenuClicked: false
    };
  }
  renderMenu = mobile => {
    return (
      <nav className={`navbar__${mobile ? "mobile--" : ""}items`}>
        <ul className={`navbar__${mobile ? "mobile--" : ""}items--list`}>
          {this.state.menuList.map((item, i) => (
            <li
              key={i}
              className={`navbar__${mobile ? "mobile--" : ""}items--list--item`}
            >
              <a
                href="#"
                className={`navbar__${
                  mobile ? "mobile--" : ""
                }items--list--item--link`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  menuButtonClick = e => {
    this.setState({
      mobileMenuClicked: !this.state.mobileMenuClicked
    });
  };
  render() {
    return (
      <React.Fragment>
        <header className="container navbar">
          <a href="#" className="navbar__logo">
            M Rawhani
          </a>
          {this.renderMenu(false)}
<div className="navbar__btn">          <MyButton value='contact me' buttonType='blue' utilClass='no-margin-bottom'/></div>
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
          <div class={`${this.state.mobileMenuClicked ?'modal--is-visible':'' } modal `}>
            <div class="modal--inner">
            { this.renderMenu(true)}
            </div>
            <div class="modal--close">X</div>
          </div>
        </header>
      
      </React.Fragment>
    );
  }
}
