import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const styles = {
  globle: (props) => ({
    body: {
      bg: mode("grey.100", "#000")(props),
      color: mode("grey.800", "whiteAlpha.900")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark", // or 'dark'
  useSystemColorMode: "false",
};
const Theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={Theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
