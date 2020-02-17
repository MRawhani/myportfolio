import React from 'react'

export default function Headline(props) {
    return (
       <React.Fragment>
            <h1 className="text-block__headline">
        {" "}
        {props.headline}{" "}
        <span className="text-block__coloredHeadline">
          {props.coloredHeadline}
        </span>
      </h1>
       <div className={props.lineColor}></div>
       </React.Fragment>
    )
}
