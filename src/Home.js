import React from "react";
import { useGlobalContext } from "./context";
import Movies from "./movies";

const Home = () => {
  const { naming, setNaming } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center m-8">
      <form onSubmit={handleSubmit} className="mx-8">
        <h2 className="text-3xl ">Search Movies</h2>
        <input
          type="text"
          value={naming}
          onChange={(e) => setNaming(e.target.value)}
       className="w-[100%] max-w-[600px] my-10 bg-slate-200 h-10 text-2xl px-4 "
        />
      </form>
      <Movies  />
    </div>
  );
};

export default Home;
