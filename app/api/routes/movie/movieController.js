const Movie = require('../../models/movie/Movie')

const output = {
    list: async (req, res) => {
        const movie = new Movie()
        const response = await movie.list()
        return res.json(response);
    },
    info: async (req, res) => {
        const movie = new Movie(req.query)
        const response = await movie.info().catch(console.error);
        const commentResponse = await movie.getComments().catch(console.error);
        return res.json(Object.assign(response, commentResponse));
    }
}

const process = {
    add: async (req, res) => {
        const movie = new Movie(req.body)
        const response = await movie.add().catch(console.error);
        return res.json(response);
    },
    addComment: async (req, res) => {
        const movie = new Movie(req.body)
        const response = await movie.addComment();
        return res.json(response);
    }
}

module.exports = {
    output,
    process
}