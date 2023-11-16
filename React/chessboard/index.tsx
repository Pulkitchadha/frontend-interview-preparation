import React from "react";
import Block from "./block";

export default function ChessBoard() {
  return (
    <>
      <h1>Chess</h1>
      <div className="container">
        {Array.from(Array(64)).map((_, i) => (
          <Block key={i} value={i + 1} />
        ))}
      </div>
    </>
  );
}
