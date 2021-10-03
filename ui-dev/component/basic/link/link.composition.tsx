import React from "react";
import { Link } from "./link";

export const BasicLink = () => (
  <Link href="https://morajlab.com">Basic Link</Link>
);

export const NonBareLink = () => (
  <Link href="https://morajlab.com" bare={false}>
    Non Bare Link
  </Link>
);

export const NonSelectableLink = () => (
  <Link href="https://morajlab.com" selectable={false}>
    Non Selectable Link
  </Link>
);
