import Modal from "./Modal";
import "./Modal.scss";
import { connect } from "react-redux";
import { modal } from "../../reducers";

const mapState = (state) => ({
  modal: state.modal
});

export default connect(mapState)(Modal);
