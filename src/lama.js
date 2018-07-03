import React from "react";

export const Lama = ({ lama }) => (
  <div>
    <img
      src="/lama.png"
      alt={lama.name}
      style={{
        width: "24px",
        height: "24px",
        display: "inline",
        margin: "0 6px -6px 0"
      }}
    />
    <span>{lama.name}</span>
  </div>
);
