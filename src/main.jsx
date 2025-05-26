import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";
import AllRoutes from "./routes/AllRoutes.jsx";

function App() {
  const [colorScheme, setColorScheme] = useState("light");

  const toggleColorScheme = () => {
    const newScheme = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(newScheme);
    // Add/remove dark class for Tailwind
    document.documentElement.classList.toggle("dark", newScheme === "dark");
  };

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme }}
    >
      <React.StrictMode>
      <AllRoutes toggleColorScheme={toggleColorScheme} colorScheme={colorScheme} /></React.StrictMode>
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
