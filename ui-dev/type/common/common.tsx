import type { HTMLAttributes, FunctionComponent } from "react";

export interface IMLComponentProps extends HTMLAttributes<HTMLDivElement> {}

export type MLComponent<T = {}> = FunctionComponent<T>;
