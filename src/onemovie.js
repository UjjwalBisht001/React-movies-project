import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { url  } from "./context";

const SingleMovie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const fetchMovies = async (url) => {
    const resp = await fetch(url);

    const data = await resp.json();
    if (data.Response === "True") {
    }
    setMovie(data);
  };
  useEffect(() => {
    fetchMovies(`${url}&i=${id}`);
  });

  const { Poster: poster, Title: title, Year: year } = movie;

  return (
    <div className="my-10">
      <section className="flex justify-center ">
        <img src={poster} alt={title} />
      </section>
      <div className="text-center ">
        <h2 className="text-4xl">{title}</h2>
        <h2 className="py-4 text-4xl">{year}</h2>

        <Link to="/" className="bg-slate-600 text-white py-[6px] px-6 ">
          Back To Movies
        </Link>
      </div>
    </div>
  );
};

export default SingleMovie;
