import React,  { useState } from "react";
import Activity from "../Activity";
import {
  format,
  getDaysInMonth,
  startOfYear,
  endOfYear,
  addDays,
  isSunday,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  parse,
  subMonths,
  addMonths,
  eachDayOfInterval,
  isWeekend
} from "date-fns";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const mark = [
  "2020-01-01",
  "2020-01-06",
  "2020-04-10",
  "2020-04-12",
  "2020-04-13",
  "2020-05-01",
  "2020-05-21",
  "2020-05-31",
  "2020-06-06",
  "2020-06-20",
  "2020-09-18",
  "2020-10-31",
  "2020-12-25",
  "2020-12-26"
];

const Calendar = ({ users }) => {
  const [now, setNow] = useState(Date.now());

  console.count("render");

  let start = startOfYear(now);
  let end = endOfYear(now);
  let interval = eachDayOfInterval({
    start: start,
    end: end
  }).map(date => {
    return [date, format(date, "yyyy-MM-dd")]
  });

  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            {Array(12).fill().map((_, i) => (
              <th colSpan={getDaysInMonth(new Date(2020, i, 1))} key={`month:${i}`}>
                <div className="month">
                  {months[i]}
                </div>
              </th>
            ))}
          </tr>
          <tr>
            <th>NAME</th>
            {interval.map(([date, dateString], i) => (
              <th key={`weekday:${i}`}>
                <div className="day">
                  {dateString.slice(-2)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
          <tr key={`user:${user.id}`}>
            <td>
              <div className="name">
                {user.name}
              </div>
            </td>
            {interval.map(([date, dateString]) => (
              <td 
                key={`date:${user.id}:${date}`} 
                className={`${(mark.find(x => x === dateString)) ? "red-day" : ""} ${(isWeekend(date)) ? " weekend" : ""}`}>
                <Activity date={dateString} user={user}/>
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
};

export default Calendar;
