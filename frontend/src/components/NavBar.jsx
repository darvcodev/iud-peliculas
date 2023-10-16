import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { generosAPI } from "../api/api";

export const NavBar = () => {
  const [generos, setGeneros] = useState([]);
  const navigate = useNavigate();

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

  const configuracion = () => {
    navigate("/configuracion");
  };

  return (
    <nav className="bg-[#141A32]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6 mt-2">
              <div className="flex space-x-4">
                <Link
                  to={"/"}
                  className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Todas{" "}
                </Link>
                {generos.map((genero) => {
                  return (
                    <Link
                      key={genero._id}
                      to={`/por-genero/${genero._id}`}
                      className="bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {genero.nombre}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              onClick={configuracion}
              className="bg-blue-600 py-2 px-6 rounded-lg font-bold text-white hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              Configuración ⚙️
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
