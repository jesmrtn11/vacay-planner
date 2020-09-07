import Calendar from "./Calendar";
import "./Calendar.scss";
import { connect } from "react-redux";

const mapState = (state) => ({
  users: state.users
});

export default connect(mapState)(Calendar);
