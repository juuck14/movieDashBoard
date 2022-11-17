const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async checkDuplicate() {
        try {
            const { id } = await UserStorage.getUserInfo(this.body.id)
            return { success: true, duplicated: !!id };
        } catch (error) {
            return { success: false, msg: error }
        }
    }

    async login() {
        try {
            const body = this.body
            const { id, password } = await UserStorage.getUserInfo(body.id)
            
            if(id){
                if(id === body.id && password === body.password){
                    return { success: true };
                }
                return { success: false, msg: "notmatched" }
            }
            return { success: false, msg: "noided"}
        } catch (error) {
            return { success: false, msg: error }
        }

    }

    async register() {
        try {
            const response = await UserStorage.save(this.body)
            return response
        } catch (error) {
            return { success: false, msg: error }
        }
    }
};

module.exports = User;