import React from "react";

export default (props) => {
  return (
    <div className="input-field">
      <label class="label">
        {props.title}
        <input
          type="text"
          value={props.value}
          placeholder={props.label}
          onchange={props.onChange}
        />
      </label>
    </div>
  );
}
