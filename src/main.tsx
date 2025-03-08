import { Provider } from "./components/ui/provider"; // Custom provider
import React from "react";
import ReactDOM from "react-dom/client"; // React 18 method for creating root
import App from "./App"; // Main App component

// Create the root element and render the app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider> {/* Custom Provider */}
      <App /> {/* Main App component */}
    </Provider>
  </React.StrictMode>
);
