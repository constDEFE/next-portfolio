import { ThemeType } from "../models/models";
import { 
  SetStateAction, 
  createContext, 
  Dispatch
} from "react";

interface ThemeContextState {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const getInitialTheme = (): ThemeType => {
  if (typeof window !== "undefined" && typeof localStorage !== 'undefined') {
    const storedPrefs: string | null = localStorage.getItem("color-scheme");
    
    if (storedPrefs) return storedPrefs as ThemeType;
    if (window.matchMedia("(preferred-color-scheme: dark)").matches) return "dark";
  }

  return "light";
};

const defaultState = {
  theme: getInitialTheme(),
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextState>(defaultState);
