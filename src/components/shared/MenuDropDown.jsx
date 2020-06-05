import React, { Component, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

 function MenuDropDown(props) {
  const menuRef = useRef();
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const { open, array,closePopup, onClick } = props;
  const handleClick = (e) => {
    
    if (menuRef.current.contains(e.target)) {
      // Inside the event (handleClick) this.node.contains(e.target) will return true if whatever you are clicking is inside the “node” ref.
      
      return;
    }
    closePopup()
  };
 
  return (
    <ul
    ref={menuRef}

      className={`menu-dropdown ${
        open && "menu-dropdown__open"
      }`}
    >
      {array.map((elemen, i) => (
        <li key={i} id="menu-item-8047" className={`menu-dropdown__item `}>
          {/* <elemen.Component
            size="30px"
            className={`icon menu-dropdown__item--icon `}
          /> */}
          <Link className="" to={elemen.linkTo}>
            {elemen.value}
          </Link>
        </li>
      ))}
    </ul>
  );

}


export default MenuDropDown