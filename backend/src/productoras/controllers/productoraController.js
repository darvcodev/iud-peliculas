const Productora = require("../models/productoraModel");

exports.findAll = async (req, res, next) => {
  try {
    const productoras = await Productora.find();
    res.status(200).json(productoras);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const productora = await Productora.findById(req.params.id).exec();
    if (!productora) {
      return res
        .status(404)
        .send({ message: "Productora con este ID no existe 😔" });
    }
    res.send(productora);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const productora = new Productora(req.body);
    const savedProductora = await productora.save();
    res.send(savedProductora);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const productora = await Productora.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!productora) {
      return res
        .status(404)
        .send({ message: "Productora no encontrado para ser ACTUALIZADO 😔" });
    }
    res.send(productora);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const productora = await Productora.findByIdAndRemove(req.params.id);
    if (!productora) {
      return res
        .status(404)
        .send({ message: "Productora no encontrado para ser ELIMINADO 😔" });
    }
    res.send({ message: "Productora eliminado exitosamente" });
  } catch (error) {
    next(error);
  }
};
