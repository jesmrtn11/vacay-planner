import Calendar from './Calendar';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps)(Calendar);
