var socket = io();

socket.on('connect', function () {
  console.log('Connected to Server');
  
  socket.emit('createMessage', {
  	to: 'Student',
  	text: 'Why you hatin?'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from Server');
});

socket.on('newMessage', function(message){
	console.log('newMessage', message);
});