import { ReactNode } from "react";
import type { IBareProps } from "@morajlab/ui-dev.component.basic.bare";
import type { MLComponent } from "@morajlab/ui-dev.type.common";

export interface ITooltipStyleProps {}

export interface ITooltipProps extends ITooltipStyleProps, IBareProps {
  target: ReactNode;
}

export type TooltipComponent = MLComponent<ITooltipProps>;
