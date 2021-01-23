import React from "react";
import "./FormInput.scss";

function FormInput({ handleChange, ...otherInputProps }) {
  return (
    <input
      className="form-input"
      onChange={handleChange}
      {...otherInputProps}
    />
  );
}

export default FormInput;
