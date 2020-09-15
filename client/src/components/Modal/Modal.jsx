import React, { useState } from "react";
import { closeModal } from "../../actions";
import { XCircleFillIcon } from "@primer/octicons-react";
import { format } from "date-fns";
import Button from "../Button";

import Dropdown from "../Dropdown";
import CalendarMonth from "../CalendarMonth";
import { PersonIcon, ListUnorderedIcon } from "@primer/octicons-react";
import { startOfMonth } from "date-fns/esm";

const sendRequestHandle = () => {
  console.log("You clicked submit request!");
}

const types = {
  VACATION: "VACATION",
  SICK_LEAVE: "SICK_LEAVE",
  PARENTAL_LEAVE: "PARENTAL_LEAVE",
  SERVICE_DAY: "SERVICE_DAY"
};

export default ({ modal }) => {
  const [type, setType] = useState(types.VACATION);
  const json = JSON.stringify(modal, null, 2);

  return modal.show && (
    <div className="modal-overlay">
      <div className="modal container">
        <div className="modal-content">
          <div className="row">
            <div className="col-xs-12">
              <div className="icon right" onClick={closeModal}>
                <XCircleFillIcon size={24}/>
              </div>
              <h3><PersonIcon size={24} /> Employee info</h3>
              <p>Name: {modal.user}</p>
              <p>UserId: {modal.userId}</p>
              <p>Role: {modal.role}</p>
              <p>Project: {modal.project}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              <h3><ListUnorderedIcon size={24} />Absence Details</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6">
              <Dropdown title="Please select task" value={type} onChange={e => setType(e.target.value)}>
                <option value={types.VACATION}>Vacation</option>
                <option value={types.SICK_LEAVE}>Sick Leave</option>
                <option value={types.PARENTAL_LEAVE}>Parental leave</option>
                <option value={types.SERVICE_DAY}>Non-compensated absence</option>
              </Dropdown>
            </div>
          <div className="col-xs-6">
            <div className="field">
              <label><span>Start Date:  </span><input className="input" type="date" placeholder="Start date" onfocus="(this.type='date')"/></label>
            </div>
            <div className="field">
              <label><span>End Date:  </span><input className="input" type="date" placeholder="End date" onfocus="(this.type='date')"/></label>
            </div>
            <div className="field">
              <label><span>Description:  </span><textarea className="textarea" name="textarea" placeholder="Note" /></label>
            </div>
            <div className="field">
              <label>Balance Remain: Your remaining vacation balance will be <b>24 hrs</b></label>
            </div>

            <div className="buttons">
              <Button type="secondary" onClick={closeModal}>CANCEL</Button>
              <Button type="success" onClick={sendRequestHandle}>SUBMIT</Button>
            </div>
          </div>
        </div>
      
        </div>
        
      </div>
 

    </div>
  );
}
