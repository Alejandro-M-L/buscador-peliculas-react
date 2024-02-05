import { useState } from "react";
import APP_PELICULAS_API_KEY from './apikey.js'
import { Resultados } from "./Resultados.jsx";

export const BuscadorPeliculas = () => {
  const urlBase = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = APP_PELICULAS_API_KEY;
  const [busqueda, setBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPeliculas();
    setBusqueda("")
  };
  const fetchPeliculas = async () => {
    try {
      //https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=APP_PELICULAS_API_KEY
      const response = await fetch(
        `${urlBase}?query=${busqueda}&api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data.results);
      setPeliculas(data.results);
    } catch (error) {
      console.error("Ha ocurrido un error: ", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}className="max-w-sm mx-auto">
      <div className="flex flex-row justify-between gap-2">
        <div className="flex-1 ">
          <input
            type="text"
            placeholder="Escribe una película"
            value={busqueda}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Buscar
          </button>
        </div>
      </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-4 p-4">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Resultados pelicula={pelicula} />
          </div>
        ))}
      </div>
    </div>
  );
};
//https://developer.themoviedb.org/docs