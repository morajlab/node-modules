import React, { CSSProperties } from "react";
import { Rectangle } from "./rectangle";

const styles: CSSProperties = {
  backgroundColor: "red",
};

export const CoverRectangle = () => <div style={styles} {...Rectangle()} />;
