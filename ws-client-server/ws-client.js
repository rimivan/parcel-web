var ws = new WebSocket('ws://localhost:3009');
ws.onopen = function () {
    console.log('websocket connection established...')
    ws.send('hello')
}
ws.onmessage = function (message) {
    console.log('message receveid :',message);
}
