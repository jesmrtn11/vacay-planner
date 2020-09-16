import React from "react";
import { setModal } from "../../actions";

export default ({ weekend, user, activity }) => {
  const onClick = () => {
    if (activity) {
      setModal({
        show:      true,
        type:      activity.type,
        startDate: activity.startDate,
        endDate:   activity.endDate,
        user:      user.name,
        userId:    user.id,
        role:      user.role,
        project:   user.project
      });
    }
  }
  return (
    <div className={`activity ${weekend ? "weekend" : ""} ${activity ? " activity-" + activity.type : ""}`} onClick={onClick}>
    </div>
  );
}
