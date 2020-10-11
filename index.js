var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(8081)); 
const Board = require('firmata'); 
app.use(express.static(__dirname + '/app'));
 
app.get('/', function (req,res) { 
  	res.sendFile(__dirname + '/index.html');
});

Board.requestPort(function(err, portInfo) {
    if(err) {
        console.log(err);
        return
    } else {
        console.log("connected");
    }
    const board = new Board(portInfo.path);

    board.on("ready", function () {
        var commands;
        var leds = [4, 3, 2];
        let trafficLight1 = true;        
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }  

        commands = null;
       
        board.pinMode(leds[0], board.MODES.OUTPUT);
        board.pinMode(leds[1], board.MODES.OUTPUT);
        board.pinMode(leds[2], board.MODES.OUTPUT);

        setInterval(function () {  
            if(trafficLight1) {
                console.log('Semaforo 1 en verde');
                board.digitalWrite(leds[0], board.HIGH);
                board.digitalWrite(leds[1], board.LOW);
                board.digitalWrite(leds[2], board.LOW);
            } else {
                console.log('semaforo 1 en rojo'); 
                board.digitalWrite(leds[0], board.LOW);
                board.digitalWrite(leds[1], board.HIGH);
                sleep(500).then(() => { board.digitalWrite(leds[1], board.LOW); });
                sleep(1000).then(() => { board.digitalWrite(leds[1], board.HIGH); });
                sleep(1500).then(() => { board.digitalWrite(leds[1], board.LOW); });
                sleep(2000).then(() => { board.digitalWrite(leds[1], board.HIGH); });
                sleep(2500).then(() => { board.digitalWrite(leds[1], board.LOW); });
                board.digitalWrite(leds[2], board.LOW);
                sleep(2500).then(() => { board.digitalWrite(leds[2], board.HIGH); });
            }
            trafficLight1 = !trafficLight1;
        }, 9000)

    io.on('connection', function(socket) {

        socket.on('verde', function() {
            console.log('Semaforo 1 en verde');
            board.digitalWrite(leds[0], board.HIGH);
            board.digitalWrite(leds[1], board.LOW);
            board.digitalWrite(leds[2], board.LOW);
            trafficLight1 = true;
        });

    });
});
});  
