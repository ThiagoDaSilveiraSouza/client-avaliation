import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { IThemeName } from "../../interfaces";

type IThemeContext = {
  activeTheme: IThemeName;
  setActiveTheme: Dispatch<SetStateAction<IThemeName>>;
};

export const ThemeContext = createContext<IThemeContext>({
  activeTheme: "light",
  setActiveTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [activeTheme, setActiveTheme] = useState<IThemeName>("light");
  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
