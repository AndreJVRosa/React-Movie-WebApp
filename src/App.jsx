import React from "react";
//Rounting
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

//Components
import Header from "./componentes/Header";
<<<<<<< HEAD
import Home from './componentes/Home';
=======
import Home from "./componentes/Home";
import Movie from "./componentes/Movie";
import NotFound from "./componentes/NotFound";
>>>>>>> main

//Styles
import { GlobalStyle } from "./GlobalStyle";





const App = () => (
    <Router>
      <Header />
<<<<<<< HEAD
      <Home />
=======
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
>>>>>>> main
      <GlobalStyle />
    </Router>
  );

export default App
