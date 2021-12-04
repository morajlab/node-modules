import React from "react";
import { common } from ".";

export const NoSelectStyle = () => (
  <p className={common().noSelect}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sit, quia
    laborum id nisi, ipsum sapiente, ex eligendi dicta voluptatem quam nulla in
    laboriosam. Id doloribus aut qui iusto perspiciatis.
  </p>
);

export const NoDragStyle = () => (
  <img
    className={common().noDrag}
    src="https://picsum.photos/200"
    alt="example image"
  />
);

export const CoverSizeStyle = () => <div className={common().coverSize}></div>;

export const SolidStyle = () => (
  <div
    className={common().solid}
    style={{
      backgroundImage: "url(https://picsum.photos/200)",
      width: "300px",
      height: "300px",
    }}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sit, quia
    laborum id nisi, ipsum sapiente, ex eligendi dicta voluptatem quam nulla in
    laboriosam. Id doloribus aut qui iusto perspiciatis.
  </div>
);
