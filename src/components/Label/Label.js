import React from "react";
import "./Label.scss";

export function Label({ children, extraBold, size, bold, color, className, style, ...props }) {
  className = `label ${className ? className : ""} ${bold ? "bold" : ""} ${
    extraBold ? "extraBold" : ""
  } ${size ? "f" + size : ""} ${color ? color : ""}`;
  return <div className={className} style={style}>{children}</div>;
}
