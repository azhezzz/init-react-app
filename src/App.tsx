import React from "react";
import AppProvider from "./context";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default App;
