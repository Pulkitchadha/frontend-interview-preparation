import React from "react";

import { getColor } from "./helper";

export default function Block({ value }) {
  return <span className={`block ${getColor(value)}`}>{value}</span>;
}
