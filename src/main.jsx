import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";


const theme = createTheme({
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <React.StrictMode>
      <div className="w-full h-full">
        <App />
      </div>
    </React.StrictMode>
  </MantineProvider>
);
