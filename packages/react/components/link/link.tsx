import React, { createElement } from "react";
import { Bare } from "@morajlab/react.components.bare";
import { Text } from "@morajlab/react.components.text";
import { Styles } from "./link.styles";
import type { LinkComponent } from "./link.types";

export const Link: LinkComponent = ({
  bare,
  children,
  href,
  selectable,
  onClick,
  ...rest
}) => {
  bare = bare ?? true;
  selectable = selectable ?? true;

  const _onClick = () => onClick ?? (() => {});
  const element = bare ? Bare : "a";
  const { root } = Styles();

  const onClickHandler = () => {
    _onClick();

    window.open(href);
  };

  return createElement(
    element,
    { onClick: onClickHandler, className: root, ...rest },
    <Text selectable={selectable}>{children}</Text>
  );
};
