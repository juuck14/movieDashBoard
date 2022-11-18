const db = require('../../config/db')
class MovieStorage {

    static async info(movieInfo) {
        return new Promise((res, rej) => {
            const query = "SELECT * FROM movies WHERE movie_idx = ?";
            db.query(
                query, 
                Object.values(movieInfo), 
                (err, data) => {
                    if(err) rej(`${err}`)
                    else res({ success: true, data })
                }
            )
        })
    }

    static async save(movieInfo) {
        return new Promise((res, rej) => {
            const query = "INSERT INTO movies(movie_name, movie_poster) VALUES(?, ?)";
            db.query(
                query, 
                Object.values(movieInfo), 
                (err, data) => {
                    if(err) rej(`${err}`)
                    else res({ success: true, idx : data.insertId })
                }
            )
        })
    }
}

module.exports = MovieStorage;
