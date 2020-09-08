import React from "react";
import { format, eachDayOfInterval } from "date-fns";
import Activity from "../Activity";

const Calendar = ({ users }) => {
  let dates = eachDayOfInterval({
    start: new Date(2020, 8, 1),
    end:   new Date(2020, 8, 30)
  }).map(date => {
    return format(date, "yyyy-MM-dd");
  });

  return (
    <div className="calendar">
      <table>
        <thead className="calendar-table__thead">
          <tr>
            <th></th>
            <th className="month" colSpan="30">SEPTIEMBRE</th>
          </tr>
          <tr>
            <th className="title-name" style={{minWidth: "170px"}}>NAME</th>
            {Array(30).fill().map((a, i) => {
                return (
                  <th key={`number:${i}`}>{i + 1}</th>
                )
              })}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={`user:${user.id}`}>
              <td className="name" width="150">{user.name}<br /><small>{user.role} / {user.project}</small></td>
              {dates.map(date => (
                <td className="activity-wrapper" key={`date:${user.id}:${date}`}>
                  <Activity date={date} user={user}/>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <small>
        <p>Note* Green = Vacation, Red = Sick, Blue = Parental leave, Dark grey = Non-compensated absence (tjänstledig)</p>
      </small>
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
