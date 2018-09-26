var fs = require("fs");
var path = require("path");
var path = path.join(__dirname, "AsyncExample.txt"); //make path regardless of OS.

function returnFileDataAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (error, dataCallback) => {
            resolve(dataCallback);
        })
    })
}

async function printValueAsync() {
    var dataToPrintAsync = await returnFileDataAsync();
    console.log(dataToPrintAsync);
}

printValueAsync();
