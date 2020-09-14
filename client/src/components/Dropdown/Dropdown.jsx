import React from "react";
import { ChevronDownIcon } from "@primer/octicons-react";

export default ({ title, children, ...props }) => {
  return (
    <div class="dropdown">
      <label class="label">
        <ChevronDownIcon size={16} />
        {!!title && <span>{title}</span>}
      </label>
      <select {...props}>
        {children}
      </select>
    </div>
  );
}
