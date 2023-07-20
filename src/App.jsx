import React from "react";

//Components
import Header from "./componentes/Header";
import Home from "./componentes/Home";

//Styles
import { GlobalStyle } from "./GlobalStyle";



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App
