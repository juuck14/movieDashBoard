const db = require('../../config/db')
class MovieStorage {

    static async list() {
        return new Promise((res, rej) => {
            const query = "SELECT * FROM movies";
            db.query(
                query, 
                [], 
                (err, data) => {
                    if(err) rej(`${err}`)
                    else res({ success: true, list: data })
                }
            )
        })
    }

    static async info(movieInfo) {
        return new Promise((res, rej) => {
            const query = "SELECT * FROM movies WHERE movie_idx = ?";
            db.query(
                query, 
                Object.values(movieInfo), 
                (err, data) => {
                    if(err) rej(`${err}`)
                    else res({ success: true, movieInfo: data[0] || {} })
                }
            )
        })
    }

    static async getComments(movieInfo) {
        return new Promise((res, rej) => {
            const query = "SELECT * FROM movie_comments WHERE movie_idx = ?";
            db.query(
                query, 
                Object.values(movieInfo), 
                (err, data) => {
                    if(err) rej(`${err}`)
                    else res({ success: true, comments: data })
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

    static async saveComment(comment) {
        return new Promise((res, rej) => {
            const query = "INSERT INTO movie_comments(movie_idx, id, text, image, regdate) VALUES(?, ?, ?, ?, ?)";
            db.query(
                query, 
                Object.values(comment), 
                (err, data) => {
                    if(err) rej(`${err}`)
                    else res({ success: true, idx : data.insertId })
                }
            )
        })
    }
}

module.exports = MovieStorage;
