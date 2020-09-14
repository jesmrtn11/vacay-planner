import React,  { useState } from "react";
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, parse, subMonths, addMonths } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";
import Activity from "../Activity";
import Logo from "../Logo";

const Calendar = ({ users }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
      setCurrentDate(subMonths(currentDate, 1));
  };

  const header = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="header row flex-middle">
          <div className="column col-start">
            <div className="icon" onClick={prevMonth}>
              <ChevronLeftIcon size={24} />
            </div>
          </div>
          <div className="column col-center">
            <span>{format(currentDate, dateFormat)}</span>
          </div>
          <div className="column col-end">
            <div className="icon" onClick={nextMonth}>
              <ChevronRightIcon size={24} />
            </div>
          </div>
      </div>
    );
  };

  const daysOfWeek = () => {
    const dateFormat = "ddd";
    const days = [];
    let startDate = startOfWeek(currentDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <th>
          {format(addDays(startDate, i), dateFormat)}
        </th>
      );
    }
    return days;
  };

  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div className="cell"> 
          <span className="number">{formattedDate}</span>
        </div>
        );
      day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}> {days} </div>
      );
      days = [];
    }

    return days;
  }

  // let dates = eachDayOfInterval({
  //   start: new Date(2020, 8, 1),
  //   end:   new Date(2020, 8, 30)
  // }).map(date => {
  //   return format(date, "yyyy-MM-dd");
  // });

  return (
    <div className="calendar">

      <Logo />

      {header()}

      <table>
        <thead className="calendar-table__thead">
          <tr>
          </tr>
          <tr>
            <th className="title-name" style={{minWidth: "170px"}}>NAME</th>
            {daysOfWeek()}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={`user:${user.id}`}>
              <td className="name" width="150">{user.name}<br /><small>{user.role} / {user.project}</small></td>
              {dates.map(date => {
                return (
                  <td className="activity-wrapper" key={`date:${user.id}:${date}`}>
                    <Activity date={date} user={user}/>
                  </td>
                )
              })}
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
