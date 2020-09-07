import React from "react";

export default ({ date, user }) => {
  const onClick = () => {
    console.log("click", date);
  }
  return (
    <div className="activity" onClick={onClick}>
      <div className="temp"/>
    </div>
  );
}
