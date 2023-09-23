// src/api.js

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
});

export const getGeneros = async () => {
  try {
    const response = await instance.get("/generos");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createGenero = async (generoData) => {
  try {
    const response = await instance.post("/generos", generoData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
