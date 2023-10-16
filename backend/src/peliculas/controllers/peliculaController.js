const Pelicula = require("../models/peliculaModel");

exports.findAll = async (req, res, next) => {
  try {
    const peliculas = await Pelicula.find();
    res.status(200).json(peliculas);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const pelicula = await Pelicula.findById(req.params.id).exec();
    if (!pelicula) {
      return res
        .status(404)
        .send({ message: "Pelicula con este ID no existe 😔" });
    }
    res.send(pelicula);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const pelicula = new Pelicula(req.body);
    const savedPelicula = await pelicula.save();
    res.send(savedPelicula);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const pelicula = await Pelicula.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!pelicula) {
      return res
        .status(404)
        .send({ message: "Pelicula no encontrado para ser ACTUALIZADO 😔" });
    }
    res.send(pelicula);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const pelicula = await Pelicula.findByIdAndRemove(req.params.id);
    if (!pelicula) {
      return res
        .status(404)
        .send({ message: "Pelicula no encontrado para ser ELIMINADO 😔" });
    }
    res.send({ message: "Pelicula eliminado exitosamente" });
  } catch (error) {
    next(error);
  }
};

exports.findByGenero = async (req, res, next) => {
  const generoId = req.params.generoId;

  try {
    const peliculas = await Pelicula.find({ generoPrincipal: generoId });

    if (peliculas.length === 0) {
      return res.status(404).json({ message: 'No se encontraron películas para este género.' });
    }

    res.status(200).json(peliculas);
  } catch (error) {
    next(error);
  }
};
