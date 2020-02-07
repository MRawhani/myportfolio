import React from "react";

export default function MyButton(props) {
    debugger
    const classname= props.classNames ? props.classNames : '';
    const fullClassesAdded = props.buttonType+' '+props.utilClass
  return (
    <input
      type="button"
      className={`btn cta-btn cta-btn--${fullClassesAdded} `}
      
      value={props.value}
    />
  );
}
