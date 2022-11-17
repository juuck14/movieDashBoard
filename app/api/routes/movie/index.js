const express = require("express");
const router = express.Router();

const ctrl = require("./movieController");

router.post("/add", ctrl.process.add);



module.exports = router;