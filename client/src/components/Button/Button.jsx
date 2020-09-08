import React from "react";

export default ({ type, ...props}) => {
  let cssClass = [];
  if (type) cssClass.push(type);

  cssClass = [
    "button",
    ...cssClass
  ];
  return (
    <button className={cssClass.join(" ")} {...props}>
      {props.children}
    </button>
  );
}
