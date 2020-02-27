import React, { Component } from "react";

export default class FormContact extends Component {
  render() {
    return (
     <React.Fragment>
      
        <div id="book__form" className="container book__form">
      
        <div className="b " style={{}}>
          <form
            method="POST"
            action="https://getform.io/f/e2926d2e-7b92-4c6b-af08-837230860494"
            className="form"
          >
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Full Name"
                required
                id="name"
              />
              <label htmlFor="name" className="form__label">
                Full Name
              </label>
            </div>
            <div className="form__group">
              <div className="row ">
                <div className="col-1">
                  <input
                    type="number"
                    name="number"
                    className="form__input form__input--half"
                    id="phone"
                    placeholder="Phone*"
                    required
                  />
                  <label htmlFor="phone" className="form__label">
                    Phone
                  </label>
                </div>
                <div className="col-1">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email*"
                    required
                    id="emailForm"
                  />
                  <label htmlFor="emailForm" className="form__label">
                    Email
                  </label>
                </div>
              </div>
            </div>
            <div className="form__group">
              <textarea
                name="messageContent"
                id="message"
                className="form__input"
                placeholder="Message"
                required
              ></textarea>
              <label htmlFor="message" className="form__label">
                Message
              </label>
            </div>
            <div className="form__group">
              <button formTarget="_blank" className="cta-btn cta-btn--green">
                Send &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
      <img
        className="form__svg"
        src={`${process.env.PUBLIC_URL}/images/contact.svg`}
        alt=""
      />
     </React.Fragment>
    );
  }
}
