var socket = io.connect('http://webrtc.coderighteo.us');

socket.on('connection', function(){
    console.log('ws connected');
});

socket.on('twilio', function(msg){
    console.log('twilio', msg)
    alert();
});