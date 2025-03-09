import { Provider } from "./components/ui/provider"; // Custom provider
import React from "react";
import ReactDOM from "react-dom/client"; // React 18 method for creating root
import App from "./App"; // Main App component
import theme from "./theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
// Create the root element and render the app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App></App>
    </ChakraProvider>
  </React.StrictMode>
);
