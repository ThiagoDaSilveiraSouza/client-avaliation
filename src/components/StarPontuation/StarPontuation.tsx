import { useState } from "react";
import styled from "styled-components";
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { Flex } from "@radix-ui/themes";

interface StartPontuationProps {
  onChange?: (starNumbers: number) => void;
  initialValue?: number;
}

const StartContainer = styled.div`
  display: flex;
  cursor: pointer;
  transform-origin: center;
  :hover {
    transform: scale(1.05);
    filter: drop-shadow(0px 0px 1px RGBA(255, 215, 0, 0.6));
  }
`;

export const StartPontuation = ({
  onChange,
  initialValue,
}: StartPontuationProps) => {
  const [pontuation, setPontuation] = useState(initialValue || 0);
  const startProps = {
    color: "RGB(255, 215, 0)",
    width: "35px",
    height: "35px",
  };
  const starFill = Array(5).fill("");

  const starHandlerChange = (index: number) => {
    setPontuation(index);
    onChange && onChange(index);
  };

  return (
    <Flex gap={"5"}>
      {starFill.map((_, index) => {
        const isFilled = index <= pontuation;
        return isFilled ? (
          <StartContainer key={"star" + index}>
            <StarFilledIcon
              {...startProps}
              onClick={() => starHandlerChange(index)}
            />
          </StartContainer>
        ) : (
          <StartContainer key={"star" + index}>
            <StarIcon
              {...startProps}
              onClick={() => starHandlerChange(index)}
            />
          </StartContainer>
        );
      })}
    </Flex>
  );
};
