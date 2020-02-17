import React from "react";

export default function MyButton(props) {
   const fullClassesAdded = props.buttonType+' '+props.utilClass
  return (
    <input
      type="button"
      className={`btn cta-btn cta-btn--${fullClassesAdded} `}
      onClick={props.onClick}
      value={props.value}
    />
  );
}