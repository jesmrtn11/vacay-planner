import React from 'react';
import "./Calendar.scss";

const Calendar = ({ users }) => {
  const json = JSON.stringify(users, null, 2);

  return (
    <div className="calendar">
        <h2>Calendar</h2>
        <pre>{json}</pre>
    </div>
  );
};

export default Calendar;
