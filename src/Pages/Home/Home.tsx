import { useEffect, useState, FormEventHandler } from "react";
import {
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  ScrollArea,
  Text,
  TextArea,
} from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { UseTheme } from "../../Hooks";
import { StartPontuation, SwitchTheme } from "../../components";

const defaultUserResponse = {
  food: 0,
  service: 0,
  environmentAndCleaning: 0,
  waiting: 0,
  valueForMoney: 0,
};

export const Home = () => {
  const { currentTheme } = UseTheme();
  const [userResponse, setUserResponse] = useState(defaultUserResponse);

  const updateResponse = (
    propName: keyof typeof defaultUserResponse,
    value: number
  ) => {
    setUserResponse((prevState) => {
      return { ...prevState, [propName]: value };
    });
  };

  const formHandlerSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log(userResponse);
  }, [userResponse]);

  return (
    <Container style={{ background: currentTheme.mainBackgroundColor }}>
      <Flex align={"center"} justify={"center"} style={{ height: "100vh" }}>
        <Card size={"5"} style={{ maxWidth: "95%" }} variant="classic">
          <SwitchTheme />
          <ScrollArea type="auto" scrollbars="vertical">
            <Form.Root onSubmit={formHandlerSubmit}>
              <Grid gap={"4"}>
                <Heading size={"6"} align={"center"}>
                  Conte para a gente sua experiência
                </Heading>

                <Form.Field name="food">
                  <Text size={"4"} weight={"medium"}>
                    Qualidade da Comida:
                  </Text>
                  <StartPontuation
                    onChange={(value) => updateResponse("food", value + 1)}
                  />
                </Form.Field>
                <Form.Field name="service">
                  <Text size={"4"} weight={"medium"}>
                    Atendimento:
                  </Text>
                  <StartPontuation
                    onChange={(value) => updateResponse("service", value + 1)}
                  />
                </Form.Field>
                <Form.Field name="environmentAndCleaning">
                  <Text size={"4"} weight={"medium"}>
                    Ambiente e Limpeza:
                  </Text>
                  <StartPontuation
                    onChange={(value) =>
                      updateResponse("environmentAndCleaning", value + 1)
                    }
                  />
                </Form.Field>
                <Form.Field name="waiting">
                  <Text size={"4"} weight={"medium"}>
                    Tempo de Espera:
                  </Text>
                  <StartPontuation
                    onChange={(value) => updateResponse("waiting", value + 1)}
                  />
                </Form.Field>
                <Form.Field name="valueForMoney">
                  <Text size={"4"} weight={"medium"}>
                    Valor pelo Dinheiro:
                  </Text>
                  <StartPontuation
                    onChange={(value) =>
                      updateResponse("valueForMoney", value + 1)
                    }
                  />
                </Form.Field>
                <Form.Field className="FormField" name="question">
                  <Grid>
                    <Text size={"4"} weight={"medium"}>
                      Fale com a gente!
                    </Text>
                    <Form.Control asChild>
                      <TextArea 
                        style={{ resize: "none" }}
                      />
                    </Form.Control>
                  </Grid>
                </Form.Field>
              </Grid>
            </Form.Root>
          </ScrollArea>
        </Card>
      </Flex>
    </Container>
  );
};
