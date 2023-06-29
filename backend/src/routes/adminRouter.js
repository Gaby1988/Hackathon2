const express = require("express");

const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/", adminController.postAdmin);
router.get("/", adminController.getAll);
router.get("/:id", adminController.getAllByAdminId);

module.exports = router;
