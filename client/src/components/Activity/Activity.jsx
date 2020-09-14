import React from "react";
import { setModal } from "../../actions";

export default ({ weekend, date, user, activity }) => {
  const onClick = () => {
    if (activity) {
      setModal({
        show: true,
        user: user.name,
        userId: user.id,
        role: user.role,
        project: user.project,
        startDate: activity.startDate,
        endDate: activity.endDate,
        type: activity.type
      });
    }
  }
  return (
    <div className={`activity ${weekend ? "weekend" : ""}`} onClick={onClick}>
      <div className={"dot" + (activity ? " " + activity.type : "")}/>
    </div>
  );
}
