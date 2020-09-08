import React from "react";
import { closeModal } from "../../actions";
import Button from "../Button";

export default ({ modal }) => {
  const json = JSON.stringify(modal, null, 2);

  return modal.show && (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <h2>Employee</h2>
          <p>Name: {modal.user}</p>
          <p>Role: {modal.role}</p>
          <p>Current project: {modal.project}</p>
          <p>Type: {modal.type}</p>
          <p>Start date: {modal.startDate}</p>
          <p>End date: {modal.endDate}</p>
        </div>
        <div className="modal-footer">
          <Button type="success" onClick={closeModal}>Close</Button>
        </div>
      </div>
    </div>
  );
}
