import * as Models from "../../Models";

type IinitialState = {
  [key in keyof typeof Models]: typeof Models[key];
};

// Crie um tipo intermediário para definir propriedades mutáveis
type MutableInitialState = {
  [key in keyof typeof Models]?: typeof Models[key];
};

const mutableInitialState: MutableInitialState = {};

// Atribua valores às propriedades mutáveis
for (const key in Models) {
  mutableInitialState[key as keyof typeof mutableInitialState] = [];
}

// Agora, você pode criar o estado inicial com base nas propriedades mutáveis
const initialState: IinitialState = mutableInitialState;

const dataReducer = (state: IinitialState, action: any) => {
  // Implemente as lógicas do seu reducer aqui
  return state;
};