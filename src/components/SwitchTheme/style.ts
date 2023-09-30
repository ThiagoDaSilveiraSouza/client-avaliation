import styled from "styled-components";

export const IconSwitch = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 36px;
  height: 15px;
  border: 0;
  border-radius: 50px;
  outline: 0;
  z-index: 0;
  box-sizing: border-box;
  cursor: pointer;
`;

interface IconSwitchBackgroundProps {
  switchthemeischecked: string;
  BackgroundChecked?: string;
}

export const IconSwitchBackground = styled.div<IconSwitchBackgroundProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ switchthemeischecked }) =>
    switchthemeischecked === "true" ? "100%" : "0"};
  height: 100%;
  background: ${({ BackgroundChecked }) => BackgroundChecked || "indigo"};
  z-index: 1;
  transition: 0.3s;
  border-radius: 50px;
  transition-timing-function: ease-in-out;
`;

interface IconSwitchPinProps {
  switchthemeischecked: string;
}

export const IconSwitchPin = styled.div<IconSwitchPinProps>`
  position: absolute;
  transform: ${({ switchthemeischecked }) =>
    switchthemeischecked === "true" && "translateX(calc(100%))"};
  left: -4px;
  width: 22px;
  height: 22px;
  margin: 1px;
  background: white;
  border-radius: 100%;
  transition: 0.3s;
  z-index: 2;
  transition-timing-function: ease-in-out;
`;
