import React from "react";
import { closeModal } from "../../actions";
import { XCircleFillIcon } from "@primer/octicons-react";
import Button from "../Button";

export default ({ modal }) => {
  const json = JSON.stringify(modal, null, 2);

  return modal.show && (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <div className="icon right" onClick={closeModal}>
            <XCircleFillIcon size={24}/>
          </div>
          <h2>Employee info</h2>
          <p>Name: {modal.user}</p>
          <p>Role: {modal.role}</p>
          <p>Current project: {modal.project}</p>
          <p>Type: {modal.type}</p>
          <p>Start date: {modal.startDate}</p>
          <p>End date: {modal.endDate}</p>
        </div>
      </div>
    </div>
  );
}
