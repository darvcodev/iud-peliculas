import { Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { PeliculasPage, PeliculasGeneroPage, ConfiguracionPage } from "../pages";
import { GenerosForm, TiposForm, DirectoresForm, ProductorasForm, PeliculasForm } from "../pages/Forms";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/*" element={<PeliculasPage />} />
        <Route path="/por-genero/:generoId" element={<PeliculasGeneroPage />} />
        <Route path="/configuracion" element={<ConfiguracionPage />} />
        <Route path="/configuracion/generos" element={<GenerosForm />} />
        <Route path="/configuracion/tipos" element={<TiposForm />} />
        <Route path="/configuracion/directores" element={<DirectoresForm />} />
        <Route path="/configuracion/productoras" element={<ProductorasForm />} />
        <Route path="/configuracion/peliculas" element={<PeliculasForm />} />
      </Routes>
    </>
  );
};
