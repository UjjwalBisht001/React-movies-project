import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies } = useGlobalContext();
  // console.log(data);

  return (
    <section className="w-[90vw] max-w-[1170px] grid gap-[2rem] m-[0, auto] grid-cols-4 px-5 text-center">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;

        return (
          <Link
            to={`/movies/${id}`}
            key={id}
            className="relative overflow-hidden"
          >
            <article>
              <img
                src={poster === "N/A" ? url : poster}
                alt={title}
                className="h-80 w-80 object-contain "
              />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
