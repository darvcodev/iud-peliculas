const express = require("express");
const directorController = require("../controllers/directorController");

const router = express.Router();

router.get("/", directorController.findAll);
router.get("/:id", directorController.findOne);
router.post("/", directorController.create);
router.put("/:id", directorController.update);
router.delete("/:id", directorController.delete);

module.exports = router;
