import React from "react";
import Headline from "./Headline";

export default function TextBlock(props) {
  return (
    <div className="text-block">
      <Headline
        headline={props.headline}
        coloredHeadline={props.coloredHeadline}
        lineColor={props.lineColor}
      />
     
      <h3 className="text-block__sub">{props.sub}</h3>
      <p className="text-block__desc">{props.desc}</p>
    </div>
  );
}
