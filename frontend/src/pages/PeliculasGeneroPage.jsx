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
    <div className="text-white">
      <h1>Lista de Películas del Género</h1>
      {peliculas.length > 0 ? (
        <ul>
          {peliculas.map((pelicula) => (
            <li key={pelicula._id}>{pelicula.titulo}</li>
          ))}
        </ul>
      ) : (
        <p>No hay películas para este género.</p>
      )}
    </div>
  );
};
