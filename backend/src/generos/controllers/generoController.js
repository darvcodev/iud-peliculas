const Genero = require("../models/generoModel");

exports.findAll = async (req, res, next) => {
  try {
    const generos = await Genero.find();
    res.status(200).json(generos);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const genero = await Genero.findById(req.params.id).exec();
    if (!genero) {
      return res
        .status(404)
        .send({ message: "Genero con este ID no existe 😔" });
    }
    res.send(genero);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const genero = new Genero(req.body);
    const savedGenero = await genero.save();
    res.send(savedGenero);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const genero = await Genero.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!genero) {
      return res
        .status(404)
        .send({ message: "Genero no encontrado para ser ACTUALIZADO 😔" });
    }
    res.send(genero);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const genero = await Genero.findByIdAndRemove(req.params.id);
    if (!genero) {
      return res
        .status(404)
        .send({ message: "Genero no encontrado para ser ELIMINADO 😔" });
    }
    res.send({ message: "Genero eliminado exitosamente" });
  } catch (error) {
    next(error);
  }
};
