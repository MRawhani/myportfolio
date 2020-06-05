import React from "react";
import { Link } from "react-router-dom";

export default function MyButton(props) {
  const fullClassesAdded = props.buttonType + " " + props.utilClass;
  return props.value === "My Resume" ? (
    <a
      href="https://drive.google.com/file/d/1OPal8rp_BjxsyWv_25ZEELrIw9wjxBae/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className={` cta-btn cta-btn--${fullClassesAdded} `}
     
    >{props.value}</a>
  ) : (
    <Link to={props.linkTo ? props.linkTo : '' }>
      <input
        type="button"
        className={`btn cta-btn cta-btn--${fullClassesAdded} `}
        onClick={props.onClick}
        value={props.value}
      />
    </Link>
  );
}
