var socket = io()

//DOM ELEMENTs
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function(){
   socket.emit('chat:message', {
        message: message.value,
        username: username.value
    });
});

/*message.addEventListener('click', function(){

    socket.emit('chat:timeMessage', output.value )

    
}); 
*/
socket.on('chat:message', function(data){

    output.innerHTML +=`<p>
        <strong> 
    </p>`
})