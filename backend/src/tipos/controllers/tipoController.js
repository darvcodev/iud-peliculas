const Tipo = require("../models/tipoModel");

exports.findAll = async (req, res, next) => {
  try {
    const tipos = await Tipo.find();
    res.status(200).json(tipos);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const tipo = await Tipo.findById(req.params.id).exec();
    if (!tipo) {
      return res
        .status(404)
        .send({ message: "Tipo con este ID no existe 😔" });
    }
    res.send(tipo);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const tipo = new Tipo(req.body);
    const savedTipo = await tipo.save();
    res.send(savedTipo);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const tipo = await Tipo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!tipo) {
      return res
        .status(404)
        .send({ message: "Tipo no encontrado para ser ACTUALIZADO 😔" });
    }
    res.send(tipo);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const tipo = await Tipo.findByIdAndRemove(req.params.id);
    if (!tipo) {
      return res
        .status(404)
        .send({ message: "Tipo no encontrado para ser ELIMINADO 😔" });
    }
    res.send({ message: "Tipo eliminado exitosamente" });
  } catch (error) {
    next(error);
  }
};
