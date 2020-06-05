import React, { Component } from "react";
import MyButton from "./MyButton";
import { Link } from "react-router-dom";
import MenuDropDown from "./MenuDropDown";

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
      mobileMenuClicked: false,
    };
  }
  menuButtonClick = (e) => {
    this.setState({
      mobileMenuClicked: !this.state.mobileMenuClicked,
    });
  };
  renderMenu = (mobile) => {
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

  menuButtonClickFalse = (e) => {
    this.setState({
      mobileMenuClicked: false,
    });
  };
  onClick = () => {
    console.log("gg");
  };
  renderPopup = () => {
    return (
      <ul
        className={`menu-dropdown ${
          this.state.mobileMenuClicked && "menu-dropdown__open"
        }`}
      >
        {this.state.menuList.map((elemen, i) => (
          <li key={i} id="menu-item-8047" className={`menu-dropdown__item `}>
            {/* <elemen.Component
              size="30px"
              className={`icon menu-dropdown__item--icon `}
            /> */}
            <Link className="" to={elemen.linkTo}>
              {elemen.value}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  render() {
    return (
      <React.Fragment>
        <header
          className="container container__no-hidden navbar"
          style={{
            paddingBottom: `${
              this.state.mobileMenuClicked ? "1.9rem" : "1.9rem"//it was 25 rem when i used modal
            } `,
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
          <div className="position-relative">
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
      
            <MenuDropDown open={this.state.mobileMenuClicked} 
            array={this.state.menuList}
            closePopup={this.menuButtonClickFalse}
            />
            {/* /////////////////////////////////////// */}
            {/* <div
              // tabIndex="0"
              // onBlur={()=>this.menuButtonClick()}
              className={`${
                this.state.mobileMenuClicked ? "modal--is-visible" : ""
              } modal `}
            >
              <div className="modal--inner">{this.renderMenu(true)}</div>
              <div className="modal--close">X</div>
            </div>
          */};
          </div>

        </header>
      </React.Fragment>
    );
  }
}
