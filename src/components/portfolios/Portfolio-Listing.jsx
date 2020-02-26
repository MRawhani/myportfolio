import React, { Component } from "react";

export default class PortfolioListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          title: "Madinat Sanaa",
          type: "Full Stack Web",
          image: "",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo facilis, similique ab et possimus fugiat iure voluptas!",
          tools: ["React", "NodeJS", "MongoDb"],
          link: "https://www.google.com/"
        },
        {
          title: "Travel Agency",
          type: "Front End Web",
          image: "",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo facilis, similique ab et possimus fugiat iure voluptas!",
          tools: ["React", "NPM", "MongoDb"],
          link: "https//www.google.com"
        },
        {
          title: "Language Pedia",
          type: "Full Stack Web",
          image: "",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui    quo facilis, similique ab et possimus fugiat iure voluptas!",
          tools: ["React", "NodeJS", "MongoDb"],
          link: "https//www.google.com"
        }
      ]
    };
  }
  renderColor = i => {
    const nums = [1, 2, 3];
    nums.forEach(num => {
      if (i - num === 3) {
        return num;
      }
    });
  };
  renderColorClassname = i => {
   
    let num = i;
    if (!(i <= 3)) {
      num = this.renderColor(i);
    }
    if (num === 1) return { first: "background-green", second: "btn-orange" };
    else if (num === 2)
      return { first: "background-orange", second: "btn-green" };
    else if (num === 3)
      return { first: "background-blue", second: "btn-green" };
  };
  renderList = (list) => {
   
    //const { list } = this.props;
    return list.map((item, i) => (
      <div
        key={i}
        className={`row portfolio__item ${
          this.renderColorClassname(i + 1).first
        }`}
      >
        <div className="col-1 no-margin-bottom col-2">
          <div className="portfolio__item--content ">
            <h2 className="portfolio__item--content__type">{item.type}</h2>
            <p className="portfolio__item--content__desc">{item.description}</p>
            <p className="portfolio__item--content__tools">
              <strong>Tools I used </strong>{" "}
              <span>{item.tools.map((tool, i) => tool + ", ")}</span>
            </p>
          </div>
        </div>

        <div className="col-1 no-margin-bottom">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__item--link"
          >
            <img
              className=" portfolio__item--link__img"
              src={`${item.image}`}
              alt=""
            />
            <h1
              className={`portfolio__item--link__title ${
                this.renderColorClassname(i + 1).second
              }`}
            >
              {item.title}
            </h1>
          </a>
        </div>
      </div>
    ));
  };
  render() {
    const { list } = this.props;
    return (
      <div className=" page__portfolio">
        <div className="container">
          {!list || list.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            <div className="portfolio">{this.renderList(list)}</div>
          )}
        </div>
      </div>
    );
  }
}
