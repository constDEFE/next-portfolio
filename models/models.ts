export type Style = {
  [key: string]: string;
};

export type ThemeType = "light" | "dark";

export interface Skill {
  imageSource: string;
  title: string;
}

export interface Project {
  imageSource: string;
  title: string;
  url: string;
  mainStack: string[];
}
