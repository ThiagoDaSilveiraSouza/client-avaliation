import { IThemeName } from "./interfaces";

interface IThemeProps {
  mainBackgroundColor: string;
  mainColor: string;
  secondaryColor: string;
}

type IThemes = {
  [key in IThemeName]: IThemeProps;
};

export const Themes: IThemes = {
  light: {
    mainBackgroundColor: "#f8f6e7",
    mainColor: "black",
    secondaryColor: "white",
  },
  dark: {
    mainBackgroundColor: "black",
    mainColor: "white",
    secondaryColor: "black",
  },
};
