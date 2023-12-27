let socket = io();
        socket.on('number',(msg)=>{
            console.log('Random Number: ' + msg);
        });

        socket.on('message', (msg) => {
            console.log('Hello User: ' + msg)
        })