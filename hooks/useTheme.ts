import { ThemeContext } from "./../contexts/ThemeContext";
import { useContext } from "react";
import { ThemeType } from './../models/models';

interface UseTheme {
  theme: ThemeType;
  toggleTheme: (newTheme: ThemeType) => void;
};

export const useTheme = (): UseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = (newTheme: ThemeType): void => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, toggleTheme };
};
