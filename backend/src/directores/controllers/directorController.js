const Director = require("../models/directorModel");

exports.findAll = async (req, res, next) => {
  try {
    const directors = await Director.find();
    res.status(200).json(directors);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const director = await Director.findById(req.params.id).exec();
    if (!director) {
      return res
        .status(404)
        .send({ message: "Director con este ID no existe 😔" });
    }
    res.send(director);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const director = new Director(req.body);
    const savedDirector = await director.save();
    res.send(savedDirector);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const director = await Director.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!director) {
      return res
        .status(404)
        .send({ message: "Director no encontrado para ser ACTUALIZADO 😔" });
    }
    res.send(director);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const director = await Director.findByIdAndRemove(req.params.id);
    if (!director) {
      return res
        .status(404)
        .send({ message: "Director no encontrado para ser ELIMINADO 😔" });
    }
    res.send({ message: "Director eliminado exitosamente" });
  } catch (error) {
    next(error);
  }
};
