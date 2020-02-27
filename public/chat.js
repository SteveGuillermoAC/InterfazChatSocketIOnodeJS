var socket = io()


//datos hora
var fecha= new Date();
var hora = fecha.getHours();
var minutos= fecha.getMinutes();
var h= hora+':'+minutos;


//DOM ELEMENTs
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');


btn.addEventListener('click', function () {
    socket.emit('chat:message', {
        hora: h,
        message: message.value,
        username: username.value
    });
});

socket.on('chat:message', function (data) {

    output.innerHTML += `<p>
        <strong>${data.hora} ${data.username}</strong> :${data.message}
    </p>`
});



socket.on('chat:timeMessage', function (data){

    actions.innerHTML += `<p>
  <strong>${data.hora} ${data.username}</strong> :${data.message}
    </p>`
});

//lista de usuarios
socket.on('usernames', data=>{

    let html ='';
    for (let i=0; i <data.length; i++){
        html += `<p> <i class="fas fa-user"></i> ${data[i]} </p>`
    }
    $user.html(html);
})