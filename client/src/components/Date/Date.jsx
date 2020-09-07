import React, { Fragment } from 'react';

const Day = ({ day }) => {

  const onClicky = () => {
    console.log("U clicked a day", JSON.stringify(day, null, 2));
  }

  return (
    <Fragment>
      <td className="calendar-table__day" onClick={onClicky}>{day}</td>
    </Fragment>
  );
};

export default Day;
