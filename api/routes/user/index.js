const express = require("express");
const router = express.Router();

const ctrl = require("./userController");

router.get("/", ctrl.output.index);
router.get("/login", ctrl.output.login);
router.get("/checkDuplicate", ctrl.output.checkDuplicate);

router.post("/register", ctrl.process.register);



module.exports = router;