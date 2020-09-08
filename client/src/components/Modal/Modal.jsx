import React from "react";
import { closeModal } from "../../actions";

export default ({ modal, activity, user }) => {
  const json = JSON.stringify(modal, null, 2);
  const jsonActivity = JSON.stringify(activity, null, 2);
  const jsonUser = JSON.stringify(user, null, 2);


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
          <button className="toggle-button"onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}
