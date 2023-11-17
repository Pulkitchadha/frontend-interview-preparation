import React, { useState } from "react";

export default function ImageLazy({ src, width = "100%", size = "24px" }) {
  const [loading, setLoading] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: width,
      }}
    >
      <img
        src={src}
        style={{
          display: loading ? "none" : "block",
          width: "100%",
          animation: "fadeIn 0.5s",
        }}
        onLoad={() => {
          setLoading(false);
        }}
      />
      <div
        className="spinner"
        style={{
          display: loading ? "block" : "none",
          fontSize: size,
        }}
      />
    </div>
  );
}
