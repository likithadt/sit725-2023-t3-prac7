let express = require('express');
let app = express();
let port = process.env.port || 3000;

const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

var data = new Date();

io.on('connection',(socket)=>{
    console.log('Client connection established succesfully');
    socket.on('disconnect', () => {
        console.log('User has been disconnected');
    });

    var i = 1000;
    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
        socket.emit('message', i++ );
    }, 2000)
});

http.listen(port, ()=>{
    console.log('Express server started successfully');
});