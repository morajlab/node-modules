import { bgRed, bgGreen, bgWhite, bgYellow } from "chalk";

export interface IConsole {
  info(message: string): void;
  error(message: string): void;
  warn(message: string): void;
  success(message: string): void;
  nl(): void;
  clear(): void;
}

export const log = console.log;

export const Console: IConsole = {
  info(message: string) {
    log(bgWhite("INFO").concat(`:: ${message}`));
  },
  error(message: string) {
    log(bgRed("ERROR").concat(`:: ${message}`));
  },
  warn(message: string) {
    log(bgYellow("WARNING").concat(`:: ${message}`));
  },
  success(message: string) {
    log(bgGreen("SUCCESS").concat(`:: ${message}`));
  },
  nl() {
    log();
  },
  clear() {
    console.clear();
  },
};

export default Console;
