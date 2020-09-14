import React, { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import CalendarMonth from "../CalendarMonth";
import { PersonIcon, ListUnorderedIcon } from "@primer/octicons-react";

const sendRequestHandle = () => {
  console.log("You clicked submit request!");
}

const types = {
  VACATION: "VACATION",
  SICK_LEAVE: "SICK_LEAVE",
  PARENTAL_LEAVE: "PARENTAL_LEAVE",
  SERVICE_DAY: "SERVICE_DAY"
};

export default () => {
  const [type, setType] = useState(types.VACATION);

  return (

    <div className="timelog">
      <div class="container">
        <div className="col-xs-12">
          <h2 style={{justifyContent: "center"}}>Time tracker </h2>
        </div>

        <div className="row">
          <div class="col-xs-6">
            <h3><PersonIcon size={24} />Employee Info</h3>
            <table className="table-employee">
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Id</th>
                  <th>Current Vacation Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jesica Martin</td>
                  <td>70001</td>
                  <td>45 hrs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-xs-6">
            <CalendarMonth />
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <h3><ListUnorderedIcon size={24} />Absence Details</h3>
          </div>

          <div class="col-xs-6">
            <Dropdown title="Please select task" value={type} onChange={e => setType(e.target.value)}>
              <option value={types.VACATION}>Vacation</option>
              <option value={types.SICK_LEAVE}>Sick Leave</option>
              <option value={types.PARENTAL_LEAVE}>Parental leave</option>
              <option value={types.SERVICE_DAY}>Non-compensated absence</option>
            </Dropdown>
          </div>
          <div class="col-xs-6">
            <div className="field">
              <label><span>Start Date:  </span><input className="input" type="date" placeholder="Start date" onfocus="(this.type='date')"/></label>
            </div>
            <div className="field">
              <label><span>End Date:  </span><input className="input" type="date" placeholder="End date" onfocus="(this.type='date')"/></label>
            </div>
            <div className="field">
              <label><span>Total hours:  </span><input className="input" type="text" /></label>
            </div>
            <div className="field">
              <label><span>Description:  </span><textarea className="textarea" name="textarea" placeholder="Note" /></label>
            </div>
            <div className="field">
              <label>Balance Remain: Your remaining vacation balance will be <b>24 hrs</b></label>
            </div>

            <div className="buttons">
              <Button type="secondary" onClick={sendRequestHandle}>CANCEL</Button>
              <Button type="success" onClick={sendRequestHandle}>SUBMIT</Button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
