import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const url = "http://www.omdbapi.com/?apikey=90a3f683  ";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [naming, setNaming] = useState("batman");

  const fetchMovies = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        // console.log(movies);
      }

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${url}&s=${naming}`);
  }, [naming]);
  return (
    <AppContext.Provider value={{ movies, naming, setNaming }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
