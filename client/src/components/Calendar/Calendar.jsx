import React from 'react';
import Day from '../Day/Day';
import "./Calendar.scss";

const Calendar = ({ users }) => {

  const json = JSON.stringify(users, null, 2);

  return (

  <div className="calendar">

  <h2>Calendar</h2>

  {/* <pre>{json}</pre> */}

  <form className="calendar-table wrapper">
    <table className="calendar-table">

      <thead className="calendar-table__thead">
        <tr>
          <th></th>
          <th className="month" colSpan="30">OCTOBER</th>
        </tr>
        <tr>
          <th>NAME</th>
          {Array(30).fill().map((a, i) => {
              return (
                <th key={`number:${i}`}>{i + 1}</th>
              )
            })}
        </tr>
      </thead>

      <tbody className="calendar-table__tbody">
        {users.map((user, index)=>(
          <tr key={`user:${index}`}>
            <td className="calendar-table__name">{user.name}</td>
            {Array(30).fill().map((a, i) => {
              return (
                <Day key={`day:${i}`} date={i + 1} />
              )
            })}
          </tr>
        ))}
      </tbody>

    </table>

  </form>
  </div>
  );
};

export default Calendar;
