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


let usernamesList =document.getElementById('usernames');
let usuarios =[]; 
let chat = ('')  

btn.addEventListener('click', function () {
    socket.emit('chat:message', {
        hora: h,
        message: message.value,
        username: username.value,

    })
    if(message.value=='hola'){
        socket.emit('chat:message', {hora: h,message: 'Server says hola', username:'Server'})
    }else if(message.value=='nada'){
        socket.emit('chat:message', {hora: h,message: 'Server doesnt say anything', username:'Server'})
    }else if (message.value=='que hubo'){
        socket.emit('chat:message', {hora: h,message: 'Hey', username:'Server'})
    }
});

socket.on('chat:message', function (data) {

    output.innerHTML += `<p> 
        <strong>${data.hora} ${data.username} :<font color="#ffffff" > ${data.message}</font> </strong>
    </p>`
    usernamesList.innerHTML +=`<p>${data.username}</p>`
});

socket.on('chat:timeMessage', function (data){

    actions.innerHTML += `<p>
  <strong>${data.hora} ${data.username}</strong> :${data.message}
    </p>`
});

//lista de usuarios
socket.on('usernamesList', data=>{

    let html ='';
    for (let i=0; i <data.length; i++){
        html += `<p> <i> class="fas fa-unernamesList"></i> ${data[i]} </p>`
    }
    usernamesList.html(html);
});
/*socket.on('chat:message', function (data){

    output.innerHTML =  `<p> ${data.value} </p>`
});*/