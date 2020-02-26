import React, { Component } from "react";
import MyButton from "./MyButton";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();

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
  renderMenu = mobile => {
    return (
      <nav className={`navbar__${mobile ? "mobile--" : ""}items`}>
        <ul className={`navbar__${mobile ? "mobile--" : ""}items--list`}>
          {this.state.menuList.map((item, i) => (
            <li
              key={i}
              className={`navbar__${mobile ? "mobile--" : ""}items--list--item`}
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

  menuButtonClick = e => {
    this.setState({
      mobileMenuClicked: !this.state.mobileMenuClicked
    });
  };
  render() {
    return (
      <React.Fragment>
        <header className="container navbar">
          <Link to="/" className="navbar__logo">
            M Rawhani
          </Link>
          {this.renderMenu(false)}
          <div className="navbar__btn">
            {" "}
            <MyButton
              value="Get My CV"
              buttonType="blue"
              utilClass="no-margin-bottom"
              
            />
          </div>
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
            className={`${
              this.state.mobileMenuClicked ? "modal--is-visible" : ""
            } modal `}
          >
            <div className="modal--inner">{this.renderMenu(true)}</div>
            <div className="modal--close">X</div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
