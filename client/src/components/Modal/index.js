import Modal from "./Modal";
import "./Modal.scss";
import { connect } from "react-redux";
import { modal } from "../../reducers";

const mapState = (state) => ({
  modal: state.modal
});

export default connect(mapState)(Modal);


// const mapState = (state, { user, date }) => ({
//   activity: state.activities.find(activity => activity.userId == user.id && isDateBetween(date, activity.startDate, activity.endDate))
// });
