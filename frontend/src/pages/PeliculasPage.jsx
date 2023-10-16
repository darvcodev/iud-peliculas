import React, { useEffect, useState } from "react";
import { peliculasAPI } from "../api/api";

export const PeliculasPage = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    async function fetchPeliculas() {
      try {
        const data = await peliculasAPI.getAll();
        setPeliculas(data);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    }

    fetchPeliculas();
  }, []);

  if (peliculas.length === 0) {
    return (
      <div className="text-white">
        <h1>Lista de Películas del Género</h1>
        <p>No hay películas para este género</p>
      </div>
    );
  }

  return (
    <div className="text-white">
      <h1>Lista de Películas del Género</h1>
      <ul>
        {peliculas.map((pelicula) => (
          <li key={pelicula._id}>{pelicula.titulo}</li>
        ))}
      </ul>
    </div>
  );
};
