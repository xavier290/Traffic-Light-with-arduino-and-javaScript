# Traffic-Light-with-arduino-and-javaScript
This project it's all about a traffic light made with Arduino and javaScript through the Firmata protocol,
it was not made with the Arduino IDE because of the neccesity to make a simple control center with html,
the purpose of this control center is that we want to put the green light at a moment that we choose.

To run this program you just need a code editor, node js, firmata, socket.io and express in ur computer. 

to begin the program just open a console and put "node index.js" on it, before that u need to connect the Arduino through the usb port,
and connect three leds (green,yellow and red) in the pins 2, 3 and 4 respectively.

So u will see a led sequence that simmulates a traffic light, now u can open the browser that u want and look for localHost:8081,
there u can find the website to control the green light of the traffic light.

You can improve this program by adding a second traffic light and a buttom in the website to control it (i'll be working on it).

This program was built with Visual studio code and nodeJs, besides the application of bootstrap and socket.io.

This is just a practice, in the real world it wouldn't have a meaning, what i'm trying to achieve with this is to create a system of 4
traffic lights, working at the same time, and the creation of a complete control system with the lack of a real time monitoring, but i think that
i will be able to do it in the near future, anyway i'm just a beginner.

If u maneged to find this little thing and find it usefull or intersting, please throw a star. 
