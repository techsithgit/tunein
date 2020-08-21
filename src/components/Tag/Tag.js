import React from "react";
import "./../../style/scss/main.scss";
import "./Tag.scss";
import { Label } from "./../Label/Label";

export function Tag({ children, type, className, onClick, ...props }) {
  return (
    <div
      onClick={() => {
        onClick(children);
      }}
      className={`tag  pointer ${className ? className : ""} ${
        type === "white" ? "blueTag" : "whiteTag"
      }`}
    >
      <Label size={16} bold color={type === "blue" ? "teal2" : "white"}>
        {children}
      </Label>
    </div>
  );
}
