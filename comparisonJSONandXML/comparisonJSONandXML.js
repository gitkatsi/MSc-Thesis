//imports
var fs = require ("fs");
var path = require("path");
var js2xmlparser = require("js2xmlparser")

//read the file one time, no need to fsReadFile
var jsonObj = require("./jsonData.json");

//convert and save file to xml format
var xmlObj = js2xmlparser.parse("person", jsonObj)
fs.writeFileSync(path.join(__dirname, "xmlData.xml"), xmlObj)

//read file properties and print
var jsonSize = fs.statSync(path.join(__dirname, "jsonData.json")).size;
var xmlSize = fs.statSync(path.join(__dirname, "xmlData.xml")).size;
console.log(`Total objects saved: ${jsonObj.length}`)
console.log(`JSON file size is ${jsonSize} Bytes / ${parseFloat(jsonSize*Math.pow(10, -6)).toPrecision(3)} Mbytes `);
console.log(`XML file size is ${xmlSize} Bytes / ${parseFloat(xmlSize*Math.pow(10, -6)).toPrecision(3)} Mbytes`);

/* Output
Total objects saved: 21537
JSON file size is 1399204 Bytes / 1.40 Mbytes
XML file size is 2993002 Bytes / 2.99 Mbytes
*/
