var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 3009});
wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log('received: %s', message)
    })
    setInterval(() => {
        console.log('elaborating message');
        //logiche di creazione del messagio
        const message =  { text: 'Hello, this is server message!', sentAt: new Date() };
        ws.send(JSON.stringify(message));
    }, 3000);
})