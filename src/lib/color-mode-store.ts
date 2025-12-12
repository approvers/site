import { persistentAtom } from "@nanostores/persistent";
import { onSet } from "nanostores";

export type ColorMode = "light" | "dark";
export const storageKey = "color-mode";
export const colorMode = persistentAtom<ColorMode>(storageKey, "light");

onSet(colorMode, ({ newValue }) => {
  if (newValue === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
});
