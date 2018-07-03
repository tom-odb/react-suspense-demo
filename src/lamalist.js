import React from "react";

export const LamaList = ({ lamas }) => (
  <ul
    style={{
      listStyle: "none",
      textAlign: "left"
    }}
  >
    {lamas.map((lama, i) => {
      return (
        <li
          key={i}
          style={{
            lineHeight: "24px"
          }}
        >
          <img
            src="lama.png"
            alt={lama.name}
            style={{
              width: "24px",
              height: "24px",
              display: "inline",
              margin: "0 6px -6px 0"
            }}
          />
          <span>{lama.name}</span>
        </li>
      );
    })}
  </ul>
);
