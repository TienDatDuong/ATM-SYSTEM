import React from "react";

function OtherBtn({ type, value, placeholder, handleOther, className }) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={(e) => handleOther(e)}
    />
  );
}

export default OtherBtn;
