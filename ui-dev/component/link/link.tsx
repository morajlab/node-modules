import React, { createElement } from "react";
import { Bare } from "@ui-dev/component.bare";
import { Text } from "@ui-dev/component.text";
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
    { onClick: onClickHandler, ...root, ...rest },
    <Text selectable={selectable}>{children}</Text>
  );
};
