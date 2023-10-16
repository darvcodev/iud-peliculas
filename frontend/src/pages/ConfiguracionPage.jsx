import React from "react";
import { Link } from "react-router-dom";

export const ConfiguracionPage = () => {
  return (
    <div className="mx-auto max-w-7xl my-8  px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white text-center">
        Configuración
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <Link
          to={"/configuracion/generos"}
          className="bg-gray-700 text-white px-3 py-2 rounded-md text-2xl font-bold w-full h-20 text-center flex items-center justify-center"
        >
          Generos 🎭
        </Link>
        <Link
          to={"/configuracion/tipos"}
          className="bg-gray-700 text-white px-3 py-2 rounded-md text-2xl font-bold w-full h-20 text-center flex items-center justify-center"
        >
          Tipos 📄
        </Link>
        <Link
          to={"/configuracion/directores"}
          className="bg-gray-700 text-white px-3 py-2 rounded-md text-2xl font-bold w-full h-20 text-center flex items-center justify-center"
        >
          Directores 🎬
        </Link>
        <Link
          to={"/configuracion/productoras"}
          className="bg-gray-700 text-white px-3 py-2 rounded-md text-2xl font-bold w-full h-20 text-center flex items-center justify-center"
        >
          Productoras 🎥
        </Link>
        <Link
          to={"/configuracion/peliculas"}
          className="bg-gray-700 text-white px-3 py-2 rounded-md text-2xl font-bold w-full h-20 text-center flex items-center justify-center"
        >
          Peliculas 🎞
        </Link>
      </div>
    </div>
  );
};
