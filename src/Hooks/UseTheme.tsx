import { useContext, useEffect } from "react";
import { ThemeContext } from "../Context";
import { Themes } from "../Themes";
import { IThemeName } from "../interfaces";

export const UseTheme = () => {
  const { activeTheme, setActiveTheme } = useContext(ThemeContext);

  const currentTheme = Themes[activeTheme];
  const browserActiveTheme: IThemeName =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  useEffect(() => {
    setActiveTheme(browserActiveTheme);
  }, []);

  return { currentTheme, currentThemeName: activeTheme, setActiveTheme };
};
