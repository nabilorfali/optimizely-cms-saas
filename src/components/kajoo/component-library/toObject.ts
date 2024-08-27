import { CSSProperties } from "react";

export const toObject = (style: string | CSSProperties = {}): CSSProperties => {
  if (typeof style === "string") {
    return toObj(style);
  }

  if (typeof style === "object") {
    return style;
  }

  return {};
};

const toObj = (str: string = "{}") => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
};
