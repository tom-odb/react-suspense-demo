import React from "react";

import { Lama } from "./lama";

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
          <Lama lama={lama} />
        </li>
      );
    })}
  </ul>
);
