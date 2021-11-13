import React, { useState } from "react";
import { useQuery } from "react-query";
import Planets from "./Planets";

// const useGetFilms = () =>
//   useQuery("films", async () => {
//     return fetch("http://swapi.dev/api/films").then((res) => res.json());
//   });

const useGetFilm = (film) => {
  return useQuery(
    film,
    async () => {
      const res = await fetch(`http://swapi.dev/api/films?search=${film}`);
      const data = await res.json();
      return data;
    },
    { enabled: !!film }
  );
};

const SearchFilms = ({ film }) => {
  const {
    isError,
    error,
    isFetching,
    isLoading,
    data: { results = [] } = {},
  } = useGetFilm(film);

  return (
    <div>
      {isLoading
        ? "loading ..."
        : isError
        ? error.message
        : results.map((item) => (
            <div key={item.title}>
              <p>{item.title}</p>
              <ul>
                {item.planets.map((planet) => {
                  return (
                    <li key={planet}>
                      <Planets planetUrl={planet} />
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

      {isFetching && "Obnovlenie"}
    </div>
  );
};

const Films = () => {
  const [film, setFilm] = useState("");

  return (
    <div>
      <input
        type="text"
        value={film}
        onChange={(e) => setFilm(e.target.value)}
      />

      <hr />

      {film.trim() && <SearchFilms film={film} />}
    </div>
  );
};

export { Films as default };
