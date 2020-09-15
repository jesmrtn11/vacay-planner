import React,  { useState } from "react";
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, parse, subMonths, addMonths, eachDayOfInterval } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";
import Activity from "../Activity";
import Logo from "../Logo";

const Calendar = ({ users }) => {
  const [now, setNow] = useState(Date.now());

  console.log("RENDER HAPENED");

  let start = startOfMonth(now);
  let end = endOfMonth(now);
  let interval = eachDayOfInterval({
    start: start,
    end: end
  }).map(date => {
    return format(date, "yyyy-MM-dd")
  });

  const onPrevMonth = () => setNow(addMonths(now, -1));
  const onNextMonth = () => setNow(addMonths(now,  1));

  return (
    <div className="cal">
      <button onClick={onPrevMonth}>Prev</button>
      <button onClick={onNextMonth}>Next</button>
      <table>
        <thead>
          <tr>
            <th>{format(now, "MMMM yyyy")}</th>
            {interval.map(date => (
              <th>{date.slice(-2)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
          <tr>
            <td>{user.name}</td>
            {interval.map(date => (
              <td>
                <Activity date={date} user={user}/>
              </td>
            ))}
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


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
    const dateFormat = "iii";
    const dateFormatDay = "d";
    const days = [];
    let startDate = startOfWeek(currentDate);
    
    for (let i = 0; i < 30; i++) {
      days.push(
        <th>
          {format(addDays(startDate, i), dateFormat)}
          <span style={{display: "block"}}>{format(addDays(startDate, i), dateFormatDay)}</span>
        </th>
      );
    }
    return days;
  };
  
  const dayCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    let rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 30; i++) {
        formattedDate = format(day, dateFormat);
        days.push(
            <div className="cell"> 
              <span>{formattedDate}</span>
            </div>
          );
        day = addDays(day, 1);
        }
      rows.push(
        <span> {days} </span>
      );
      days = [];
    }
    return <p>{rows}</p>;
  }
    
  // let dates = eachDayOfInterval({
  //   start: new Date(2020, 8, 1),
  //   end:   new Date(2020, 8, 30)
  // }).map(date => {
  //   return format(date, "yyyy-MM-dd");
  // });
        
  let datesNew = eachDayOfInterval({ 
    start: startOfMonth(new Date()), 
    end: endOfMonth(new Date())
  }).map(date => {
    return format(date, "yyyy-MM-dd");
  });

    console.log("start", startOfMonth(new Date()));
    console.log("end", endOfMonth(new Date()));

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
              {datesNew.map(date => {
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

      {/* {datesNew.map(date => {
        console.log("test week day", date);
      })
      } */}
    </div>
  );
};

export default Calendar;
