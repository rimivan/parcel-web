var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 3009});
wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log('received: %s', message)
    })
    setInterval(() => {
        console.log('elaboratin message');
        //logiche di creazione del messagio
        const message =  { text: 'Ciao', sentAt: new Date() };
        ws.send(JSON.stringify(message));
    }, 3000);
})