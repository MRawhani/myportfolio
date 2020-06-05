import React from "react";

export default function PageTop(props) {
  return (
    <div className={`page__top bg-top-${props.color}`}>
      <div className="container">
    
        <div className="page__top--content ">
          <h1>{props.title}</h1>
  <p >{props.desc}</p>
        </div>
        <div className="page__top--img">
    
        <img
          className="page__top--img--leftImage "
          src={`${process.env.PUBLIC_URL}/images/${props.image}`}
          alt="top portfolio"
        />
        
      </div>
      </div>
    </div>
  );
}
