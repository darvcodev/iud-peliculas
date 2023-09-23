import React, { useEffect, useState } from "react";
import { getGeneros } from "./api/api";

function App() {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    async function fetchGeneros() {
      try {
        const data = await getGeneros();
        setGeneros(data);
      } catch (error) {
        console.error("Error al obtener los géneros:", error);
      }
    }

    fetchGeneros();
  }, []);

  return (
    <div>
      <h1>Lista de Géneros</h1>
      <ul>
        {generos.map((genero) => (
          <li key={genero._id}>{genero.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
