export * from "glamor";
import { css } from "glamor";
import type { IStyleFunction } from "./style.types";

export const style: IStyleFunction = (props) => css(props);

export const getRenderedComponentStyles = (component: JSX.Element) => {
  for (const [key, _value] of Object.entries(component.props)) {
    if (key.includes("data-css")) {
      const element = document.querySelectorAll(`[${key}]`)[0];

      return window.getComputedStyle(element);
    }
  }
};
