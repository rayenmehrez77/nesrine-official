import React from "react";
import "./CustomButton.scss";

function CustomButton({ children }) {
  return (
    <>
      <a href="http://marcel-pirnay.be/" class="btn">
        <svg width="277" height="62">
          <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stop-color="#daa403" />
              <stop offset="100%" stop-color="rgb(112, 77, 0)" />
            </linearGradient>
          </defs>
          <rect
            x="5"
            y="5"
            rx="25"
            fill="none"
            stroke="url(#grad1)"
            width="266"
            height="50"
          ></rect>
        </svg>
        <span>{children}</span>
      </a>
    </>
  );
}

export default CustomButton;
