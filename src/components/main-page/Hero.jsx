import React, { Component } from "react";
import ReactTyped from "react-typed";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MyButton from "../shared/MyButton";

export default class Hero extends Component {
 
  render() {
    return (
      <div className="cover">
        <div className="main-section">
          <div
            className="background-image"
            style={{
              background: `url(${process.env.PUBLIC_URL}/images/background.png) no-repeat`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            <div className="hero-section">
              <div className="container">
                <div className="row">
                  <div className="col-1">
                    <div className="hero-content">
                      <div className="avatar">
                        <img
                          className="avatar-img"
                          src={`${process.env.PUBLIC_URL}/images/me.png`}
                          alt=""
                        />
                      </div>
                      <div className="hero-content__text">
                        <h1>Full Stack Web Developer</h1>
                        <h3>
                          {" "}
                          Work with
                          <ReactTyped
                            loop
                            typeSpeed={50}
                            backSpeed={50}
                            strings={[
                              " React",
                              " NodeJs",
                              " Mongoose",
                              " ES6",
                              " Redux",
                              " Html5",
                              " Css3"
                            ]}
                            smartBackspace
                            shuffle={false}
                            backDelay={1}
                            fadeOut={false}
                            fadeOutDelay={100}
                            loopCount={0}
                            showCursor
                            cursorChar="|"
                          />
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Quam a neque nesciunt veniam eaque, illum
                          officia autem expedita
                        </p>

                        <MyButton
                          buttonType="green"
                          value="Hire me"
                          linkTo="/contact"
                        />
                        <div className="hero-content__social">
                          <div></div>
                          <a
                            href="https://www.facebook.com/mrawhani"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab icon fa-facebook-f"></i>
                          </a>
                          <a
                            href="https://www.facebook.com/mrawhani"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab icon fa-twitter"></i>
                          </a>
                          <a
                            href="https://www.facebook.com/mrawhani"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab icon fa-whatsapp"></i>
                          </a>
                          <a
                            href="https://www.facebook.com/mrawhani"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab icon fa-instagram"></i>
                          </a>
                          <a
                            href="https://www.facebook.com/mrawhani"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab icon fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="svg-group">
                      <Carousel
                        showThumbs={false}
                        autoPlay={true}
                        emulateTouch={true}
                        showStatus={false}
                        infiniteLoop={true}
                        cancelable={true}
                      >
                        <div>
                          <img
                            className="svg-group__img"
                            src={`${process.env.PUBLIC_URL}/images/code-thinking2.svg`}
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="svg-group__img"
                            src={`${process.env.PUBLIC_URL}/images/code-thinking.svg`}
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="svg-group__img"
                            src={`${process.env.PUBLIC_URL}/images/code-thinking3.svg`}
                            alt=""
                          />
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
