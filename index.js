const express = require('express');
const app = express();
const http = require('http').Server(app);

//connecter les clients entre eux via le serveur
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
app.use(express.static('public'));

//serveur
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');//le serveur app renvoit à la page login.html
  });


http.listen(port, function(){
console.log('listening on *:' + port);
}); 