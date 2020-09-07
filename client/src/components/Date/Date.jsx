import React, { Fragment } from "react";

export default ({ date, user }) => {
  const onClick = () => {
    console.log("click", date);
  }
  return (
    <div className="date" onClick={onClick}>
      {date}
    </div>
  );
}
