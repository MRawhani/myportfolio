import React from "react";
import { Link } from "react-router-dom";

export default function MyButton(props) {
  const fullClassesAdded = props.buttonType + " " + props.utilClass;
  return props.value === "Get My CV" ? (
    <a
      href="https://drive.google.com/open?id=1vGmzIPrzDJtBnXZO1ja69czgU_Hp6IV0"
      target="_blank"
      rel="noopener noreferrer"
      className={` cta-btn cta-btn--${fullClassesAdded} `}
     
    >{props.value}</a>
  ) : (
    <Link to={props.linkTo}>
      <input
        type="button"
        className={`btn cta-btn cta-btn--${fullClassesAdded} `}
        onClick={props.onClick}
        value={props.value}
      />
    </Link>
  );
}
