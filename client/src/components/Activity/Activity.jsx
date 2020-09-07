import React from "react";
import { setModal } from "../../actions";

export default ({ date, user, activity }) => {
  const onClick = () => {
    if (activity) {
      setModal({
        show: true,
        userId: user.id
      });
    }
  }
  return (
    <div className="activity" onClick={onClick}>
      <div className={"temp" + (activity ? " " + activity.type : "")}/>
    </div>
  );
}
