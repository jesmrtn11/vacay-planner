import React from "react";
import { closeModal } from "../../actions";

export default ({ modal }) => {
  return modal.show && (
    <div className="modal">
      <div>Modal</div>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}
