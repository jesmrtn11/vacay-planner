import Activity from "./Activity";
import "./Activity.scss";
import { parseISO, isWithinInterval } from "date-fns";
import { connect } from "react-redux";

const isDateBetween = (date, start, end) => {
  date  = parseISO(date);
  start = parseISO(start);
  end   = parseISO(end);
  return isWithinInterval(date, {
    start,
    end
  });
}

const mapState = (state, { user, date }) => ({
  activity: state.activities.find(activity => activity.userId == user.id && isDateBetween(date, activity.startDate, activity.endDate))
});

export default connect(mapState)(Activity);
