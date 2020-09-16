import React,  { useState } from "react";
import Activity from "../Activity";
import {
  format,
  getDaysInMonth,
  startOfYear,
  endOfYear,
  eachDayOfInterval,
  isWeekend,
  getWeek,
  isToday
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
  "2020-10-31",
  "2020-12-25",
  "2020-12-26"
];

const lov = [
  "2020-10-26",
  "2020-10-27",
  "2020-10-28",
  "2020-10-29",
  "2020-10-30",
  "2020-12-24",
  "2020-12-26",
  "2020-12-27",
  "2020-12-28",
  "2020-12-29",
  "2020-12-30",
  "2020-12-31",
  "2021-01-02"
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
    <div className="calendar-wrapper">
      <aside>
        <div className="month">Month</div>
        {/* <div className="week">Week</div> */}
        <div className="day">Day</div>
        <div className="names">
          {users.map(user => (
            <div key={`user:${user.id}`} className="name">
              {user.name}
            </div>
          ))}
        </div>
      </aside>
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
              {/* <th>
                {interval.map(([date,dateString], i) => (
                  <p key={i}>{getWeek(date)}</p>
                ))}
              </th> */}
              {interval.map(([date, dateString], i) => (
                <th key={`weekday:${i}`}>
                  <div className={`day ${(isToday(date)) ? " today" : ""}`}>
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
                  className={`
                    ${(mark.find(x => x === dateString)) ? "red-day" : ""} 
                    ${(lov.find(x => x === dateString)) ? "lov" : ""}
                    ${(isWeekend(date)) ? " weekend" : ""}`}>
                  <Activity date={dateString} user={user}/>
                </td>
              ))}
            </tr>
            ))}
          </tbody>
        </table>
      </div>

      <small>
        <p>Note* Green = Vacation, Red = Sick, Blue = Parental leave, Dark grey = Non-compensated absence (tjänstledig)</p>
      </small>
      
    </div>
  );
};

export default Calendar;
