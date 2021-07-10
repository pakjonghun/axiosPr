import React from "react";
import axios from "axios";
import { instanceStrict } from "check-types";

export default () => {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/tv">Search</a>
        </li>
      </ul>
    </header>
  );
};
