
	log = document.getElementById('log');
	chat = document.getElementById('chat');
	form = chat.form;
	state = document.getElementById('status');

    var socket = io.connect('http://webrtc.coderighteo.us');

    socket.on('connection', function(){
        console.log('ws connected');
        state.className = 'success';
        state.innerHTML = 'Socket open';
    });

    socket.on('twilio', function(msg){
        console.log('twilio', msg)
        //alert();
        var message = msg.Body; //JSON.parse(event.data);
        var from = msg.From;
        if (!(/^\d+$/).test(message)) {
          log.innerHTML = '<li class="them">' + message.replace(/[<>&]/g, function (m) { return entities[m]; }) + ' - ' + from + '</li>' + log.innerHTML;
        } else {
          connected.innerHTML = message;
        }
    });