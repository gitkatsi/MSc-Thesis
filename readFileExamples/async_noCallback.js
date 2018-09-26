var fs = require("fs");
var path = require("path");
var path = path.join(__dirname, "AsyncExample.txt"); //make path regardless of OS.

function returnFileData() {
    fs.readFile(path, "utf8", (error, fileDataCallback) => {
        return fileDataCallback; //return the data read from file.
    })
}

dataToPrint = returnFileData();
console.log(dataToPrint);

/*
Output
>undefined
*/