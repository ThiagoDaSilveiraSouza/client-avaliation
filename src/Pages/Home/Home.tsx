import { useEffect, useState, FormEventHandler } from "react";
import {
  Button,
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
  observation: "",
};

export const Home = () => {
  const { currentTheme } = UseTheme();
  const [userResponse, setUserResponse] = useState(defaultUserResponse);

  const updateStarResponse = (
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
        <Card
          size={"5"}
          style={{
            maxWidth: "95%",
            width: "400px",
            padding: "0",
            boxSizing: "border-box",
            margin: "0",
          }}
          variant="classic"
        >
          <SwitchTheme />
          <ScrollArea type="auto" scrollbars="vertical">
            <Form.Root onSubmit={formHandlerSubmit}>
              <Grid gap={"4"}>
                <Heading size={"6"} align={"center"}>
                  Conte para a gente sua experiência
                </Heading>

                <Form.Field name="food">
                  <Grid gap={"2"}>
                    <Text size={"4"} weight={"medium"}>
                      Qualidade da Comida:
                    </Text>
                    <StartPontuation
                      onChange={(value) =>
                        updateStarResponse("food", value + 1)
                      }
                    />
                  </Grid>
                </Form.Field>
                <Form.Field name="service">
                  <Grid gap={"2"}>
                    <Text size={"4"} weight={"medium"}>
                      Atendimento:
                    </Text>
                    <StartPontuation
                      onChange={(value) =>
                        updateStarResponse("service", value + 1)
                      }
                    />
                  </Grid>
                </Form.Field>
                <Form.Field name="environmentAndCleaning">
                  <Grid gap={"2"}>
                    <Text size={"4"} weight={"medium"}>
                      Ambiente e Limpeza:
                    </Text>
                    <StartPontuation
                      onChange={(value) =>
                        updateStarResponse("environmentAndCleaning", value + 1)
                      }
                    />
                  </Grid>
                </Form.Field>
                <Form.Field name="waiting">
                  <Grid gap={"2"}>
                    <Text size={"4"} weight={"medium"}>
                      Tempo de Espera:
                    </Text>
                    <StartPontuation
                      onChange={(value) =>
                        updateStarResponse("waiting", value + 1)
                      }
                    />
                  </Grid>
                </Form.Field>
                <Form.Field name="valueForMoney">
                  <Grid gap={"2"}>
                    <Text size={"4"} weight={"medium"}>
                      Valor pelo Dinheiro:
                    </Text>
                    <StartPontuation
                      onChange={(value) =>
                        updateStarResponse("valueForMoney", value + 1)
                      }
                    />
                  </Grid>
                </Form.Field>
                <Form.Field name="observation">
                  <Grid gap={"2"}>
                    <Text size={"4"} weight={"medium"}>
                      Fale com a gente!
                    </Text>
                    <Form.Control asChild>
                      <TextArea
                        onChange={(event) => {
                          setUserResponse((prevState) => {
                            return {
                              ...prevState,
                              observation: event.target.value,
                            };
                          });
                        }}
                      />
                    </Form.Control>
                  </Grid>
                </Form.Field>
                <Form.Submit asChild>
                  <Button size={"4"}>Enviar</Button>
                </Form.Submit>
              </Grid>
            </Form.Root>
          </ScrollArea>
        </Card>
      </Flex>
    </Container>
  );
};
