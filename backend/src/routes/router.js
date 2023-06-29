const express = require("express");
//
const router = express.Router();
// const tutorialRouter = require("./tutorialRouter");
const adminRouter = require("./adminRouter");

router.use("/admin", adminRouter);

// router.use("/tutorials", tutorialRouter);
module.exports = router;
