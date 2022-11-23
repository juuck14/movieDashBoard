const express = require("express");
const router = express.Router();

const app = express()
router.use((req, res, next) => {
    Object.setPrototypeOf(req, app.request);
    Object.setPrototypeOf(res, app.response);
    req.res = res;
    res.req = req;
    next();
});


const ctrl = require("./userController");

router.get("/", ctrl.output.index);
router.get("/checkDuplicate", ctrl.output.checkDuplicate);

router.post("/login", ctrl.process.login);
router.post("/logout", ctrl.process.logout);
router.post("/register", ctrl.process.register);



module.exports = router;