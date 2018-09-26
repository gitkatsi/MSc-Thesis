var fs = require("fs");
var path = require("path");
var event = require("events"); //add event module

var eventemitter = new event; //create new event emitter

var path = path.join(__dirname, "AsyncExample.txt"); //make path regardless of OS.

function returnFileData() {
    fs.readFile(path, "utf8", (error, fileDataCallback) => {
        eventemitter.emit("doneWithFile", fileDataCallback) //emit event
        
    })
}

eventemitter.on("doneWithFile", ()=>{
    console.log("Caught an event and printing it")
})

//listen for emitted event
eventemitter.on("doneWithFile", (fileDataCallback) => {
    console.log(`${fileDataCallback}`) //print value
})

eventemitter.on("doneWithFile", () => {
    console.log("Done handling the event")
})

returnFileData();
/*
>Caught an event and printing it
>Data inside the AsyncExample.txt
>Done handling the event
*/