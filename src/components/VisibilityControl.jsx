import React from "react";

export const VisibilityControl = (props) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={props.isChecked}
        onChange={(e) => props.showCompleted(e.target.checked)}
      />
      <label htmlFor="form-check-label">Show {props.description}</label>
    </div>
  );
};
