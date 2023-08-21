import React from "react";

const Inputfield = ({ name, type, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Inputfield;
