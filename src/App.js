import React from "react";
import Movie from "./onemovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies/:id" element={<Movie />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
