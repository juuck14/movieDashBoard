require('fix-esm').register()

const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const morgan = require('morgan')

const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
    path: '/socket.io',
    cors: {
      origin: '*',
      methods: ["GET", "POST"]
    }
});

const errorHandler = (handler) => {
    const handleError = (err) => {
        console.error("please handle me", err);
    };
  
    return (...args) => {
        try {
            const ret = handler.apply(this, args);
            if (ret && typeof ret.catch === "function") {
            // async handler
            ret.catch(handleError);
            }
        } catch (e) {
            // sync handler
            handleError(e);
        }
    };
};

io.on('connection', async (socket) => { //웹 소켓 연결 시
    try {
        const req = socket.request;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('새로운 클라이언트 접속 !!', ip, socket.id);
    
        socket.on('disconnect', () => { //연결 종료 시
            console.log('클라이언트 접속 해제', ip, socket.id);
            clearInterval(socket.interval);
        });
        socket.on('error', (error) => { //에러 시
            console.error('socket.io Error : ', error);
        });
        socket.on('joinRoomServer', (data) => {
            socket.join(data.room)
            io.to(data.room).emit('joinRoomClient',`${data.id} 님이 ${data.room} 방에 입장 하셨습니다.`)
        })

        const send =  (data) => {
            console.log('nuxt 웹에서 받은 메세지 : ', data);
            io.to(data.movie_idx).emit("receive", data)
        }
        socket.on('send', errorHandler(send));
        
    } catch (error) {
        console.error(error)
    }
});


server.listen(8080, () => {
    console.log('listening on *:8080');
});

dotenv.config();

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan("dev"))

const session = require('./config/session');
app.use(session)


const user = require('./routes/user')
app.use("/", user);

const movie = require('./routes/movie');
app.use("/movie/", movie);

const router = express.Router()

router.post("/test", (req, res) => {
    console.log('session is', req.session)
})
app.use("/test/", router)

module.exports = {
    path: "/api",
    handler: app
}
