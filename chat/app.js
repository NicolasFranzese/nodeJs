var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set("view engine",  "jade");

app.get('/', function(req, res){
  res.render('index');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){ // Recibe el mensaje y lo guarda en msg
    io.emit('chat message', msg); // lo emite para el cliente
  });
});

http.listen(8080, function(){
});
