const e = require('express');
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
    login: async (req, res) => {
        const user = new User(req.body)
        const response = await user.login();
        if(response.success){
            req.session.userId = req.body.id;
            return res.json(response);
        } else{
            return res.json(response);
        }
    },
    logout: async (req, res) => {
        req.session.destroy();
        return res.json({ success: true });
    },
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