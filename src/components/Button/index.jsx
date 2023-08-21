import React from "react";

const Button = ({ className = "bttn", title, onClick, ...props }) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {title}
    </button>
  );
};

export default Button;
