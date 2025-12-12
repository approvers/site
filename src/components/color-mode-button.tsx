import { useStore } from "@nanostores/react";
import { LuMoon, LuSun } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { colorMode } from "@/lib/color-mode-store";

export type ColorMode = "light" | "dark";

export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

export function useColorMode(): UseColorModeReturn {
  const color = useStore(colorMode);
  const setTheme = (newColorMode: ColorMode) => {
    colorMode.set(newColorMode);
  };
  const toggleColorMode = () => {
    colorMode.set(color === "dark" ? "light" : "dark");
  };
  return {
    colorMode: color,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}

export function OppositeColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuSun /> : <LuMoon />;
}

export const ColorModeToggleButton = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      <ColorModeIcon />
      →
      <OppositeColorModeIcon />
    </Button>
  );
};
