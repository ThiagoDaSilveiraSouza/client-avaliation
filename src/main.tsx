import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { GlobalStyle } from "./GlobalStyle.ts";
import { ThemeProvider } from "./Context/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <Theme>
        <App />
      </Theme>
    </ThemeProvider>
  </React.StrictMode>
);
