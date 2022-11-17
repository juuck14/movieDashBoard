const User = require('../../models/user/User')

const output = {
    index: (req, res) => {
        console.log("asdsda");
        res.redirect("login")
    },
    login: (req, res) => {
        res.send("logininini")
    },
    checkDuplicate: async (req, res) => {
        const user = new User(req.query)
        const response = await user.checkDuplicate();
        return res.json(response);
    },
}

const process = {
    register: async (req, res) => {
        const user = new User(req.body)
        const response = await user.register();
        return res.json(response);
    }
}

module.exports = {
    output,
    process
}