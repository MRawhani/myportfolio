import React, { Component } from "react";

import { Link, scroller } from "react-scroll";

import ReactTyped from "react-typed";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";

import Fade from "react-reveal/Fade";
export default class Hero extends Component {
  scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100
    });
  };
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
                      <Rotate>
                        <div className="avatar">
                          <img
                            className="avatar-img"
                            src={`${process.env.PUBLIC_URL}/images/me2.png`}
                            alt=""
                          />
                        </div>
                      </Rotate>
                      <div className="hero-content__text">
                        <Fade left>
                          <h1>Full Stack Web Developer</h1>
                        </Fade>
                        <Fade right>
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
                        </Fade>
                        <Fade>
                          <p>
                            A results oriented full stack web developer, who can
                            work from the beginning of planning, initiating and
                            formulating digital solutions, to implementing it
                            professionally.
                          </p>
                        </Fade>

                        <Fade bottom>
                          <Link
                            to="book__form"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                          >
                            <input
                              type="button"
                              className={`btn cta-btn cta-btn--green `}
                              value="Hire me"
                            />
                          </Link>
                        </Fade>
                        <Bounce left>
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
                              href="https://www.twitter.com/mohammedrawhani"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab icon fa-twitter"></i>
                            </a>
                            <a
                              href="https://api.whatsapp.com/send?phone=967775600067"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab icon fa-whatsapp"></i>
                            </a>
                            <a
                              href="https://www.instagram.com/mrawhani"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab icon fa-instagram"></i>
                            </a>
                            
                            <a
                              href="https://www.github.com/mrawhani"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab icon fa-github"></i>
                            </a>
                            <a
                              href="mailto:mohammedrawhani@gmail.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                             <i class="fas icon fa-envelope"></i>
                            </a>
                          </div>
                        </Bounce>
                      </div>
                    </div>
                  </div>
                  <div className="col-1">
                    <Slide right>
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
                    </Slide>
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
