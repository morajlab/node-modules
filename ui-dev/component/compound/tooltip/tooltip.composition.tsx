import React, { Fragment } from "react";
import { Tooltip } from "./tooltip";

const styles = {
  display: "inline-block",
  border: "1px solid #aaa",
};

const TL = (props: any) => <Tooltip style={styles} {...props} />;

const Btn = () => <button>Show tooltip</button>;

export const BasicTooltip = () => (
  <Fragment>
    <Btn />
    <TL target={Btn}>This is a basic tooltip</TL>
  </Fragment>
);
