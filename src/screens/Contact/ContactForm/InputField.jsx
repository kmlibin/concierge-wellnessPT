import React from "react";

const InputField = ({ type, label, name, value, onChange, error }) => {
  return (
    <div className={`${name}-input`}>
      <label htmlFor={name}>
        {label} :
        <input
          className={`${error ? "red-border" : ""}`}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </label>
      <div className="error-message">{error}</div>
    </div>
  );
};

export default InputField;
