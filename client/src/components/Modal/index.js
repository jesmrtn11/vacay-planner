import Modal from "./Modal";
import { connect } from "react-redux";

const mapState = (state) => ({
  modal: state.modal
});

export default connect(mapState)(Modal);
