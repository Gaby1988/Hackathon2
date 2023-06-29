const express = require("express");
const router = express.Router();

const phoneControllers = require("../controllers/phoneControllers");

router.get("/", phoneControllers.getAll);

module.exports = router;