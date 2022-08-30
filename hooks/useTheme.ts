import { ThemeContext, ThemeType } from "./../contexts/ThemeContext";
import { useContext } from "react";

type UseThemeType = {
  theme: ThemeType;
  toggleTheme: (newTheme: ThemeType) => void;
};

export const useTheme = (): UseThemeType => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = (newTheme: ThemeType): void => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, toggleTheme };
};
