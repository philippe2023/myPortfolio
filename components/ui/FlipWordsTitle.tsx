import React from "react";
import { FlipWords } from "./flip-words";

export function FlipWordsTitle() {
  const words = ["Full Stack ", "Front End", "Web"];

  return (
      <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
        <FlipWords words={words} />Developer
      </h2>
  );
}
