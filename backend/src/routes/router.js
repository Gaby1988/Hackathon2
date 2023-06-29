const express = require("express");

const router = express.Router();
// const tutorialRouter = require("./tutorialRouter");
const adminRouter = require("./adminRouter");
const phoneRouter = require("./phoneRouter");

router.use("/admin", adminRouter);
router.use("/phone", phoneRouter);

module.exports = router;
