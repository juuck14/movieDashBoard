const express = require("express");
const router = express.Router();

const ctrl = require("./movieController");

router.get("/info", ctrl.output.info);
router.post("/add", ctrl.process.add);



module.exports = router;