const path = require('path');
const express = require('express');
const app = express();



//Consiguracion
app.set('port', process.env. PORT || 3000);

//Archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//Empezar el servidor
const server =app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});

//webSocket
const SocketIO =require('socket.io');
const io = SocketIO(server);

const $user = $('#usernames');


io.on('connection', (socket)=>{
    console.log('new connection', socket.id);

    socket.on('chat:message' , (data)=>{

        io.sockets.emit('chat:message', data)
    });

    socket.on('chat:timeMessage', (data)=>{
        htmlChat.append(h+hora+':'+minutos+'='+data+'<br>');

    });

    
socket.on('usernames', data=>{

    let html ='';
    for (let i=0; i <data.length; i++){
        html += `<p> <i class="fas fa-user"></i> ${data[i]} </p>`
    }
    $user.html(html);
})
});




