import React from "react";
import { createStyles } from "./style";

export const BasicStyle = () => {
  const styles = {
    root: {
      padding: "20px",
      backgroundColor: "#1d3557",
      display: "inline-block",
      color: "#fff",
      borderRadius: "5px",
    },
  };
  const { root } = createStyles(styles)();

  return (
    <pre className={root}>
      <code>{JSON.stringify(styles.root)}</code>
    </pre>
  );
};
