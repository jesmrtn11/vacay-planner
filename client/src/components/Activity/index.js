import Activity from "./Activity";
import "./Activity.scss";
import { connect } from "react-redux";

const isDateBetween = (date, start, end) => {
  return date >= start && date <= end;
}

const mapState = (state, { user, date }) => ({
  activity: state.activities.find(activity => activity.userId == user.id && isDateBetween(date, activity.startDate, activity.endDate))
});

export default connect(mapState)(Activity);
