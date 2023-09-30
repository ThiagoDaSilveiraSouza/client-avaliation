import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { UseTheme } from "../../Hooks";
import { IconSwitch, IconSwitchBackground, IconSwitchPin } from "./style";

export const SwitchTheme = () => {
  const { currentThemeName, setActiveTheme } = UseTheme();
  const switchThemeIsChecked = (currentThemeName === "dark").toString();

  const switchThemeHandleChange = () => {
    switchThemeIsChecked === "true"
      ? setActiveTheme("light")
      : setActiveTheme("dark");
  };

  return (
    <IconSwitch onClick={switchThemeHandleChange}>
      <IconSwitchBackground
        switchthemeischecked={switchThemeIsChecked}
      ></IconSwitchBackground>
      <IconSwitchPin switchthemeischecked={switchThemeIsChecked}>
        {switchThemeIsChecked === "true" ? (
          <MoonIcon
            color="indigo"
            style={{
              borderRadius: "100%",
              padding: "3px",
              boxShadow: "0 0 5px 0 indigo",
            }}
          />
        ) : (
          <SunIcon
            color="orangered"
            style={{
              borderRadius: "100%",
              padding: "3px",
              boxShadow: "0 0 5px 0 orangered",
            }}
          />
        )}
      </IconSwitchPin>
    </IconSwitch>
  );
};
