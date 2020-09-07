import React from "react";

export default ({ date, user, activity }) => {
  const onClick = () => {
    console.log("click", date);
  }
  return (
    <div className="activity" onClick={onClick}>
      <div className={"temp" + (activity ? " " + activity.type : "")}/>
    </div>
  );
}
