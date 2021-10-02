import type { StyleAttribute } from "glamor";

export interface IStyleFunctionProps {}

export interface IStyleFunction {
  (props?: IStyleFunctionProps): StyleAttribute;
}
