import React from "react";

const Select = ({ id, name, value, onChange, error, label, options, defaultOption }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        <option value="" hidden>
          {defaultOption || options[0]}
        </option>
        {options.map((option, i) => {
          return (
            <option key={i} value={option.toLowerCase()}>
              {option}
            </option>
          );
        })}
      </select>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Select;
