import * as glamor from "glamor";
import type { IStyleFunction } from "./style.types";

export const style: IStyleFunction = glamor.css;

export const getRenderedComponentStyles = (component: JSX.Element) => {
  for (const [key, _value] of Object.entries(component.props)) {
    if (key.includes("data-css")) {
      const element = document.querySelectorAll(`[${key}]`)[0];

      return window.getComputedStyle(element);
    }
  }
};

export { glamor };
