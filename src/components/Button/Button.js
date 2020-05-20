import React from "react";

import "./button.style.scss";

const Button = ({ children, type }) => {
  return <button className={type}>{children}</button>;
};

export default Button;
