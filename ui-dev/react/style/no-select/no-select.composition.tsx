import React from "react";
import { NoSelect } from "./no-select";

export const TextNoSelectStyle = () => (
  <div {...NoSelect()}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
    consectetur voluptas consequatur odio modi sequi exercitationem
    consequuntur, molestiae officia aliquid ratione ipsa, quae non, ab quod est
    laboriosam eum vitae.
  </div>
);

export const ImageNoSelectStyle = () => (
  <img
    src="https://picsum.photos/500"
    alt="image no select style"
    {...NoSelect()}
  />
);
