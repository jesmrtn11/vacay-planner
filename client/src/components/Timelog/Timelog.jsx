import React from "react";
import Button from "../Button";

const sendRequestHandle = () => {
  console.log("You clicked submit request!");
}

export default () => {
  return (
    <div className="timelog">
      <h2>Time tracker </h2>
      <Button type="success" onClick={sendRequestHandle}>+ Add Request</Button>

      <h3>Employee Info</h3>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Current Vacation Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jesica Martin</td>
            <td>45 hrs</td>
          </tr>
        </tbody>
      </table>

      <h3>Vacation Details</h3>
      <div className="field">
        <label>Start Date: <input type="text" /></label>
      </div>
      <div className="field">
        <label>End Date: <input type="text" /></label>
      </div>
      <div className="field">
        <label>Total hours: <input type="text" /></label>
      </div>
      <div className="field">
        <label>Description <input type="textarea" /></label>
      </div>
      <div className="field">
        <label>Balance Remain: Your remaining vacation balance will be 24hrs</label>
      </div>

      <Button type="success" onClick={sendRequestHandle}>Save & Close</Button>
      <Button type="secondary" onClick={sendRequestHandle}>Cancel</Button>
    </div>
  );
}
