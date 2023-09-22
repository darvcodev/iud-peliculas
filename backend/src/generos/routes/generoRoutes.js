const express = require("express");
const generoController = require("../controllers/generoController");

const router = express.Router();

router.get("/", generoController.findAll);
router.get("/:id", generoController.findOne);
router.post("/", generoController.create);
router.put("/:id", generoController.update);
router.delete("/:id", generoController.delete);

module.exports = router;
