import React from "react";
import "../Input/input.css";
import ValidationError from "../ValidationError/ValidationError";
function InputComponent({ name, label, value, onChange, placeholder, error }) {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          type="text"
          name={name}
          className="input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && <ValidationError>{error}</ValidationError>}
      </div>
    </React.Fragment>
  );
}

export default InputComponent;
