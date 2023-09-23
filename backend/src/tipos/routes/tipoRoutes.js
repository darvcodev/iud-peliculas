const express = require("express");
const tipoController = require("../controllers/tipoController");

const router = express.Router();

router.get("/", tipoController.findAll);
router.get("/:id", tipoController.findOne);
router.post("/", tipoController.create);
router.put("/:id", tipoController.update);
router.delete("/:id", tipoController.delete);

module.exports = router;
