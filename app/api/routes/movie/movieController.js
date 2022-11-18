const Movie = require('../../models/movie/Movie')

const output = {
    info: async (req, res) => {
        const movie = new Movie(req.query)
        const response = await movie.info().catch(console.error);
        return res.json(response);
    }
}

const process = {
    add: async (req, res) => {
        const movie = new Movie(req.body)
        const response = await movie.add().catch(console.error);
        return res.json(response);
    }
}

module.exports = {
    output,
    process
}