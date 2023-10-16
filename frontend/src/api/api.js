import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
});

const generosAPI = {
  getAll: async () => {
    try {
      const response = await api.get("/generos");
      return response.data;
    } catch (error) {
      console.error("Error fetching generos:", error);
      throw error;
    }
  },

  create: async (generoData) => {
    try {
      const response = await api.post("/generos", generoData);
      return response.data;
    } catch (error) {
      console.error("Error creating genero:", error);
      throw error;
    }
  },

  update: async (generoId, generoData) => {
    try {
      const response = await api.put(`/generos/${generoId}`, generoData);
      return response.data;
    } catch (error) {
      console.error("Error updating genero:", error);
      throw error;
    }
  },

  delete: async (generoId) => {
    try {
      const response = await api.delete(`/generos/${generoId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting genero:", error);
      throw error;
    }
  },
};

const tiposAPI = {
  getAll: async () => {
    try {
      const response = await api.get("/tipos");
      return response.data;
    } catch (error) {
      console.error("Error fetching tipos:", error);
      throw error;
    }
  },

  create: async (tipoData) => {
    try {
      const response = await api.post("/tipos", tipoData);
      return response.data;
    } catch (error) {
      console.error("Error creating tipo:", error);
      throw error;
    }
  },

  update: async (tipoId, tipoData) => {
    try {
      const response = await api.put(`/tipos/${tipoId}`, tipoData);
      return response.data;
    } catch (error) {
      console.error("Error updating tipo:", error);
      throw error;
    }
  },

  delete: async (tipoId) => {
    try {
      const response = await api.delete(`/tipos/${tipoId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting tipo:", error);
      throw error;
    }
  },
};

const directoresAPI = {
  getAll: async () => {
    try {
      const response = await api.get("/directores");
      return response.data;
    } catch (error) {
      console.error("Error fetching directores:", error);
      throw error;
    }
  },

  create: async (directorData) => {
    try {
      const response = await api.post("/directores", directorData);
      return response.data;
    } catch (error) {
      console.error("Error creating director:", error);
      throw error;
    }
  },

  update: async (directorId, directorData) => {
    try {
      const response = await api.put(`/directores/${directorId}`, directorData);
      return response.data;
    } catch (error) {
      console.error("Error updating director:", error);
      throw error;
    }
  },

  delete: async (directorId) => {
    try {
      const response = await api.delete(`/directores/${directorId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting director:", error);
      throw error;
    }
  },
};

const productorasAPI = {
  getAll: async () => {
    try {
      const response = await api.get("/productoras");
      return response.data;
    } catch (error) {
      console.error("Error fetching productoras:", error);
      throw error;
    }
  },

  create: async (productoraData) => {
    try {
      const response = await api.post("/productoras", productoraData);
      return response.data;
    } catch (error) {
      console.error("Error creating productora:", error);
      throw error;
    }
  },

  update: async (productoraId, productoraData) => {
    try {
      const response = await api.put(
        `/productoras/${productoraId}`,
        productoraData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating productora:", error);
      throw error;
    }
  },

  delete: async (productoraId) => {
    try {
      const response = await api.delete(`/productoras/${productoraId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting productora:", error);
      throw error;
    }
  },
};

const peliculasAPI = {
  getAll: async () => {
    try {
      const response = await api.get("/peliculas");
      return response.data;
    } catch (error) {
      console.error("Error fetching peliculas:", error);
      throw error;
    }
  },

  create: async (peliculaData) => {
    try {
      const response = await api.post("/peliculas", peliculaData);
      return response.data;
    } catch (error) {
      console.error("Error creating pelicula:", error);
      throw error;
    }
  },

  update: async (peliculaId, peliculaData) => {
    try {
      const response = await api.put(`/peliculas/${peliculaId}`, peliculaData);
      return response.data;
    } catch (error) {
      console.error("Error updating pelicula:", error);
      throw error;
    }
  },

  delete: async (peliculaId) => {
    try {
      const response = await api.delete(`/peliculas/${peliculaId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting pelicula:", error);
      throw error;
    }
  },

  getByGenero: async (generoId) => {
    try {
      const response = await api.get(`/peliculas/por-genero/${generoId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching peliculas by genero:", error);
      throw error;
    }
  },
};

export { generosAPI, tiposAPI, directoresAPI, productorasAPI, peliculasAPI };
