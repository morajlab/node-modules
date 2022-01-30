import React, { CSSProperties } from "react";
import { Position } from "./position";

const style: CSSProperties = {
  backgroundColor: "red",
  color: "#ffffff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const BasicFixedPosition = () => (
  <Position style={style} type="fixed">
    Basic Fixed Position
  </Position>
);

export const BasicAbsolutePosition = () => (
  <Position style={style} type="absolute">
    Basic Absolute Position
  </Position>
);

export const FixedTopPosition = () => (
  <Position style={style} type="fixed" pos="top">
    Fixed Top Position
  </Position>
);

export const FixedRightPosition = () => (
  <Position style={style} type="fixed" pos="right">
    Fixed Right Position
  </Position>
);

export const FixedBottomPosition = () => (
  <Position style={style} type="fixed" pos="bottom">
    Fixed Bottom Position
  </Position>
);

export const FixedLeftPosition = () => (
  <Position style={style} type="fixed" pos="left">
    Fixed Left Position
  </Position>
);

export const FixedTopMiddlePosition = () => (
  <Position style={style} type="fixed" pos="top-middle">
    Fixed Top-Middle Position
  </Position>
);

export const FixedRightMiddlePosition = () => (
  <Position style={style} type="fixed" pos="right-middle">
    Fixed Right-Middle Position
  </Position>
);

export const FixedBottomMiddlePosition = () => (
  <Position style={style} type="fixed" pos="bottom-middle">
    Fixed Bottom-Middle Position
  </Position>
);

export const FixedLeftMiddlePosition = () => (
  <Position style={style} type="fixed" pos="left-middle">
    Fixed Left-Middle Position
  </Position>
);

export const FixedTopRightPosition = () => (
  <Position style={style} type="fixed" pos="top-right">
    Fixed Top-Right Position
  </Position>
);

export const FixedBottomRightPosition = () => (
  <Position style={style} type="fixed" pos="bottom-right">
    Fixed Bottom-Right Position
  </Position>
);

export const FixedBottomLeftPosition = () => (
  <Position style={style} type="fixed" pos="bottom-left">
    Fixed Bottom-Left Position
  </Position>
);

export const FixedTopLeftPosition = () => (
  <Position style={style} type="fixed" pos="top-left">
    Fixed Top-Left Position
  </Position>
);

export const FixedFullPosition = () => (
  <Position style={style} type="fixed" pos="full">
    Fixed Full Position
  </Position>
);

export const FixedCenterPosition = () => (
  <Position style={style} type="fixed" pos="center">
    Fixed Center Position
  </Position>
);
