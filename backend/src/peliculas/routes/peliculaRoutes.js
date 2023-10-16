const express = require("express");
const peliculaController = require("../controllers/peliculaController");

const router = express.Router();

router.get("/", peliculaController.findAll);
router.get("/:id", peliculaController.findOne);
router.post("/", peliculaController.create);
router.put("/:id", peliculaController.update);
router.delete("/:id", peliculaController.delete);
router.get("/por-genero/:generoId", peliculaController.findByGenero);

module.exports = router;
