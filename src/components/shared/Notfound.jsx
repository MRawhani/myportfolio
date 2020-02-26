import React from "react";

export default function Notfound() {
  return (
    <div
      className="container"
      style={{
        textAlign: "center"
      }}
    >
      <img
        className="svg-group__img"
        src={`${process.env.PUBLIC_URL}/images/undraw_empty_xct9.svg`}
        alt="not found"
        style={{
          width: "50%",
          height: "50%"
        }}
      />
      <p>Page Not found</p>
    </div>
  );
}
