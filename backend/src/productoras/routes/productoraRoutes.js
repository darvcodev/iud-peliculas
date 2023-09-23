const express = require("express");
const productoraController = require("../controllers/productoraController");

const router = express.Router();

router.get("/", productoraController.findAll);
router.get("/:id", productoraController.findOne);
router.post("/", productoraController.create);
router.put("/:id", productoraController.update);
router.delete("/:id", productoraController.delete);

module.exports = router;
