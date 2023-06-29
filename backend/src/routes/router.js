const express = require("express");

const router = express.Router();
const phoneRouter = require("./phoneRouter");

router.use("/phone", phoneRouter);
module.exports = router;
