const MovieStorage = require("./MovieStorage");

class Movie {
    constructor(body) {
        this.body = body;
    }

    async list() {
        try {
            const response = await MovieStorage.list()
            return response
        } catch (error) {
            return { success: false, msg: error }
        }
    }

    async info() {
        try {
            const response = await MovieStorage.info(this.body)
            return response
        } catch (error) {
            return { success: false, msg: error }
        }
    }

    async getComments() {
        try {
            const response = await MovieStorage.getComments(this.body)
            return response
        } catch (error) {
            return { success: false, msg: error }
        }
    }

    async add() {
        try {
            const response = await MovieStorage.save(this.body)
            return response
        } catch (error) {
            return { success: false, msg: error }
        }
    }

    async addComment() {
        try {
            const response = await MovieStorage.saveComment(this.body)
            return response
        } catch (error) {
            return { success: false, msg: error }
        }
    }
};

module.exports = Movie;