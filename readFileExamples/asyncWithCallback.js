var fs = require("fs");
var path = require("path");
var path = path.join(__dirname, "AsyncExample.txt"); //make path regardless of OS. 

var returnFileData = function (callback) {
    fs.readFile(path, "utf8", (error, fileDataCallback) => {
        return callback(fileDataCallback); //return the data read from file.
    })
}

returnFileData(dataToPrint => {
    console.log(dataToPrint);
})

console.log("End of program execution")

/*
Output
> End of program execution
>Data inside the AsyncExample.txt
*/