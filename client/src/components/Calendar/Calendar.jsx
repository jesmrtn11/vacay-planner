import React from 'react';

import "./Calendar.scss";

const Calendar = ({ users }) => {

  const json = JSON.stringify(users, null, 2);

  const headers = ["name", "role", "startDate", "endDate"];

  let employees = [];

  // for (let user of users) {
  // employees.push({
  // ...user
  // });
  // }

  return (

  <div className="calendar">

  <h2>Calendar</h2>

  {/* <pre>{json}</pre> */}

  <form>
    <table className="calendar-table">

      <thead className="calendar-table__thead">
        <tr>
          {headers.map((header,index)=>(
            <th key={index}>{header.toUpperCase()}</th>
          ))}
        </tr>
      </thead>

      <tbody className="calendar-table__tbody">
        {users.map((user, index)=>(
          <tr key={index}>
          {headers.map((header,index) => (
            <td key={index}>
              {user[header]}
            </td>
          ))}
          </tr> 
        ))}
      </tbody>
      
    </table>
  </form>
  </div>
  );
};

export default Calendar;
