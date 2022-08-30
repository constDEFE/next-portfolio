import { ThemeContext, ThemeType } from "./ThemeContext";
import { 
  ReactNode, 
  useEffect, 
  useState 
} from "react";

interface IThemeProviderProps {
  initialTheme: ThemeType;
  children: ReactNode;
}

export const ThemeProvider = ({
  initialTheme,
  children,
}: IThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  const checkTheme = (existingTheme: ThemeType): void => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const root = window.document.documentElement;
      const isDark = existingTheme === "dark";

      root.classList.remove(isDark ? "light" : "dark");
      root.classList.add(existingTheme);

      localStorage.setItem("color-scheme", existingTheme);
    }
  };

  if (initialTheme) checkTheme(initialTheme);

  useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
