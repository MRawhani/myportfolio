import React from 'react'

export default function Headline(props) {
  const center = props.position ==='center' ? true :false
    return (
       <React.Fragment>
            <h1 className="text-block__headline" style={{
              textAlign: center &&'center'
            }}>
        {" "}
        {props.headline}{" "}
        <span className="text-block__coloredHeadline">
          {props.coloredHeadline}
        </span>
      </h1>
       <div className={props.lineColor} style={{
              margin: center && '1rem auto'
            }}></div>
       </React.Fragment>
    )
}
