const Movie = require('../../models/movie/Movie')

const output = {
}

const process = {
    add: async (req, res) => {
        const user = new Movie(req.body)
        const response = await user.add().catch(console.error);
        return res.json(response);
    }
}

module.exports = {
    output,
    process
}