const express = require("express");
const router = express.Router();

const ctrl = require("./movieController");

router.get("/list", ctrl.output.list);
router.get("/info", ctrl.output.info);
router.post("/add", ctrl.process.add);
router.post("/addComment", ctrl.process.addComment);



module.exports = router;