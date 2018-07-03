import React from "react";

export const Spinner = () => (
  <span
    style={{
      backgroundImage: "url('/lama.png')",
      backgroundSize: "contain",
      width: "48px",
      height: "48px",
      display: "block",
      margin: "24px auto",
      animationName: "spin",
      animationDuration: "1.5s",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear"
    }}
  />
);
