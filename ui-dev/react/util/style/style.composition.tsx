import React from "react";
import { style } from "./style";

export const BasicStyle = () => {
  const styles = {
    padding: "20px",
    backgroundColor: "#1d3557",
    display: "inline-block",
    color: "#fff",
    borderRadius: "5px",
  };

  return (
    <pre {...style(styles)}>
      <code>{JSON.stringify(styles)}</code>
    </pre>
  );
};
