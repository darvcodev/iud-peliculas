import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { peliculasAPI } from "../api/api";

export const PeliculasGeneroPage = () => {
  const [peliculas, setPeliculas] = useState([]);
  const { generoId } = useParams();

  console.log("generoId:", generoId);

  useEffect(() => {
    async function fetchPeliculasById() {
      try {
        const data = await peliculasAPI.getByGenero(generoId);
        setPeliculas(data);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
        setPeliculas([]);
      }
    }

    fetchPeliculasById();
  }, [generoId]);

  return (
    <div className="mx-auto max-w-7xl my-8 px-4 sm:px-6 lg:px-8 text-white">
      <h1 className="text-3xl font-bold text-center">Películas</h1>
      {peliculas.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 mt-6">
          {peliculas.map((pelicula) => (
            <div
              key={pelicula._id}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                src={pelicula.imagenPortada}
                alt={pelicula.titulo}
                className="w-full rounded-lg"
              />
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white truncate mt-2">
                {pelicula.titulo}
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {pelicula.sinopsis}
              </p>
              <div className="mt-4">
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-400">
                  Año de Estreno
                </span>
                <div className="flex items-center mt-1">
                  <span className="bg-blue-500 px-2 py-0.5 rounded-md text-sm font-semibold text-white">
                    {pelicula.anoEstreno}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-96">
          <p className="text-white text-2xl">
            No hay películas para este género.
          </p>
        </div>
      )}
    </div>
  );
};
