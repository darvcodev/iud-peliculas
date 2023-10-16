import React, { useEffect, useState } from "react";
import {
  generosAPI,
  tiposAPI,
  directoresAPI,
  productorasAPI,
  peliculasAPI,
} from "../../api/api";
import Swal from "sweetalert2";

export const PeliculasForm = () => {
  const [titulo, setTitulo] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [serial, setSerial] = useState("");
  const [urlPelicula, setUrlPelicula] = useState("");
  const [imagenPortada, setImagenPortada] = useState("");
  const [anoEstreno, setAnoEstreno] = useState("");
  const [generoPrincipal, setGeneroPrincipal] = useState("");
  const [directorPrincipal, setDirectorPrincipal] = useState("");
  const [productora, setProductora] = useState("");
  const [tipo, setTipo] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [movieToUpdate, setMovieToUpdate] = useState(null);

  const [generos, setGeneros] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [productoras, setProductoras] = useState([]);

  useEffect(() => {
    async function fetchPeliculas() {
      try {
        const data = await peliculasAPI.getAll();
        setPeliculas(data);
      } catch (error) {
        console.error("Error al obtener las películas:", error);
      }
    }

    async function fetchGeneros() {
      try {
        const generosData = await generosAPI.getAll();
        setGeneros(generosData);
      } catch (error) {
        console.error("Error al obtener los géneros de películas:", error);
      }
    }

    async function fetchTipos() {
      try {
        const tiposData = await tiposAPI.getAll();
        setTipos(tiposData);
      } catch (error) {
        console.error("Error al obtener los tipos de películas:", error);
      }
    }

    async function fetchDirectores() {
      try {
        const directoresData = await directoresAPI.getAll();
        setDirectores(directoresData);
      } catch (error) {
        console.error("Error al obtener los directores de películas:", error);
      }
    }

    async function fetchProductoras() {
      try {
        const productorasData = await productorasAPI.getAll();
        setProductoras(productorasData);
      } catch (error) {
        console.error("Error al obtener las productoras de películas:", error);
      }
    }

    fetchGeneros();
    fetchTipos();
    fetchDirectores();
    fetchProductoras();
    fetchPeliculas();
  }, [peliculas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movieToUpdate) {
      peliculasAPI
        .update(movieToUpdate._id, {
          titulo,
          sinopsis,
          serial,
          urlPelicula,
          imagenPortada,
          anoEstreno,
          generoPrincipal,
          directorPrincipal,
          productora,
          tipo,
        })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Película actualizada con éxito",
            showConfirmButton: true,
            confirmButtonText: "Aceptar",
            timer: 1500,
          });
          setMovieToUpdate(null);
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
      const newPelicula = {
        titulo,
        sinopsis,
        serial,
        urlPelicula,
        imagenPortada,
        anoEstreno,
        generoPrincipal,
        directorPrincipal,
        productora,
        tipo,
      };

      peliculasAPI
        .create(newPelicula)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Película creada con éxito",
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

    setTitulo("");
    setSinopsis("");
    setSerial("");
    setUrlPelicula("");
    setImagenPortada("");
    setAnoEstreno("");
    setGeneroPrincipal("");
    setDirectorPrincipal("");
    setProductora("");
    setTipo("");
  };

  const deleteMovie = (id) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar esta película?",
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        peliculasAPI
          .delete(id)
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: "Película eliminada con éxito",
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
    });
  };

  const updateMovie = (id) => {
    const movie = peliculas.find((pelicula) => pelicula._id === id);
    setMovieToUpdate(movie);
    setTitulo(movie.titulo);
    setSinopsis(movie.sinopsis);
    setSerial(movie.serial);
    setUrlPelicula(movie.urlPelicula);
    setImagenPortada(movie.imagenPortada);
    setAnoEstreno(movie.anoEstreno);
    setGeneroPrincipal(movie.generoPrincipal);
    setDirectorPrincipal(movie.directorPrincipal);
    setProductora(movie.productora);
    setTipo(movie.tipo);
  };

  return (
    <div className="grid grid-cols-3 gap-4 px-12 mb-8">
      <div className="w-full col-span-1 mx-auto p-6 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-8">
        <h2 className="text-2xl font-medium text-center text-gray-900 dark:text-white">
          {movieToUpdate ? "Actualizar Película" : "Crear nueva Película"}
        </h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-6">
            <label
              htmlFor="titulo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Título
            </label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Título de la Película"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="sinopsis"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sinopsis
            </label>
            <textarea
              id="sinopsis"
              value={sinopsis}
              onChange={(e) => setSinopsis(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Sinopsis de la Película"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="serial"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Serial
            </label>
            <input
              type="text"
              id="serial"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Serial de la Película"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="urlPelicula"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              URL de la Película
            </label>
            <input
              type="text"
              id="urlPelicula"
              value={urlPelicula}
              onChange={(e) => setUrlPelicula(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="URL de la Película"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="imagenPortada"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              URL de la Imagen de Portada
            </label>
            <input
              type="text"
              id="imagenPortada"
              value={imagenPortada}
              onChange={(e) => setImagenPortada(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="URL de la Imagen de Portada"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="anoEstreno"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Año de Estreno
            </label>
            <input
              type="number"
              id="anoEstreno"
              value={anoEstreno}
              onChange={(e) => setAnoEstreno(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Año de Estreno"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="generoPrincipal"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Género Principal
            </label>
            <select
              id="generoPrincipal"
              value={generoPrincipal}
              onChange={(e) => setGeneroPrincipal(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Selecciona un Género</option>
              {generos.map((genero) => (
                <option key={genero._id} value={genero._id}>
                  {genero.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="directorPrincipal"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Director Principal
            </label>
            <select
              id="directorPrincipal"
              value={directorPrincipal}
              onChange={(e) => setDirectorPrincipal(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Selecciona un Director</option>
              {directores.map((director) => (
                <option key={director._id} value={director._id}>
                  {director.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="productora"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Productora
            </label>
            <select
              id="productora"
              value={productora}
              onChange={(e) => setProductora(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Selecciona una Productora</option>
              {productoras.map((productora) => (
                <option key={productora._id} value={productora._id}>
                  {productora.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="tipo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tipo
            </label>
            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Selecciona un Tipo</option>
              {tipos.map((tipoOption) => (
                <option key={tipoOption._id} value={tipoOption._id}>
                  {tipoOption.nombre}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className={`text-white ${
              movieToUpdate
                ? "bg-amber-700 hover:bg-amber-800 focus:ring-4"
                : "bg-blue-700 hover:bg-blue-800 focus:ring-4"
            } focus:outline-none focus:ring-${
              movieToUpdate ? "amber-300" : "blue-300"
            } font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-${
              movieToUpdate ? "amber-600" : "blue-600"
            } dark:hover:bg-${
              movieToUpdate ? "amber-700" : "blue-700"
            } dark:focus:ring-${movieToUpdate ? "amber-800" : "blue-800"}`}
          >
            {movieToUpdate ? "Actualizar Película" : "Crear nueva Película"}
          </button>
        </form>
      </div>

      <div className="w-full col-span-2 mx-auto p-6 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-8">
        <h2 className="text-2xl font-medium text-center text-gray-900 dark:text-white">
          Todas las Películas
        </h2>
        {peliculas.map((pelicula) => {
          return (
            <div key={pelicula._id} className="flex justify-between mt-4">
              <div>
                <p className="text-xl font-medium text-gray-900 dark:text-white">
                  {pelicula.titulo}
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => updateMovie(pelicula._id)}
                  className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover-bg-amber-700 dark:focus:ring-amber-800"
                >
                  Actualizar
                </button>
                <button
                  onClick={() => deleteMovie(pelicula._id)}
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
