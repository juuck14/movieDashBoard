require('fix-esm').register()

const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const morgan = require('morgan')

const app = express()
dotenv.config();

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan("dev"))

const user = require('./routes/user')
app.use("/", user);

const movie = require('./routes/movie')
app.use("/movie/", movie);

app.get("/test", (req, res) => {
    setTimeout(() => {
        res.send("eded")
    }, 1000);
})

module.exports = {
    path: "/api",
    handler: app
}
