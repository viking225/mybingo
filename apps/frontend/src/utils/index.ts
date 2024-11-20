import React from "react";

export function dispatchNumberOnly(
  input: string,
  dispatch: React.Dispatch<React.SetStateAction<string>>,
): void {
  input.replace(/[^0-9]/g, "");
  dispatch(input);
}
