const MovieStorage = require("./MovieStorage");

class Movie {
    constructor(body) {
        this.body = body;
    }

    async add() {
        try {
            const response = await MovieStorage.save(this.body)
            return response
        } catch (error) {
            return { success: false, msg: error }
        }
    }
};

module.exports = Movie;