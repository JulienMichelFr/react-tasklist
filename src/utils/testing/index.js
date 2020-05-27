import React from "react";

export function Wrapper({ children }) {
  return (
    <div className="m-2">
      <div style={{ width: 300 }}>{children}</div>
    </div>
  );
}
