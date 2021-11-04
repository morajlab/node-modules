import React, { createElement } from "react";
import { Solid } from "@morajlab/react.styles.solid";
import { Bare } from "@morajlab/react.components.bare";
import { Styles } from "./image.styles";
import type { ImageComponent } from "./image.types";

export const Image: ImageComponent = ({
  bare,
  src,
  alt,
  width,
  height,
  ...rest
}) => {
  bare = bare ?? true;
  alt = alt ?? "";
  width = width ?? 300;
  height = height ?? 300;

  const nonBareProps = {
    src,
    alt,
  };
  const element = bare ? Bare : "img";
  const { root } = Styles({ bare, src, width, height });

  return createElement(element, {
    ...root,
    ...Solid(),
    ...{
      ...rest,
      ...(bare ? {} : nonBareProps),
    },
  });
};
