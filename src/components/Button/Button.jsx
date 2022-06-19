import React from "react";

function Button({ value, onChange, placeholder }) {
  return (
    <input
      className="inputs-value"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Button;
