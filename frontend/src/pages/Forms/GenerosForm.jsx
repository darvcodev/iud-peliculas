import React, { useEffect, useState } from "react";
import { generosAPI } from "../../api/api";
import Swal from "sweetalert2";

export const GenerosForm = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [generos, setGeneros] = useState([]);
  const [genreToUpdate, setGenreToUpdate] = useState(null);

  useEffect(() => {
    async function fetchGeneros() {
      try {
        const data = await generosAPI.getAll();
        setGeneros(data);
      } catch (error) {
        console.error("Error al obtener los géneros:", error);
      }
    }

    fetchGeneros();
  }, [generos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (genreToUpdate) {
      generosAPI
        .update(genreToUpdate._id, { nombre, descripcion })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Genero actualizado con éxito",
            showConfirmButton: true,
            confirmButtonText: "Aceptar",
            timer: 1500,
          });
          setGenreToUpdate(null);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal!",
            confirmButtonText: "Aceptar",
          });
        });
    } else {
      const newGenero = {
        nombre,
        descripcion,
      };

      generosAPI
        .create(newGenero)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Genero creado con éxito",
            showConfirmButton: true,
            confirmButtonText: "Aceptar",
            timer: 1500,
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal!",
            confirmButtonText: "Aceptar",
          });
        });
    }

    setNombre("");
    setDescripcion("");
  };

  const deleteGenero = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, borrar!",
      cancelButtonText: "No, cancelar!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        generosAPI
          .delete(id)
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: "Genero eliminado con exito",
              showConfirmButton: true,
              confirmButtonText: "Aceptar",
              timer: 1500,
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo salio mal!",
              confirmButtonText: "Aceptar",
            });
          });
      }
    });
  };

  const updateGenero = (id) => {
    const selectedGenre = generos.find((genre) => genre._id === id);

    if (selectedGenre) {
      setNombre(selectedGenre.nombre);
      setDescripcion(selectedGenre.descripcion);
      setGenreToUpdate(selectedGenre);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 px-12">
      <div className="w-full col-span-1 mx-auto p-6 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-8">
        <h2 className="text-2xl font-medium text-center text-gray-900 dark:text-white">
          {genreToUpdate ? "Actualizar Genero" : "Crear nuevo Genero"}
        </h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-6">
            <label
              htmlFor="nombre"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre del Genero"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="descripcion"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Descripcion
            </label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descripcion del Genero"
            />
          </div>
          <button
            type="submit"
            className={`text-white ${
              genreToUpdate
                ? "bg-amber-700 hover:bg-amber-800 focus:ring-4"
                : "bg-blue-700 hover:bg-blue-800 focus:ring-4"
            } focus:outline-none focus:ring-${
              genreToUpdate ? "amber-300" : "blue-300"
            } font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-${
              genreToUpdate ? "amber-600" : "blue-600"
            } dark:hover:bg-${
              genreToUpdate ? "amber-700" : "blue-700"
            } dark:focus:ring-${genreToUpdate ? "amber-800" : "blue-800"}`}
          >
            {genreToUpdate ? "Actualizar Genero" : "Crear nuevo Genero"}
          </button>
        </form>
      </div>

      <div className="w-full col-span-2 mx-auto p-6 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-8">
        <h2 className="text-2xl font-medium text-center text-gray-900 dark:text-white">
          Todos los Generos
        </h2>
        {generos.map((genero) => {
          return (
            <div key={genero._id} className="flex justify-between mt-4">
              <div>
                <p className="text-xl font-medium text-gray-900 dark:text-white">
                  {genero.nombre}
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => updateGenero(genero._id)}
                  className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover-bg-amber-700 dark:focus:ring-amber-800"
                >
                  Actualizar
                </button>
                <button
                  onClick={() => deleteGenero(genero._id)}
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover-bg-red-700 dark:focus:ring-red-800"
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
