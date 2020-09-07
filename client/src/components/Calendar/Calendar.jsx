import React from "react";
import { format, eachDayOfInterval } from "date-fns";
import { default as DateComponent } from "../Date";

const Calendar = ({ users }) => {
  let dates = eachDayOfInterval({
    start: new Date(2020, 8, 1),
    end:   new Date(2020, 8, 2)
  }).map(date => {
    return format(date, "yyyy-MM-dd");
  });

  return (
    <div className="calendar">
      <table>
        <tbody>
          {users.map(user => (
            <tr key={`user:${user.id}`}>
              <td>{user.name}</td>
              {dates.map(date => (
                <td key={`date:${user.id}:${date}`}>
                  <DateComponent date={date} user={user}/>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

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
